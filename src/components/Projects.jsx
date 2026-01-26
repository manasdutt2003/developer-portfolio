import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
    // Use a subset of best projects for the primary bento grid to maintain layout balance
    const featuredProjects = projectsData.slice(0, 6);

    return (
        <section id="projects" className="py-32 px-6 bg-bg">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary mb-4">Selected Work.</h2>
                    <p className="text-secondary text-lg max-w-xl">
                        A curation of projects defining my journey in software engineering and AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group relative rounded-3xl overflow-hidden bg-surfaceHighlight border border-white/5 hover:border-white/10 transition-colors ${index === 0 || index === 3 ? 'md:col-span-2' : ''
                                }`}
                        >
                            <div className="absolute inset-x-0 top-0 h-2/3 p-8 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
                                {/* Placeholder for actual image if needed, or abstract representation */}
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-105" />
                            </div>

                            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-surfaceHighlight via-surfaceHighlight to-transparent">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-secondary line-clamp-2 text-sm mb-4">{project.description}</p>
                                        <div className="flex gap-2 flex-wrap">
                                            {project.tech.slice(0, 3).map(t => (
                                                <span key={t} className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/5">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                                    >
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
