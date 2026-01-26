import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-6 bg-bg">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-sm font-semibold tracking-widest text-secondary uppercase mb-12"
                >
                    Career Trajectory
                </motion.h2>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-border"
                    >
                        <div className="md:w-1/4">
                            <span className="text-secondary font-medium">2025</span>
                        </div>
                        <div className="md:w-3/4">
                            <h3 className="text-2xl font-semibold text-primary mb-1 group-hover:text-accent transition-colors">Hetu Labs</h3>
                            <p className="text-lg text-white/80 mb-4">Software Engineering Intern</p>
                            <p className="text-secondary leading-relaxed mb-6">
                                Designed and optimized backend utilities, achieving a <span className="text-white">25% reduction in latency</span>.
                                Spearheaded scalable architecture discussions and automated critical CI/CD workflows.
                            </p>
                            <div className="flex gap-3">
                                <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-secondary">Backend Optimization</span>
                                <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-secondary">Remote</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
