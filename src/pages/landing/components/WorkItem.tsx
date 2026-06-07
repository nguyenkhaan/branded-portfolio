import type { PointerEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import AnimatedArrow from './AnimatedArrow';

interface WorkItemProps {
    name: string;
    description: string;
    year: number;
    link: string;
    index: number;
    isActive: boolean;
    onPreviewEnter: (event: PointerEvent<HTMLAnchorElement>) => void;
    onPreviewMove: (event: PointerEvent<HTMLAnchorElement>) => void;
    onPreviewLeave: () => void;
}

const technicalEase = [0.22, 1, 0.36, 1] as const;
const contentTransition = {
    duration: 0.58,
    ease: technicalEase,
};

export default function WorkItem({
    name,
    description,
    year,
    link,
    index,
    isActive,
    onPreviewEnter,
    onPreviewMove,
    onPreviewLeave,
}: WorkItemProps) {
    const prefersReducedMotion = useReducedMotion();
    const horizontalShift = prefersReducedMotion ? 0 : 14;

    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noreferrer"
            onPointerEnter={onPreviewEnter}
            onPointerMove={onPreviewMove}
            onPointerLeave={onPreviewLeave}
            className="group block w-full cursor-pointer border-b border-b-border py-6 focus-visible:outline-none"
        >
            <div className="flex flex-col gap-6 px-4 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-5">
                <motion.div
                    animate={{ x: isActive ? horizontalShift : 0 }}
                    transition={contentTransition}
                    className="flex items-center gap-5 lg:gap-6"
                >
                    <span className="text-lg font-space tracking-normal text-text-secondary lg:text-xl">
                        {index.toString().padStart(2, '0')}
                    </span>
                    <span className="font-sans text-2xl tracking-tight text-text lg:text-3xl xl:text-[2.15rem]">
                        {name}
                    </span>
                </motion.div>
                <motion.div
                    animate={{ x: isActive ? -horizontalShift : 0 }}
                    transition={contentTransition}
                    className="flex flex-wrap items-center gap-5 lg:gap-8 xl:gap-10"
                >
                    <span className="font-space text-sm font-medium tracking-[0.28em] text-text-secondary uppercase lg:text-lg">
                        {description}
                    </span>
                    <span className="font-space text-sm tracking-[0.28em] text-text-secondary uppercase lg:text-base">
                        {year}
                    </span>
                    <AnimatedArrow className="shrink-0 text-text-secondary transition-colors duration-500 group-hover:text-text" />
                </motion.div>
            </div>
        </motion.a>
    );
}
