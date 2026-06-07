import type { PointerEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import AnimatedArrow from './AnimatedArrow';

interface WorkItemProps {
    name: string;
    description: string;
    year: number;
    img: string;
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
    img,
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
            <div className="flex flex-col gap-5 px-4 py-5 sm:px-5 lg:gap-6">
                <div className="overflow-hidden lg:hidden">
                    <img
                        src={img}
                        alt={`${name} preview`}
                        className="aspect-[16/10] w-full object-cover object-top"
                    />
                </div>
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <motion.div
                    animate={{ x: isActive ? horizontalShift : 0 }}
                    transition={contentTransition}
                    className="flex items-center gap-4 sm:gap-5 lg:gap-6"
                >
                    <span className="text-base font-space tracking-normal text-text-secondary sm:text-lg lg:text-xl">
                        {index.toString().padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[1.65rem] tracking-tight text-text sm:text-2xl lg:text-3xl xl:text-[2.15rem]">
                        {name}
                    </span>
                </motion.div>
                <motion.div
                    animate={{ x: isActive ? -horizontalShift : 0 }}
                    transition={contentTransition}
                    className="flex flex-wrap items-center gap-4 sm:gap-5 lg:justify-end lg:gap-8 xl:gap-10"
                >
                    <span className="font-space text-xs font-medium tracking-[0.2em] text-text-secondary uppercase sm:text-sm lg:text-lg lg:tracking-[0.28em]">
                        {description}
                    </span>
                    <span className="font-space text-xs tracking-[0.2em] text-text-secondary uppercase sm:text-sm lg:text-base lg:tracking-[0.28em]">
                        {year}
                    </span>
                    <AnimatedArrow className="shrink-0 text-text-secondary transition-colors duration-500 lg:group-hover:text-text" />
                </motion.div>
                </div>
            </div>
        </motion.a>
    );
}
