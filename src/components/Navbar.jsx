import { ChatBubbleBottomCenterTextIcon, HomeIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

export default function Navbar({ toggleModal }) {
    return (
        <motion.header 
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        className="flex justify-between items-center">
            <div className="text-3xl font-bold md:block hidden">Conor Venus</div>
            <div onClick={toggleModal} className="cursor-pointer flex items-center gap-8 py-3 px-4 border-text-secondary text-text-secondary border w-fit md:rounded-md rounded-full md:aspect-auto aspect-square">
                <div className="flex items-center gap-2">
                    <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
                    <span className="md:block hidden">Ask AI...</span>
                </div>
                <span className="bg-[#151a31] px-2 py-1 rounded-md md:block hidden">Ctrl + K</span>
            </div>
            <nav>
                <ul className="flex items-center md:gap-16 gap-8">
                    <li>
                        <HomeIcon className="h-6 w-6" />
                        Home
                    </li>
                    <li>
                        <NewspaperIcon className="h-6 w-6" />
                        Blog
                    </li>
                </ul>
            </nav>
      </motion.header>
    )
}