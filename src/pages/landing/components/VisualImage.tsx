import { motion, useReducedMotion } from 'framer-motion';

import { luxuryRevealTransition, revealViewport } from '../../../lib/animation';

export default function VisualCard({
    url,
    delay = 0,
} : { 
    url : string
    delay?: number;
}) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ ...luxuryRevealTransition, delay }}
            className='group relative aspect-[4/5] w-full cursor-pointer overflow-hidden'
        >
            <img
                src={url}
                className='h-full w-full object-cover transition-all duration-700 lg:grayscale lg:group-hover:scale-110 lg:group-hover:grayscale-0'
            />

            <div className='absolute inset-0 bg-black/35 opacity-100 transition-all duration-700 lg:opacity-0 lg:group-hover:opacity-100'></div>
            <div className='absolute left-4 bottom-4 opacity-100 transition-all duration-700 lg:opacity-0 lg:group-hover:opacity-100'>
                <p className='font-space text-xs tracking-wider text-text-secondary'>Dreamspace</p>
                <p className='font-syne text-base font-semibold tracking-wider text-text sm:text-lg'>Mono</p>
            </div>
        </motion.div>
    )
}
