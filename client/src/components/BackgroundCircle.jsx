import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function BackgroundCircle({ radius, top, left, right, bottom }) {
    function randomColor() {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    return (
        <motion.div 
        className="-z-10 rounded-full blur-[150px] opacity-20 absolute" 
        style={{
            width: radius,
            height: radius,
            background: randomColor(),
            top: top,
            left: left,
            right: right,
            bottom: bottom
        }}></motion.div>
    )
}