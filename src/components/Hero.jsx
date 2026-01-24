import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-bg">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="z-10 text-center px-6 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-5xl md:text-8xl font-semibold tracking-tight mb-6 text-primary"
                >
                    Manas Dutt
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="text-xl md:text-3xl text-secondary mb-10 font-light"
                >
                    Engineering the <span className="text-white font-normal">Next Generation</span> of Software.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="flex justify-center gap-4"
                >
                    <a href="#projects" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                        View Work
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 transition-colors">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
