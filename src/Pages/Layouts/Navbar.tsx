import { MessageCircle, Users, Video, Phone, Settings, Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-16 bg-[#0f0f0f] h-screen flex flex-col items-center py-6 space-y-8">
      <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
        <MessageCircle size={24} />
      </div>
      <div className="space-y-8">
        <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] text-gray-400">
          <Users size={24} />
        </button>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] text-gray-400">
          <Video size={24} />
        </button>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] text-gray-400">
          <Phone size={24} />
        </button>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] text-gray-400">
          <Settings size={24} />
        </button>
      </div>
      <div className="mt-auto">
        <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] text-gray-400">
          <Sun size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;