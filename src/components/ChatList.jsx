import { useState } from 'react';

const ChatList = ({ setView }) => {
    const chats = [
        {
            id: 1,
            name: "Uni-Work Team",
            lastMessage: "Manas: I deployed the SOTA model!",
            time: "Now",
            avatar: "https://placehold.co/100x100/3498db/ffffff?text=Team",
            unread: 2,
        },
        {
            id: 2,
            name: "Job Recruiter",
            lastMessage: "Your profile looks impressive. When can we talk?",
            time: "10:45",
            avatar: "https://placehold.co/100x100/e74c3c/ffffff?text=HR",
            unread: 1,
        },
        {
            id: 3,
            name: "AI Bot",
            lastMessage: "Analysis complete for the shadow detection dataset.",
            time: "Yesterday",
            avatar: "https://placehold.co/100x100/9b59b6/ffffff?text=AI",
            unread: 0,
        },
        {
            id: 4,
            name: "GitHub Notifications",
            lastMessage: "Depedency vulnerability detected in package.json",
            time: "Yesterday",
            avatar: "https://placehold.co/100x100/000000/ffffff?text=GH",
            unread: 0,
        }
    ];

    return (
        <div className="bg-[#ededed] min-h-screen pt-14 pb-20">
            <div className="fixed top-0 w-full bg-[#ededed] z-40 px-4 py-3 border-b border-gray-300 flex justify-between items-center">
                <h1 className="text-lg font-semibold text-black">WeChat (Demo)</h1>
                <div className="flex space-x-4">
                    <span className="text-black font-bold">+</span>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="px-4 py-2">
                    <div className="bg-white rounded-lg px-3 py-2 text-gray-500 text-center text-sm flex items-center justify-center">
                        Search
                    </div>
                </div>

                {chats.map((chat) => (
                    <div key={chat.id} className="bg-white hover:bg-gray-100 flex items-center px-4 py-3 border-b border-gray-100 cursor-pointer transition-colors duration-100">
                        <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div className="ml-3 flex-1 overflow-hidden">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="text-black font-medium text-base truncate">{chat.name}</h3>
                                <span className="text-gray-400 text-xs">{chat.time}</span>
                            </div>
                            <p className="text-gray-500 text-sm truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && (
                            <div className="ml-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">{chat.unread}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatList;
