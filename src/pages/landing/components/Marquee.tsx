import { motion } from "framer-motion"

const marqueeItems = ["Designer", "Creator", "Developer"] as const
const marqueeSequence = [...marqueeItems, ...marqueeItems]
const marqueeTransition = {
    duration: 26,
    ease: "linear" as const,
    repeat: Infinity,
}

export default function Marquee() {
    return (
        <section className="w-full overflow-hidden border-y border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-[linear-gradient(90deg,#131313_0%,rgba(19,19,19,0)_100%)] sm:w-16 lg:w-20" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(270deg,#131313_0%,rgba(19,19,19,0)_100%)] sm:w-16 lg:w-20" />
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={marqueeTransition}
                    className="flex w-max items-center py-4 will-change-transform sm:py-5"
                >
                    {marqueeSequence.map((item, index) => (
                        <div
                            key={`${item}-${index}`}
                            className="flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5"
                            aria-hidden={index >= marqueeItems.length}
                        >
                            <span className="text-sm tracking-[0.18em] text-text sm:text-[18px]">
                                ✦
                            </span>
                            <span className="font-syne text-[1.65rem] font-extrabold uppercase tracking-tight text-text-secondary sm:text-[2rem] lg:text-[2.125rem]">
                                {item}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
