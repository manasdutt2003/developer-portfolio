import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-bg flex flex-col justify-center items-center text-center">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-7xl font-bold tracking-tighter text-primary mb-8"
            >
                Let's build the future.
            </motion.h2>
            <p className="text-secondary text-lg mb-12 max-w-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <a href="mailto:manasdutt2003@gmail.com" className="bg-primary text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
                Say Hello
            </a>

            <footer className="mt-32 text-secondary text-sm">
                <p>&copy; 2026 Manas Dutt. Crafted with precision.</p>
            </footer>
        </section>
    );
};

export default Contact;
