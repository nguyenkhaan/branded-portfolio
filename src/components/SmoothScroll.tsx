import { useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

const DESKTOP_SCROLL_QUERY = '(min-width: 1024px) and (pointer: fine)';
const SCROLL_EASING = 0.085;
const SCROLL_SPEED = 0.88;
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
            Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);

        const animateScroll = () => {
            currentScrollRef.current +=
                (targetScrollRef.current - currentScrollRef.current) * SCROLL_EASING;

            if (
                Math.abs(targetScrollRef.current - currentScrollRef.current) < 0.1
            ) {
                currentScrollRef.current = targetScrollRef.current;
            }

            isProgrammaticScrollRef.current = true;
            window.scrollTo({
                top: currentScrollRef.current,
                behavior: 'auto',
            });
            window.requestAnimationFrame(() => {
                isProgrammaticScrollRef.current = false;
            });

            animationFrameRef.current = window.requestAnimationFrame(animateScroll);
        };

        const applyDelta = (delta: number) => {
            targetScrollRef.current = clamp(
                targetScrollRef.current + delta * SCROLL_SPEED,
                0,
                getMaxScroll(),
            );
        };

        const handleWheel = (event: WheelEvent) => {
            if (event.ctrlKey) {
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

            const scrollY = window.scrollY;
            currentScrollRef.current = scrollY;
            targetScrollRef.current = scrollY;
        };

        const handleResize = () => {
            const maxScroll = getMaxScroll();
            targetScrollRef.current = clamp(targetScrollRef.current, 0, maxScroll);
            currentScrollRef.current = clamp(currentScrollRef.current, 0, maxScroll);
        };

        animationFrameRef.current = window.requestAnimationFrame(animateScroll);
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);

            if (animationFrameRef.current !== null) {
                window.cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isEnabled]);

    return <>{children}</>;
}
