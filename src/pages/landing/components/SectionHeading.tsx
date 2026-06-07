import type { ReactNode } from "react";

export default function SectionHeading({children} : {children : ReactNode}) {
    return (
        <h1 className="font-syne text-[2.25rem] font-bold tracking-tight text-text sm:text-[2.75rem] lg:text-[3rem]">
            {children}
        </h1>
    )
}
