import { useState } from "react"
import { customerStyling } from "../styles/styles"
import Button from "./Button"
import NavbarLabel from "./Label"

const navbarLabels = ["Home", "Visuals", "About", "Contact"] as const

export default function Navbar() 
{
    const [selectedLabel, setSelectedLabel] = useState<(typeof navbarLabels)[number]>("Home")

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-b-border bg-background/88 backdrop-blur-md">
            <div className={`${customerStyling.sectionWrapper} flex flex-col gap-4 py-4 sm:py-5 lg:h-24 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-0`}>
                <div className="flex items-center justify-between gap-4">
                    <h1 className="font-syne text-2xl font-bold tracking-tight text-text sm:text-3xl">
                    DIGITAL ARTISAN 
                    </h1>
                    <div className="lg:hidden">
                        <Button />
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-8 lg:flex-1">
                    {navbarLabels.map((label) => (
                        <NavbarLabel
                            key={label}
                            text={label}
                            isSelected={selectedLabel === label}
                            onClick={() => setSelectedLabel(label)}
                        />
                    ))}
                </div>
                <div className="hidden lg:block">
                    <Button />
                </div>
            </div>
        </nav>
    )
}
