import type { PointerEvent } from 'react';
import { useState } from 'react';
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
        setActiveIndex(index);
        setActiveWork(work);
        updatePreviewPosition(event.clientX, event.clientY);
    }

    function handlePreviewMove(event: PointerEvent<HTMLAnchorElement>) {
        updatePreviewPosition(event.clientX, event.clientY);
    }

    function handlePreviewLeave() {
        setActiveIndex(null);
        setActiveWork(null);
    }

    return (
        <Section
            header={
                <div className="w-full flex items-center justify-between border-b border-b-border py-8">
                    <SectionHeading>Selected Work</SectionHeading>
                    <p className="flex gap-4 text-base tracking-wide font-space">
                        <span className="text-text-secondary">
                            [ 3 PROJECT ARCHIVED ]
                        </span>
                        <span className="text-text font-semibold group">
                            VIEW FULL ARCHIVE
                            <AnimatedArrow className="inline ml-2 cursor-pointer" />
                        </span>
                    </p>
                </div>
            }
        >
            <div className="relative">
                <AnimatePresence>
                    {activeWork && (
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
                                className="h-[16.25rem] w-[26.25rem] rounded-lg object-cover object-top"
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
                            link={work.link}
                            isActive={activeIndex === index}
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
