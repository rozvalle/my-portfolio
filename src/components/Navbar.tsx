import { Sun, Moon, User, BookOpen, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ dark, setDark }: any) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState("about");

    const links = [
        { name: "About", href: "#about", icon: <User size={16} /> },
        { name: "Education", href: "#education", icon: <BookOpen size={16} /> },
        { name: "Projects", href: "#projects", icon: <Briefcase size={16} /> },
        { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <span className="font-bold text-lg">Francis Elmo V.</span>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActive(link.name.toLowerCase())}
                            className="relative flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                        >
                            {link.icon} {link.name}
                            {active === link.name.toLowerCase() && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-indigo-600 rounded"
                                />
                            )}
                        </a>
                    ))}

                    <motion.button
                        onClick={() => setDark(!dark)}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ rotate: 20 }}
                        aria-label="Toggle Dark Mode"
                        className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 transition-colors"
                    >
                        {dark ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-4">
                    <motion.button
                        aria-label="Toggle Dark Mode"
                        onClick={() => setDark(!dark)}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ rotate: 20 }}
                        className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 transition-colors"
                    >
                        {dark ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>

                    <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Mobile Menu">
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white dark:bg-zinc-950 overflow-hidden border-t border-zinc-200 dark:border-zinc-800"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                                >
                                    {link.icon} {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
