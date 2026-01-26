import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const navItems = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: '/resume.pdf', external: true }
    ];

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]"
        >
            <div className="glass rounded-full px-8 py-4 flex items-center space-x-8 border border-white/10 bg-black/40">
                <a href="#" className="font-bold tracking-widest text-white uppercase text-sm">MANAS</a>
                <div className="w-[1px] h-4 bg-white/20"></div>
                <nav className="flex space-x-6 text-sm font-medium text-secondary">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target={item.external ? "_blank" : "_self"}
                            rel={item.external ? "noopener noreferrer" : ""}
                            className="hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </motion.div>
    );
};

export default Navbar;
