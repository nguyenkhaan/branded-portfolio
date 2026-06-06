import { useState } from "react"
import { customerStyling } from "../styles/styles"
import Button from "./Button"
import NavbarLabel from "./Label"

const navbarLabels = ["Home", "Visuals", "About", "Contact"] as const

export default function Navbar() 
{
    const [selectedLabel, setSelectedLabel] = useState<(typeof navbarLabels)[number]>("Home")

    return (
        <div className="w-full absolute top-0 left-0 right-0 bg-background/80 border-b-3 h-24 flex items-center justify-center border-b-border">
            <div className={`${customerStyling.sectionWrapper} flex items-center justify-between`}>
                <h1 className="tracking-tighter font-syne text-3xl font-bold text-text">
                    DIGITAL ARTISAN 
                </h1>
                <div className="flex items-center justify-center gap-8">
                    {navbarLabels.map((label) => (
                        <NavbarLabel
                            key={label}
                            text={label}
                            isSelected={selectedLabel === label}
                            onClick={() => setSelectedLabel(label)}
                        />
                    ))}
                </div>
                <Button></Button>
            </div>
        </div>
    )
}
