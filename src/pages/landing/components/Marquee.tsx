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
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,#131313_0%,rgba(19,19,19,0)_100%)]" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,#131313_0%,rgba(19,19,19,0)_100%)]" />
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={marqueeTransition}
                    className="flex w-max items-center py-5 will-change-transform"
                >
                    {marqueeSequence.map((item, index) => (
                        <div
                            key={`${item}-${index}`}
                            className="flex shrink-0 items-center gap-5 pr-5"
                            aria-hidden={index >= marqueeItems.length}
                        >
                            <span className="text-[18px] text-text tracking-[0.18em]">
                                ✦
                            </span>
                            <span className="font-syne text-[34px] font-extrabold uppercase tracking-tight text-text-secondary">
                                {item}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
