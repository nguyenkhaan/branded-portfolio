import { motion, useReducedMotion } from 'framer-motion';
import StackIcon from "tech-stack-icons"

import { luxuryRevealTransition, revealViewport } from '../../../lib/animation';

export default function TechItem({
    name , icon, delay = 0
}: {
    name : string, icon : string, delay?: number
}) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ ...luxuryRevealTransition, delay }}
            className="flex min-h-36 flex-col items-center justify-center gap-4 border border-border p-6 transition-all duration-300 sm:min-h-40 sm:gap-5 sm:p-8 lg:hover:bg-active-border"
        >
            <StackIcon className='h-9 w-9 opacity-80 sm:h-10 sm:w-10' variant='dark' name={icon} />
            <span className="text-center font-space text-base tracking-tight text-text-secondary sm:text-lg">{name}</span>  
            
        </motion.div>
    )
}
