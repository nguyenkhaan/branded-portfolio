import {motion} from 'framer-motion'
export default function Button() {
    return (
        <motion.button 
            
            className="bg-white text-secondary transition-all duration-300 hover:scale-[0.98] cursor-pointer text-lg px-5 py-2 hover:border hover:border-active-border font-semibold font-syne tracking-wider">
            Connect 
        </motion.button>
    )
}