import projects from '../data/projects.json';

const Discover = () => {
    return (
        <div className="bg-[#ededed] min-h-screen pt-14 pb-20">
            <div className="fixed top-0 w-full bg-[#ededed] z-40 px-4 py-3 border-b border-gray-300 shadow-sm">
                <h1 className="text-lg font-semibold text-black">Discover</h1>
            </div>

            <div className="px-4 py-4">
                <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Mini Programs</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {projects.slice(0, 8).map((project) => (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center space-y-2 cursor-pointer group"
                            >
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-sm group-hover:scale-105 transition-transform duration-200">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xs text-gray-700 text-center leading-tight line-clamp-2 w-full">{project.title}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm text-black">
                    <div className="flex items-center px-4 py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                        <div className="w-6 h-6 mr-3">朋友圈</div>
                        <span className="text-base">Moments</span>
                    </div>
                    <div className="flex items-center px-4 py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                        <div className="w-6 h-6 mr-3">扫一扫</div>
                        <span className="text-base">Scan</span>
                    </div>
                    <div className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-50">
                        <div className="w-6 h-6 mr-3">看一看</div>
                        <span className="text-base">Top Stories</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
