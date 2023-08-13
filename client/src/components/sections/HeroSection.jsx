import myself from "../../myself.png"
import { motion } from "framer-motion"

export default function HeroSection() {
    return (
        <section className="py-16 hero flex items-center gap-8 md:flex-row flex-col">
            <motion.h1 
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="font-bold text-5xl flex-1">A     <motion.span
                                                         transition={{ duration: 1, ease: "easeInOut" }}
                                                         initial={{ opacity: 0 }} 
                                                         animate={{ opacity: 1 }}>Software Developer </motion.span>
                                                       From The United Kingdom.</motion.h1>
            <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 200}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            >
                <img className="max-h-96 ml-auto object-contain aspect-square rounded-full" src={myself}></img>
            </motion.div>
         </section>
    )
}