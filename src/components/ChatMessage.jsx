import { FireIcon, UserIcon } from "@heroicons/react/24/outline";

export default function ChatMessage({ content, isBot = false }) {
    return (
        <div className={`flex items-start gap-2 ${isBot ? 'text-text' : 'text-text-secondary'}`}>
            {isBot ? <FireIcon className="min-h-6 w-6" /> : <UserIcon className="min-h-6 w-6" />}
            <p className="flex-1 overflow-hidden break-words">{content}</p>
        </div>
    )
}