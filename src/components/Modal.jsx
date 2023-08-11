import { ChatBubbleBottomCenterTextIcon, PaperAirplaneIcon, UserIcon, FaceSmileIcon } from "@heroicons/react/24/outline"

export default function Modal({ visible = false, toggleModal }) {
    if (!visible) return null

    return (
        <>
            <div onClick={toggleModal} className="w-screen h-screen backdrop-blur-md bg-background bg-opacity-20 z-10 fixed top-0 left-0"></div>
            <div className="absolute z-20 max-h-[600px] flex flex-col p-4 left-[50%] -translate-x-1/2 mt-16 card max-w-[600px] min-h-[300px] border border-text-secondary rounded-md bg-background bg-opacity-20 backdrop-blur-[25px]">
                <main className="flex-1 flex flex-col gap-4 overflow-auto">
                    <div className="flex items-start gap-2 text-text-secondary">
                    <UserIcon className="min-h-6 w-6" />
                    <p className="flex-1">Message content goes here...</p>
                    </div>
                    <div className="flex items-start gap-2">
                    <FaceSmileIcon className="h-6 w-6" />
                    <p className="flex-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ratione dolor quam quia consequuntur repudiandae libero quae neque nostrum nobis.</p>
                    </div>
                </main>
                <footer className="border border-text-secondary px-2 py-1 rounded-md text-text-secondary flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-1">
                    <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
                    <input className="flex-1 bg-transparent outline-none placeholder:text-text-secondary" type="text" placeholder="Ask something about me..." />
                    </div>
                    <PaperAirplaneIcon className="h-4 w-4" />
                </footer>
            </div>
        </>
    )
}