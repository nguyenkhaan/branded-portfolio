import { animate, useInView, useMotionValue, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

const technicalEase = [0.22, 1, 0.36, 1] as const;

export default function AnimatedCounter({
    value,
    suffix = '',
    duration = 1.2,
    className = '',
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, {
        once: false,
        amount: 0.45,
    });
    const prefersReducedMotion = useReducedMotion();
    const motionValue = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const unsubscribe = motionValue.on('change', (latest) => {
            setDisplayValue(Math.round(latest));
        });

        return unsubscribe;
    }, [motionValue]);

    useEffect(() => {
        if (!isInView) {
            motionValue.set(0);
            setDisplayValue(0);
            return;
        }

        if (prefersReducedMotion) {
            motionValue.set(value);
            setDisplayValue(value);
            return;
        }

        const controls = animate(motionValue, value, {
            duration,
            ease: technicalEase,
        });

        return () => controls.stop();
    }, [duration, isInView, motionValue, prefersReducedMotion, value]);

    return (
        <span ref={ref} className={className}>
            {displayValue}
            {suffix}
        </span>
    );
}
