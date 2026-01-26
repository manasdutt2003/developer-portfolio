import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
<<<<<<< HEAD
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]"
        >
            <div className="glass rounded-full px-8 py-4 flex items-center space-x-8 border border-white/10 bg-black/40">
                <a href="#" className="font-bold tracking-widest text-white uppercase text-sm">MANAS</a>
=======
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-style spring
            className="fixed top-6 inset-x-0 mx-auto z-50 flex justify-center"
        >
            <div className="glass rounded-full px-6 py-3 flex items-center space-x-8 shadow-2xl">
                <a href="#" className="font-semibold tracking-tight text-white hover:text-accent transition-colors">MD</a>
>>>>>>> 582c6fbb5ac500f1ac2d2e8349adaaae546dcb65
                <div className="w-[1px] h-4 bg-white/20"></div>
                <nav className="flex space-x-6 text-sm font-medium text-secondary">
                    {['Experience', 'Projects', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </motion.div>
    );
};

export default Navbar;
