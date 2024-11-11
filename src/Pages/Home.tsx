import ChatList from "../Components/Home/ChatList"
import Chat from "../Components/Home/Chat"
export default function Home() {
    return (
        <>
        <div className="flex h-screen bg-[#0f0f0f] text-white">
            <ChatList/>
            <Chat/>
        </div>
        </>
    )
}