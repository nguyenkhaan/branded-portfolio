import { ArrowUpRight } from 'lucide-react';

interface AnimatedArrowProps {
    className?: string;
}

export default function AnimatedArrow({ className = '' }: AnimatedArrowProps) {
    return (
        <ArrowUpRight
            className={`transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45 ${className}`}
        />
    );
}
