import { technologies } from "../../../bases/me.constant";
import Section from "../../../layouts/Section";
import TechItem from "./TechItem";

export default function TechSection() {
    return (
        <Section
            header = {
                <div className="w-full text-center flex flex-col gap-6">
                    <span className="font-space text-text-secondary font-semibold uppercase tracking-widest">Technologies I work with</span>
                    <h1 className="text-text font-syne font-bold tracking-tighter text-5xl">I'm a full-stack developer</h1>
                </div>
            }

        >
            <div className="grid-cols-4 grid gap-3 mt-12">
                {
                    technologies.map((tech , index) => {
                        return <TechItem name = {tech.name} icon = {tech.icon} key = {index} /> 
                    })
                }
            </div>
        </Section>
    )
}