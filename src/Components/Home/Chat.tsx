import { Video, Phone, Search, Smile, Paperclip, Image, Send } from 'lucide-react';

const Chat = () => {
  return (
    <div className="flex-1 flex flex-col bg-[#0f0f0f]">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              alt="Edward Lietz"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f0f0f]" />
          </div>
          <div>
            <h2 className="text-white font-semibold">Edward Lietz</h2>
            <p className="text-green-500 text-sm">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-400">
          <button className="hover:text-white">
            <Search size={20} />
          </button>
          <button className="hover:text-white">
            <Phone size={20} />
          </button>
          <button className="hover:text-white">
            <Video size={20} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex items-start space-x-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            alt="Edward"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">Edward Lietz</span>
              <span className="text-gray-400 text-sm">02:39 PM</span>
            </div>
            <div className="mt-2 bg-[#1a1a1a] rounded-2xl rounded-tl-none p-4 text-gray-300">
              Hi there! I'm interested in your services.
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            alt="Edward"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">Edward Lietz</span>
              <span className="text-gray-400 text-sm">02:39 PM</span>
            </div>
            <div className="mt-2 bg-[#1a1a1a] rounded-2xl rounded-tl-none p-4 text-gray-300">
              Can you tell me more about what you offer?, Can you explain it breifly...
            </div>
          </div>
        </div>

        <div className="flex items-start justify-end space-x-4">
          <div className="flex flex-col items-end">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">02:39 PM</span>
              <span className="text-white font-medium">You</span>
            </div>
            <div className="mt-2 bg-indigo-600 rounded-2xl rounded-tr-none p-4 text-white max-w-xl">
              Hello! Absolutely, we provide a range of services tailored to meet various business needs. Could you specify what you're looking for?
            </div>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Smile className="text-yellow-500" size={16} />
                <span className="text-gray-400">24</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-red-500">❤️</span>
                <span className="text-gray-400">15</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">👍</span>
                <span className="text-gray-400">15</span>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="You"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-6">
        <div className="flex items-center bg-[#1a1a1a] rounded-xl p-2">
          <button className="p-2 text-gray-400 hover:text-white">
            <Smile size={24} />
          </button>
          <input
            type="text"
            placeholder="Type Your Message"
            className="flex-1 bg-transparent px-4 text-white placeholder-gray-500 focus:outline-none"
          />
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white">
              <Paperclip size={24} />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <Image size={24} />
            </button>
            <button className="p-2 bg-indigo-600 text-white rounded-xl">
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;