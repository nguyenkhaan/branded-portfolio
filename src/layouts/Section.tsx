import type { ReactNode } from "react";
import { customerStyling } from "../styles/styles";

export default function Section({
    header , children 
} : {header : ReactNode , children : ReactNode}) 
{
    return (
        <section className = {`${customerStyling.sectionWrapper} min-h-0 lg:min-h-100`}>
            <div className="w-full">
                {header}
            </div> 
            <div className="mt-4 sm:mt-5 lg:mt-6">
                {children}
            </div>
        </section>
    )
}
