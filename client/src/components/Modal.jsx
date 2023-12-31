import { ChatBubbleBottomCenterTextIcon, PaperAirplaneIcon, UserIcon, FaceSmileIcon } from "@heroicons/react/24/outline"
import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect } from "react"
import ChatMessage from "./ChatMessage"

export default function Modal({ visible = false, toggleModal }) {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')

    function addMessage(message, isBot = false) {
        setMessages(currentState => [...currentState, { content: message, isBot: isBot }])
    }

    async function sendMessage(event) {
        if (input.trim().length === 0) return
        
        event.preventDefault()
        addMessage(input)
        setInput('')
        const response = await fetch('/api/sendMessage',
            {
                method: 'POST',
                body: JSON.stringify({
                    message: input
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        addMessage('', true)
        const reader = response.body
            .pipeThrough(new TextDecoderStream())
            .getReader()
        while (true) {
            const { value, done } = await reader.read()
            if (done) break
            setMessages(currentState => [...currentState.slice(0, -1), { content: currentState.at(-1).content + value, id: currentState.at(-1).id, isBot: true }])
        }
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.div 
                    onClick={toggleModal} 
                    className="fixed grid place-items-center h-screen w-screen top-0 left-0 px-4 bg-background bg-opacity-20 z-10 backdrop-blur-md"
                    initial={{ backdropFilter: 'blur(0px)', opacity: 0 }}
                    animate={{ backdropFilter: 'blur(12px)', opacity: 1 }}
                    exit={{ backdropFilter: 'blur(0px)', opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <motion.div
                        onClick={event => event.stopPropagation()} 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5, ease: 'easeInOut'}}
                        className="mx-4 overflow-hidden w-full box-border max-h-[50vh] flex flex-col p-4 card max-w-[600px] min-h-[300px] border border-text-secondary rounded-md bg-background bg-opacity-20 backdrop-blur-[25px]">
                        <main className="flex-1 flex flex-col gap-4 overflow-auto my-4 pr-4">
                            {messages.map((message, idx) =>
                                <ChatMessage key={idx} content={message.content} isBot={message.isBot} />
                            )}
                        </main>
                        <form onSubmit={sendMessage} className="min-h-[3rem] overflow-x-auto border border-text-secondary px-2 py-1 rounded-md text-text-secondary flex items-center justify-between">
                            <div className="flex items-center gap-2 flex-1">
                                <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
                                <input value={input} onChange={event => setInput(event.target.value)} className="flex-1 bg-transparent outline-none placeholder:text-text-secondary" type="text" placeholder="Ask something about me..." />
                            </div>
                            <button type="submit">
                                <PaperAirplaneIcon className="h-4 w-4" />
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}