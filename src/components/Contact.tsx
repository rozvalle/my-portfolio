import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Instagram } from "lucide-react";

export default function Contact() {
    const [mode, setMode] = useState<"professional" | "personal">("professional");

    const professionalContacts = [
        { icon: <Mail size={28} />, link: "mailto:you@email.com" },
        { icon: <Github size={28} />, link: "https://github.com/yourusername" },
        { icon: <Linkedin size={28} />, link: "https://linkedin.com/in/yourusername" },
    ];

    const personalContacts = [
        { icon: <MessageCircle size={28} />, link: "https://t.me/yourusername" },
        { icon: <Instagram size={28} />, link: "https://instagram.com/yourusername" },
        { icon: <Mail size={28} />, link: "mailto:personal@email.com" },
    ];

    const contacts = mode === "professional" ? professionalContacts : personalContacts;

    return (
        <motion.section
            id="contact"
            className="bg-gradient-to-r from-indigo-100 via-white to-indigo-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 py-24 rounded-xl mx-4 md:mx-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold mb-8">Contact</h3>

                {/* Toggle */}
                <div className="flex justify-center mb-12 gap-4">
                    <button
                        className={`px-6 py-2 rounded-lg font-medium transition ${mode === "professional"
                                ? "bg-indigo-600 text-white shadow-md"
                                : "bg-zinc-300 dark:bg-zinc-700 dark:text-white"
                            }`}
                        onClick={() => setMode("professional")}
                    >
                        Professional
                    </button>
                    <button
                        className={`px-6 py-2 rounded-lg font-medium transition ${mode === "personal"
                                ? "bg-indigo-600 text-white shadow-md"
                                : "bg-zinc-300 dark:bg-zinc-700 dark:text-white"
                            }`}
                        onClick={() => setMode("personal")}
                    >
                        Personal
                    </button>
                </div>

                {/* Contact Icons */}
                <div className="flex justify-center gap-8">
                    <AnimatePresence mode="wait">
                        {contacts.map((c, idx) => (
                            <motion.a
                                key={c.link}
                                href={c.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-zinc-800 p-4 rounded-full shadow-md hover:shadow-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition flex items-center justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.2 }}
                            >
                                {c.icon}
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
}
