import { motion } from "framer-motion";

export default function Card({ date, title, subtitle, bullets }) {
  return (
    <article className="card relative grid grid-cols-2 gap-4 border p-4 rounded-md border-text-secondary">
        <span className="col-span-2 text-[#5BFF9D]">{date}</span>
        <motion.span
          className="font-bold text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
        {title}
        </motion.span>
        <motion.span
          className="text-right text-text-secondary font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        >
        {subtitle}
        </motion.span>
        <ul className="col-span-2 list-disc list-inside text-text-secondary">
            {bullets.map((bullet, index) => (
            <li className="list-item" key={index}>
                {bullet}
            </li>
            ))}
        </ul>
    </article>
  );
}