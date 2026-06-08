import { useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

const DESKTOP_SCROLL_QUERY = '(min-width: 1024px) and (pointer: fine)';

const SCROLL_EASING = 0.12;
const SCROLL_SPEED = 0.6;

const KEYBOARD_STEP = 120;
const PAGE_STEP_RATIO = 0.85;

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const prefersReducedMotion = useReducedMotion();

    const [isEnabled, setIsEnabled] = useState(false);

    const animationFrameRef = useRef<number | null>(null);

    const currentScrollRef = useRef(0);

    const targetScrollRef = useRef(0);

    const isProgrammaticScrollRef = useRef(false);

    const isDraggingScrollbarRef = useRef(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const mediaQuery = window.matchMedia(DESKTOP_SCROLL_QUERY);

        const syncAvailability = () => {
            setIsEnabled(mediaQuery.matches && !prefersReducedMotion);
        };

        syncAvailability();

        mediaQuery.addEventListener('change', syncAvailability);

        return () => mediaQuery.removeEventListener('change', syncAvailability);
    }, [prefersReducedMotion]);

    useEffect(() => {
        if (!isEnabled || typeof window === 'undefined') {
            return;
        }

        currentScrollRef.current = window.scrollY;

        targetScrollRef.current = window.scrollY;

        const getMaxScroll = () =>
            Math.max(
                document.documentElement.scrollHeight - window.innerHeight,
                0
            );

        const animateScroll = () => {
            if (isDraggingScrollbarRef.current) {
                currentScrollRef.current = window.scrollY;

                targetScrollRef.current = window.scrollY;

                animationFrameRef.current =
                    requestAnimationFrame(animateScroll);

                return;
            }

            const difference =
                targetScrollRef.current - currentScrollRef.current;

            currentScrollRef.current += difference * SCROLL_EASING;

            if (Math.abs(difference) < 0.5) {
                currentScrollRef.current = targetScrollRef.current;
            }

            if (Math.abs(window.scrollY - currentScrollRef.current) > 0.5) {
                isProgrammaticScrollRef.current = true;

                window.scrollTo({
                    top: currentScrollRef.current,
                    behavior: 'auto',
                });

                requestAnimationFrame(() => {
                    isProgrammaticScrollRef.current = false;
                });
            }

            animationFrameRef.current = requestAnimationFrame(animateScroll);
        };

        const applyDelta = (delta: number) => {
            targetScrollRef.current = clamp(
                targetScrollRef.current + delta * SCROLL_SPEED,
                0,
                getMaxScroll()
            );
        };

        const handleWheel = (event: WheelEvent) => {
            if (event.ctrlKey || isDraggingScrollbarRef.current) {
                return;
            }

            event.preventDefault();

            applyDelta(event.deltaY);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            const activeElement = document.activeElement as HTMLElement | null;

            if (
                activeElement?.tagName === 'INPUT' ||
                activeElement?.tagName === 'TEXTAREA' ||
                activeElement?.isContentEditable
            ) {
                return;
            }

            const pageStep = window.innerHeight * PAGE_STEP_RATIO;

            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    applyDelta(KEYBOARD_STEP);
                    break;

                case 'ArrowUp':
                    event.preventDefault();
                    applyDelta(-KEYBOARD_STEP);
                    break;

                case 'PageDown':
                case ' ':
                    event.preventDefault();
                    applyDelta(pageStep);
                    break;

                case 'PageUp':
                    event.preventDefault();
                    applyDelta(-pageStep);
                    break;

                case 'Home':
                    event.preventDefault();
                    targetScrollRef.current = 0;
                    break;

                case 'End':
                    event.preventDefault();
                    targetScrollRef.current = getMaxScroll();
                    break;

                default:
                    break;
            }
        };

        const handleScroll = () => {
            if (isProgrammaticScrollRef.current) {
                return;
            }

            currentScrollRef.current = window.scrollY;

            targetScrollRef.current = window.scrollY;
        };

        const handleResize = () => {
            const maxScroll = getMaxScroll();

            targetScrollRef.current = clamp(
                targetScrollRef.current,
                0,
                maxScroll
            );

            currentScrollRef.current = clamp(
                currentScrollRef.current,
                0,
                maxScroll
            );
        };

        const handleMouseDown = (event: MouseEvent) => {
            const scrollbarWidth =
                window.innerWidth - document.documentElement.clientWidth;

            if (scrollbarWidth <= 0) {
                return;
            }

            const clickedScrollbar =
                event.clientX >= window.innerWidth - scrollbarWidth;

            if (clickedScrollbar) {
                isDraggingScrollbarRef.current = true;
            }
        };

        const handleMouseUp = () => {
            isDraggingScrollbarRef.current = false;

            currentScrollRef.current = window.scrollY;

            targetScrollRef.current = window.scrollY;
        };

        animationFrameRef.current = requestAnimationFrame(animateScroll);

        window.addEventListener('wheel', handleWheel, { passive: false });

        window.addEventListener('keydown', handleKeyDown);

        window.addEventListener('scroll', handleScroll, { passive: true });

        window.addEventListener('resize', handleResize);

        window.addEventListener('mousedown', handleMouseDown);

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('wheel', handleWheel);

            window.removeEventListener('keydown', handleKeyDown);

            window.removeEventListener('scroll', handleScroll);

            window.removeEventListener('resize', handleResize);

            window.removeEventListener('mousedown', handleMouseDown);

            window.removeEventListener('mouseup', handleMouseUp);

            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isEnabled]);

    return <>{children}</>;
}
