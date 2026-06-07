import type { ReactNode } from "react";

export default function SectionHeading({children} : {children : ReactNode}) {
    return (
        <h1 className="text-text text-[48px] font-syne font-bold tracking-tight">
            {children}
        </h1>
    )
}