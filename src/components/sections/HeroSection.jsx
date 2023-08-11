import squiggle from "../../squiggle.svg"
import { motion } from "framer-motion"

export default function HeroSection() {
    return (
        <section className="py-16 hero flex items-center gap-8">
            <h1 className="font-bold text-5xl flex-1">A <motion.span
                                                         transition={{ duration: 1, ease: "easeInOut" }}
                                                         initial={{ opacity: 0 }} 
                                                         animate={{ opacity: 1 }}>Software Developer </motion.span>
                                                       From The United Kingdom.</h1>
            <div className="flex-1">
                <img className="max-h-80 ml-auto" src={squiggle}></img>
            </div>
         </section>
    )
}