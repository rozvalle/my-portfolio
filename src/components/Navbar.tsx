import { Sun, Moon, User, BookOpen, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ dark, setDark }: any) {
    const [active, setActive] = useState("about");
    const [mobileOpen, setMobileOpen] = useState(false);

    // Update active link on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "education", "projects", "contact"];
            const scrollPos = window.scrollY + 200; // offset for navbar height
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el && scrollPos >= el.offsetTop) {
                    setActive(section);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "About", href: "#about", icon: <User size={16} /> },
        { name: "Education", href: "#education", icon: <BookOpen size={16} /> },
        { name: "Projects", href: "#projects", icon: <Briefcase size={16} /> },
        { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <span className="font-bold text-lg">Elmo</span>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    {links.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={{ scale: 1.1 }}
                            className={`flex items-center gap-1 transition-colors ${active.toLowerCase() === link.name.toLowerCase()
                                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                                    : "text-zinc-700 dark:text-zinc-300"
                                }`}
                        >
                            {link.icon} {link.name}
                        </motion.a>
                    ))}

                    <motion.button
                        onClick={() => setDark(!dark)}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ rotate: 20 }}
                        className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 transition-colors"
                    >
                        {dark ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-4">
                    <motion.button
                        onClick={() => setDark(!dark)}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ rotate: 20 }}
                        className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 transition-colors"
                    >
                        {dark ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>

                    <button onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white dark:bg-zinc-950 overflow-hidden border-t border-zinc-200 dark:border-zinc-800"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {links.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    whileHover={{ scale: 1.05 }}
                                    className={`flex items-center gap-2 transition-colors ${active.toLowerCase() === link.name.toLowerCase()
                                            ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                                            : "text-zinc-700 dark:text-zinc-300"
                                        }`}
                                >
                                    {link.icon} {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
