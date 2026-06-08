import type { PointerEvent } from 'react';
import { useEffect, useState } from 'react';
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
} from 'framer-motion';

import { works } from '../../../bases/me.constant';
import Section from '../../../layouts/Section';
import AnimatedArrow from './AnimatedArrow';
import SectionHeading from './SectionHeading';
import WorkItem from './WorkItem';

type WorkEntry = (typeof works)[number];

const previewWidth = 420;
const previewHeight = 260;
const previewOffset = 28;
const previewPadding = 24;
const technicalEase = [0.22, 1, 0.36, 1] as const;

export default function WorkSection() {
    const prefersReducedMotion = useReducedMotion();
    const [activeWork, setActiveWork] = useState<WorkEntry | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isDesktopPreview, setIsDesktopPreview] = useState(false);

    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const smoothX = useSpring(pointerX, {
        stiffness: prefersReducedMotion ? 500 : 240,
        damping: prefersReducedMotion ? 50 : 28,
        mass: 0.45,
    });
    const smoothY = useSpring(pointerY, {
        stiffness: prefersReducedMotion ? 500 : 240,
        damping: prefersReducedMotion ? 50 : 28,
        mass: 0.45,
    });

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        const syncDesktopMode = () => setIsDesktopPreview(mediaQuery.matches);

        syncDesktopMode();
        mediaQuery.addEventListener('change', syncDesktopMode);

        return () => mediaQuery.removeEventListener('change', syncDesktopMode);
    }, []);

    function updatePreviewPosition(clientX: number, clientY: number) {
        let nextX = clientX + previewOffset;
        let nextY = clientY - previewHeight / 2;

        if (typeof window !== 'undefined') {
            const maxX = window.innerWidth - previewWidth - previewPadding;
            const maxY = window.innerHeight - previewHeight - previewPadding;

            if (nextX > maxX) {
                nextX = clientX - previewWidth - previewOffset;
            }

            nextY = Math.min(Math.max(nextY, previewPadding), Math.max(previewPadding, maxY));
        }

        pointerX.set(nextX);
        pointerY.set(nextY);
    }

    function handlePreviewEnter(
        work: WorkEntry,
        index: number,
        event: PointerEvent<HTMLAnchorElement>,
    ) {
        if (!isDesktopPreview) {
            return;
        }

        setActiveIndex(index);
        setActiveWork(work);
        updatePreviewPosition(event.clientX, event.clientY);
    }

    function handlePreviewMove(event: PointerEvent<HTMLAnchorElement>) {
        if (!isDesktopPreview) {
            return;
        }

        updatePreviewPosition(event.clientX, event.clientY);
    }

    function handlePreviewLeave() {
        setActiveIndex(null);
        setActiveWork(null);
    }

    return (
        <Section
            id={'work'}
            header={
                <div className="flex w-full flex-col gap-4 border-b border-b-border py-6 sm:py-7 lg:flex-row lg:items-center lg:justify-between lg:py-8">
                    <SectionHeading>Selected Work</SectionHeading>
                    <p className="flex flex-wrap items-center gap-3 text-sm tracking-wide font-space sm:text-base">
                        <span className="text-text-secondary">
                            [ 3 PROJECT ARCHIVED ]
                        </span>
                        <a href='https://github.com/nguyenkhaan?tab=repositories' target='_blank'>
                            <span className="group inline-flex min-h-11 items-center text-text font-semibold">
                                VIEW FULL ARCHIVE
                                <AnimatedArrow className="inline ml-2 cursor-pointer" />
                            </span>
                        </a>
                    </p>
                </div>
            }
        >
            <div className="relative">
                <AnimatePresence>
                    {isDesktopPreview && activeWork && (
                        <motion.div
                            key={activeWork.name}
                            initial={{
                                opacity: 0,
                                scale: prefersReducedMotion ? 1 : 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: prefersReducedMotion ? 1 : 0.98,
                            }}
                            transition={{
                                duration: prefersReducedMotion ? 0.18 : 0.3,
                                ease: technicalEase,
                            }}
                            style={{ x: smoothX, y: smoothY }}
                            className="pointer-events-none fixed left-0 top-0 z-50 hidden lg:block"
                        >
                            <img
                                src={activeWork.image}
                                alt={`${activeWork.name} preview`}
                                className="h-[16.25rem] w-[26.25rem] object-cover object-top"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                {works.map((work, index) => {
                    return (
                        <WorkItem
                            key={work.name}
                            index={index + 1}
                            name={work.name}
                            description={work.description}
                            year={work.year}
                            img={work.image}
                            link={work.link}
                            revealDelay={index * 0.1}
                            isActive={isDesktopPreview && activeIndex === index}
                            onPreviewEnter={(event) => handlePreviewEnter(work, index, event)}
                            onPreviewMove={handlePreviewMove}
                            onPreviewLeave={handlePreviewLeave}
                        />
                    );
                })}
            </div>
        </Section>
    );
}
