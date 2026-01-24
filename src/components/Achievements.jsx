import { motion } from 'framer-motion';

const Achievements = () => {
    const wins = [
        { label: "International Rank 4", title: "IMO (Math Olympiad)", year: "2023" },
        { label: "AIR 16", title: "TALLENTEX", year: "2022" },
        { label: "CGPA 8.77", title: "VIT Chennai", year: "2026 (Exp)" },
        { label: "Microsoft Certified", title: "Azure AI Fundamentals", year: "2024" }
    ];

    return (
        <section className="py-32 px-6 bg-bg border-t border-border">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-sm font-semibold tracking-widest text-secondary uppercase mb-12"
                >
                    Recognition
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {wins.map((win, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center justify-between py-4 border-b border-white/5"
                        >
                            <div>
                                <h3 className="text-xl font-medium text-primary">{win.title}</h3>
                                <p className="text-sm text-secondary mt-1">{win.label}</p>
                            </div>
                            <span className="text-sm font-mono text-white/40">{win.year}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
