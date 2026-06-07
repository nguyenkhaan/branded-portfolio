import { customerStyling } from "../../../styles/styles"

export default function InternalMonoSection() {
    return (
        <section className={`${customerStyling.sectionWrapper} flex min-h-0 flex-col items-center justify-center gap-6 py-8 sm:gap-8 lg:min-h-100`}>
            <h3 className="text-center font-space text-xs tracking-[0.18em] text-text-secondary uppercase sm:text-sm">internal monologue</h3>
            <h1 className="px-2 text-center font-syne text-[2rem] font-bold italic tracking-tight text-primary sm:px-8 sm:text-[2.75rem] lg:px-20 lg:text-5xl">
                "Detach faster. The creative process is an exercise in letting go of your first five ideas to find the sixth that actually matters.”
            </h1>
            <div className="h-12 w-0.5 rounded-md bg-text-secondary sm:h-16">

            </div>
        </section>
    )
}
