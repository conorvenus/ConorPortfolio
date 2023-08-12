import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function BackgroundCircle({ radius, top, left, right, bottom }) {
    function randomColor() {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    const [color, setColor] = useState(randomColor())

    useEffect(() => {
        const interval = setInterval(() => {
          setColor(randomColor())
        }, 3000);
    
        return () => clearInterval(interval)
    }, []);

    return (
        <motion.div 
        className="-z-10 rounded-full blur-[150px] opacity-20 absolute" 
        style={{
            width: radius,
            height: radius,
            background: color,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            transition: "all 3s ease-in-out"
        }}></motion.div>
    )
}