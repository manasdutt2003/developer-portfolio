const Me = () => {
    return (
        <div className="bg-[#ededed] min-h-screen pt-14 pb-20">
            <div className="bg-white px-6 py-8 mb-2 flex items-center space-x-4">
                <img
                    src="https://placehold.co/150x150/07C160/ffffff?text=MD"
                    alt="Profile"
                    className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                />
                <div className="flex-1">
                    <h1 className="text-xl font-bold text-black mb-1">Manas Dutt</h1>
                    <p className="text-gray-500 text-sm">WeChat ID: manas_dev</p>
                </div>
                <div className="text-gray-400">QR &gt;</div>
            </div>

            <div className="bg-white mb-2">
                <div className="flex items-center px-6 py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                    <span className="text-black text-base flex-1">Services</span>
                </div>
            </div>

            <div className="bg-white mb-2">
                <div className="flex items-center px-6 py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                    <span className="text-black text-base flex-1">Favorites</span>
                </div>
                <div className="flex items-center px-6 py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                    <span className="text-black text-base flex-1">Posts</span>
                </div>
                <div className="flex items-center px-6 py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                    <span className="text-black text-base flex-1">Cards & Offers</span>
                </div>
                <div className="flex items-center px-6 py-4 cursor-pointer hover:bg-gray-50">
                    <span className="text-black text-base flex-1">Sticker Gallery</span>
                </div>
            </div>

            <div className="bg-white mb-2">
                <div className="flex items-center px-6 py-4 cursor-pointer hover:bg-gray-50">
                    <span className="text-black text-base flex-1">Settings</span>
                </div>
            </div>
        </div>
    );
};

export default Me;
