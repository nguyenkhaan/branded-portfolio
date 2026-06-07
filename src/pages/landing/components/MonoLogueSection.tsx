import { customerStyling } from "../../../styles/styles"

export default function InternalMonoSection() {
    return (
        <section className={`${customerStyling.sectionWrapper} min-h-100 flex items-center justify-center flex-col gap-8`}>
            <h3 className="text-text-secondary font-md uppercase text-center font-space tracking-widest">internal monologue</h3>
            <h1 className="text-center px-20 text-primary tracking-tighter italic font-syne font-bold text-5xl">
                "Detach faster. The creative process is an exercise in letting go of your first five ideas to find the sixth that actually matters.”
            </h1>
            <div className="w-0.5 h-16 bg-text-secondary rounded-md">

            </div>
        </section>
    )
}