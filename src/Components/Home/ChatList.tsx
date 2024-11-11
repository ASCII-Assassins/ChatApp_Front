import { Search, Plus, Filter } from 'lucide-react';

interface ChatUser {
  id: string;
  name: string;
  image: string;
  online: boolean;
  lastMessage?: string;
  time?: string;
  unread?: number;
}

const recentChats: ChatUser[] = [
  {
    id: '1',
    name: 'Nichol',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    online: true,
  },
  {
    id: '2',
    name: 'Titus',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    online: true,
  },
  {
    id: '3',
    name: 'Geoffrey',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    online: true,
  },
  {
    id: '4',
    name: 'Laverty',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    online: true,
  },
];

const allChats: ChatUser[] = [
  {
    id: '5',
    name: 'Mark Williams',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    online: true,
    lastMessage: 'is typing...',
    time: '02:40 PM',
    unread: 12,
  },
  {
    id: '6',
    name: 'Sarika Jain',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    online: true,
    lastMessage: 'Do you know which...',
    time: '06:12 AM',
  },
];

const ChatList = () => {
  return (
    <div className="w-80 bg-[#1a1a1a] h-screen flex flex-col">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Chats</h1>
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <Plus size={20} />
            </button>
            <button className="w-8 h-8 text-gray-400 hover:bg-[#2a2a2a] rounded-full flex items-center justify-center">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search For Contacts or Messages"
            className="w-full bg-[#2a2a2a] rounded-lg pl-10 pr-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Recent Chats</h2>
          <div className="flex space-x-4">
            {recentChats.map((user) => (
              <div key={user.id} className="relative">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {user.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]" />
                )}
                <p className="text-xs text-center mt-1 text-gray-400">{user.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">All Chats</h2>
            <button className="text-gray-400 hover:text-white">
              <Filter size={20} />
            </button>
          </div>
          <div className="space-y-4">
            {allChats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center p-3 rounded-xl hover:bg-[#2a2a2a] cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={chat.image}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]" />
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{chat.name}</h3>
                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-400">{chat.lastMessage}</p>
                </div>
                {chat.unread && (
                  <div className="ml-4 bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-xs">{chat.unread}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;