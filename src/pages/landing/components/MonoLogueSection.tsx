import { motion, useReducedMotion } from 'framer-motion';

import { luxuryRevealTransition, revealViewport } from '../../../lib/animation';
import { customerStyling } from "../../../styles/styles"

export default function InternalMonoSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={luxuryRevealTransition}
            className={`${customerStyling.sectionWrapper} flex min-h-0 flex-col items-center justify-center gap-6 py-8 sm:gap-8 lg:min-h-100`}
        >
            <motion.h3
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ ...luxuryRevealTransition, delay: 0.08 }}
                className="text-center font-space text-xs tracking-[0.18em] text-text-secondary uppercase sm:text-sm"
            >
                coder in white - coding in red
            </motion.h3>
            <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ ...luxuryRevealTransition, delay: 0.18 }}
                className="px-2 text-center font-syne text-[2rem] font-bold italic tracking-tight text-primary sm:px-8 sm:text-[2.75rem] lg:px-20 lg:text-5xl"
            >
                "No man can win every battle, but no man should fall without a struggle”
            </motion.h1>
            <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={revealViewport}
                transition={{ ...luxuryRevealTransition, delay: 0.28 }}
                className="h-12 w-0.5 origin-top rounded-md bg-text-secondary sm:h-16"
            >

            </motion.div>
        </motion.section>
    )
}
