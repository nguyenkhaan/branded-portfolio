import { motion, useReducedMotion } from 'framer-motion';

import { customerStyling } from '../../../styles/styles';
import { luxuryEase, luxuryRevealTransition } from '../../../lib/animation';

const headline = ['DIGITAL', 'ARTISAN'] as const;

function HeroLine({
    line,
    lineIndex,
}: {
    line: string;
    lineIndex: number;
}) {
    return (
        <span className="block overflow-hidden">
            {line.split('').map((character, index) => (
                <motion.span
                    key={`${line}-${index}`}
                    initial={{
                        opacity: 0,
                        y: 26,
                        filter: 'blur(8px)',
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                    }}
                    transition={{
                        duration: 0.95,
                        ease: luxuryEase,
                        delay: lineIndex * 0.16 + index * 0.02,
                    }}
                    className="inline-block"
                >
                    {character === ' ' ? '\u00A0' : character}
                </motion.span>
            ))}
        </span>
    );
}

export default function HeroSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.section
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={luxuryRevealTransition}
            className={`${customerStyling.sectionWrapper} flex min-h-[calc(100svh-9rem)] flex-col items-center justify-center gap-4 py-14 text-center sm:min-h-[calc(100svh-10rem)] sm:py-16 lg:min-h-[calc(100svh-6rem)] lg:py-20`}
        >
            <motion.h2
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...luxuryRevealTransition, delay: 0.08 }}
                className="font-space text-sm font-medium tracking-[0.2em] text-text-secondary uppercase sm:text-base"
            >
                Branded in White
            </motion.h2>
            <h1 className="items-center font-syne text-[3.35rem] font-black leading-[0.88] tracking-[0.12em] uppercase sm:text-[4.5rem] md:text-[5.75rem] lg:text-[6.5rem] xl:text-[7.4rem]">
                {prefersReducedMotion ? (
                    <>
                        <span className="my-2 block sm:my-3">DIGITAL</span>
                        <span className="block">ARTISAN</span>
                    </>
                ) : (
                    headline.map((line, index) => (
                        <span
                            key={line}
                            className={index === 0 ? 'my-2 block sm:my-3' : 'block'}
                        >
                            <HeroLine line={line} lineIndex={index} />
                        </span>
                    ))
                )}
            </h1>
            <motion.div
                initial={prefersReducedMotion ? false : { scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ ...luxuryRevealTransition, delay: 0.38 }}
                className="my-2 h-14 w-0.5 origin-top rounded-md bg-[linear-gradient(to_bottom,white_0%,#d0d0d0_40%,#6b6b6b_70%,#131313_100%)] sm:my-3 sm:h-18"
            ></motion.div>
            <motion.h2
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...luxuryRevealTransition, delay: 0.46 }}
                className="font-space text-xs font-medium tracking-[0.2em] text-text-secondary uppercase sm:text-sm"
            >
                Scroll to explore 
            </motion.h2>
        </motion.section>
    );
}
