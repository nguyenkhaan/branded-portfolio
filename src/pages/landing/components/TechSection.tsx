import { technologies } from "../../../bases/me.constant";
import Section from "../../../layouts/Section";
import TechItem from "./TechItem";

export default function TechSection() {
    return (
        <Section
            header = {
                <div className="flex w-full flex-col gap-4 text-center sm:gap-5 lg:gap-6">
                    <span className="font-space text-xs font-semibold tracking-[0.18em] text-text-secondary uppercase sm:text-sm">Technologies I work with</span>
                    <h1 className="font-syne text-[2.25rem] font-bold tracking-tight text-text sm:text-[2.85rem] lg:text-5xl">I'm a full-stack developer</h1>
                </div>
            }

        >
            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 lg:grid-cols-4">
                {
                    technologies.map((tech , index) => {
                        return <TechItem name = {tech.name} icon = {tech.icon} key = {index} /> 
                    })
                }
            </div>
        </Section>
    )
}
