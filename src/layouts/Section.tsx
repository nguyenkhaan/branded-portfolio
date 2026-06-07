import type { ReactNode } from "react";
import { customerStyling } from "../styles/styles";

export default function Section({
    header , children 
} : {header : ReactNode , children : ReactNode}) 
{
    return (
        <section className = {`${customerStyling.sectionWrapper} min-h-100`}>
            <div className="w-full">
                {header}
            </div> 
            <div className="my-4">
                {children}
            </div>
        </section>
    )
}