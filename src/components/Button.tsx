import {motion} from 'framer-motion'
export default function Button() {
    return (
        <motion.button 
            
            className="min-h-11 rounded-full bg-white px-4 py-2 text-sm font-semibold tracking-wide text-secondary transition-all duration-300 cursor-pointer font-syne sm:px-5 sm:text-base lg:hover:scale-[0.98] lg:hover:border lg:hover:border-active-border">
            Connect 
        </motion.button>
    )
}
