import { MessageCircle, Compass, User } from 'lucide-react';

const BottomNav = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'chats', icon: MessageCircle, label: 'Chats' },
        { id: 'discover', icon: Compass, label: 'Discover' },
        { id: 'me', icon: User, label: 'Me' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#f7f7f7] border-t border-gray-300 pb-safe pt-2 px-6 flex justify-between z-50">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center space-y-1 w-full ${activeTab === tab.id ? 'text-[#07C160]' : 'text-gray-500'
                        }`}
                >
                    <tab.icon size={24} fill={activeTab === tab.id ? "currentColor" : "none"} strokeWidth={activeTab === tab.id ? 0 : 2} />
                    <span className="text-[10px] font-medium">{tab.label}</span>
                </button>
            ))}
        </div>
    );
};

export default BottomNav;
