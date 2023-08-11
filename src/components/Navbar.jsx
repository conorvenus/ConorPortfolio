import { ChatBubbleBottomCenterTextIcon, HomeIcon, NewspaperIcon } from "@heroicons/react/24/outline"

export default function Navbar({ toggleModal }) {
    return (
        <header className="flex justify-between items-center">
            <div className="text-3xl font-bold">Conor Venus</div>
            <div onClick={toggleModal} className="cursor-pointer flex items-center gap-8 py-3 px-4 border-text-secondary text-text-secondary border w-fit rounded-md">
                <div className="flex items-center gap-2">
                    <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
                    Ask AI...
                </div>
                <span className="bg-[#151a31] px-2 py-1 rounded-md">Ctrl + K</span>
            </div>
            <nav>
                <ul className="flex items-center gap-16">
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
      </header>
    )
}