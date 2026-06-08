import { motion, useInView, useReducedMotion } from 'framer-motion';
import type { ReactNode } from "react";
import { useRef } from 'react';
import { customerStyling } from "../styles/styles";
import { luxuryRevealTransition } from '../lib/animation';

export default function Section({
    header , children , id = ''
} : {header : ReactNode , id : string ; children : ReactNode}) 
{
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.15,
    });
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.section
            id = {id}
            ref={ref}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={
                prefersReducedMotion || isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
            }
            transition={luxuryRevealTransition}
            className = {`${customerStyling.sectionWrapper} min-h-0 lg:min-h-100`}
        >
            <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={
                    prefersReducedMotion || isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 18 }
                }
                transition={{ ...luxuryRevealTransition, delay: 0.04 }}
                className="w-full"
            >
                {header}
            </motion.div> 
            <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={
                    prefersReducedMotion || isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 18 }
                }
                transition={{ ...luxuryRevealTransition, delay: 0.14 }}
                className="mt-4 sm:mt-5 lg:mt-6"
            >
                {children}
            </motion.div>
        </motion.section>
    )
}
