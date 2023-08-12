import { ChatBubbleBottomCenterTextIcon, PaperAirplaneIcon, UserIcon, FaceSmileIcon } from "@heroicons/react/24/outline"
import { AnimatePresence, motion } from "framer-motion"
import ChatMessage from "./ChatMessage"

export default function Modal({ visible = false, toggleModal }) {
    return (
        <AnimatePresence>
            {visible && (
                <>
                    <motion.div
                        initial={{ backdropFilter: 'blur(0px)', opacity: 0 }}
                        animate={{ backdropFilter: 'blur(12px)', opacity: 1 }}
                        exit={{ backdropFilter: 'blur(0px)', opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        onClick={toggleModal} className="w-screen h-screen backdrop-blur-md bg-background bg-opacity-20 z-10 fixed top-0 left-0">
                    </motion.div>
                    
                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5, ease: 'easeInOut'}}
                        className="absolute z-20 max-h-[600px] flex flex-col p-4 left-[50%] -translate-x-1/2 mt-16 card max-w-[600px] min-h-[300px] border border-text-secondary rounded-md bg-background bg-opacity-20 backdrop-blur-[25px]">
                        <main className="flex-1 flex flex-col gap-4 overflow-auto py-4">
                            <ChatMessage content="Message content goes here..." />
                            <ChatMessage content="" isBot={true} />
                        </main>
                        <footer className="border border-text-secondary px-2 py-1 rounded-md text-text-secondary flex items-center justify-between">
                            <div className="flex items-center gap-2 flex-1">
                            <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
                            <input className="flex-1 bg-transparent outline-none placeholder:text-text-secondary" type="text" placeholder="Ask something about me..." />
                            </div>
                            <PaperAirplaneIcon className="h-4 w-4" />
                        </footer>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}