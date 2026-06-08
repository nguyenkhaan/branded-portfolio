import { motion } from 'framer-motion';

const technicalEase = [0.16, 1, 0.3, 1] as const;
const indicatorTransition = {
    duration: 1.05,
    ease: technicalEase,
};
const textTransition = {
    duration: 0.72,
    ease: technicalEase,
};
const hoverTransition = {
    duration: 0.55,
    ease: technicalEase,
};

export interface TextProps {
    text: string;
    isSelected?: boolean;
    onClick?: () => void;
}
export default function NavbarLabel({
    text,
    isSelected = false,
    onClick,
}: TextProps) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ y: -0.5 }}
            transition={hoverTransition}
            className="relative inline-flex min-h-11 items-center justify-center px-1 pr-2 text-sm font-medium tracking-wide uppercase cursor-pointer font-syne sm:text-base"
        >
            {isSelected && (
                <motion.span
                    layoutId="navbar-selected-indicator"
                    transition={indicatorTransition}
                    className="absolute -top-2 -right-2 h-4 w-4 rounded-full
                        bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.4)_25%,rgba(255,255,255,0.15)_50%,transparent_75%)]"
                />
            )}
            <motion.a
                href={`#${text}`}
                animate={{
                    color: isSelected ? '#ffffff' : '#a1a1a1',
                    opacity: isSelected ? 1 : 0.8,
                }}
                transition={textTransition}
            >
                {text}
            </motion.a>
        </motion.button>
    );
}
