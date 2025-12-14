import { motion } from "framer-motion";
import { useState } from "react";
import { Laptop, Book, Laptop2 as Android, X } from "lucide-react";

export default function Projects() {
    const personalProjects = [
        {
            title: "Portfolio Website",
            shortDesc: "Personal portfolio using React, Typescript, Tailwind.",
            fullDesc:
                "A complete personal portfolio showcasing my projects, skills, and resume. Responsive design and smooth animations implemented.",
            difficulty: 60,
            role: "Full-Stack Developer",
            contributors: "Solo",
            tags: ["React", "Typescript", "Tailwind"],
            code: "#",
            live: "#",
            icon: <Laptop size={20} />,
        },
    ];

    const schoolProjects = [
        {
            title: "VAWCare - Progressive Web App",
            shortDesc: "A Progressive Web App for VAWC case management.",
            fullDesc:
                "A Progressive Web App to support barangay-level efforts in preventing and responding to Violence Against Women and Children cases. Features user authentication, reporting, and dashboards.",
            difficulty: 80,
            role: "Project Manager & Full-Stack Developer",
            contributors: "Keving Klein Ananayo, Ethan Jericho Salvador, Desierre Lacerona, and Erien Bambalan",
            tags: ["React + Vite", "Node.js", "Express", "MongoDB", "AntD"],
            code: "https://github.com/VAWCARE-App/VAWCare-App",
            live: "https://vawcare-app.vercel.app/",
            icon: <Book size={20} />,
        },
        {
            title: "Trivia App - Android Application",
            shortDesc: "A trivia game app for Android using Kotlin and Firebase.",
            fullDesc:
                "A trivia game app with Firebase Authentication, Firestore leaderboard, and Open Trivia DB integration. Implemented score tracking, categories, and timer.",
            difficulty: 70,
            role: "Full-Stack Developer",
            contributors: "Solo",
            tags: ["Kotlin", "Firebase", "Android"],
            code: "https://github.com/rozvalle/AppDev-Final-TriviaApp",
            live: "https://github.com/rozvalle/AppDev-Final-TriviaApp/releases/tag/v1.1",
            icon: <Android size={20} />,
            isApk: true,
        },
        {
            title: "ITBytes - E-commerce Website",
            shortDesc: "A full-featured e-commerce platform and management system built using MERN stack.",
            fullDesc:
                "An e-commerce website that allows users to browse products, add them to a cart, and checkout. Admin panel for managing products, orders, and users. Integrated with another developers payment API for processing transactions.",
            difficulty: 85,
            role: "Front-End Developer",
            contributors: "Kevin Klein Ananayo, Hendre Leigh Sagabaen, and Erien Bambalan",
            tags: ["React", "Firebase", "Chat"],
            code: "https://github.com/Dre-OS/ITBytes-UI",
            live: "https://it-bytes-ui.vercel.app/",
            icon: <Android size={20} />,
        },
        {
            title: "The Noodle House - Restaurant Website",
            shortDesc: "A restaurant website with online ordering and admin panel.",
            fullDesc:
                "A restaurant website that allows users to browse the menu, place orders online, and manage their reservations. Admin panel for managing menu items, orders, and customer feedback.",
            difficulty: 80,
            role: "Full-Stack Developer",
            contributors: "Solo",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            code: "https://github.com/rozvalle/The-Noodle-House",
            live: "https://the-noodle-house.vercel.app/",
            icon: <Android size={20} />,
        }
    ];

    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
            <h3 className="text-3xl font-bold mb-6">Personal Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {personalProjects.map((proj, idx) => (
                    <ProjectCard key={idx} {...proj} />
                ))}
            </div>

            <h3 className="text-3xl font-bold mt-12 mb-6">School Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {schoolProjects.map((proj, idx) => (
                    <ProjectCard key={idx} {...proj} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({
    title,
    shortDesc,
    fullDesc,
    difficulty,
    role,
    contributors,
    tags,
    code,
    live,
    icon,
    isApk,
}: any) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.div
                className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-300 dark:border-zinc-800 shadow-md cursor-pointer"
                whileHover={{ scale: 1.03, y: -3 }}
                onClick={() => setOpen(true)}
            >
                <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400">
                    {icon} <h4 className="text-xl font-semibold">{title}</h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{shortDesc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((t: string) => (
                        <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 font-medium"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(true);
                    }}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    View
                </button>
            </motion.div>

            {open && (
                <Modal onClose={() => setOpen(false)}>
                    <h4 className="text-2xl font-bold mb-2">{title}</h4>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">{fullDesc}</p>

                    <div className="mb-4">
                        <h5 className="font-semibold mb-1">Difficulty</h5>
                        <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-3">
                            <div
                                className="bg-indigo-600 h-3 rounded-full"
                                style={{ width: `${difficulty}%` }}
                            ></div>
                        </div>
                    </div>

                    <p className="mb-2">
                        <span className="font-semibold">Role:</span> {role}
                    </p>
                    <p className="mb-4">
                        <span className="font-semibold">Contributors:</span> {contributors}
                    </p>

                    <div className="flex gap-4 mt-4">
                        <a href={code} className="underline text-indigo-600">
                            View Code
                        </a>
                        <a href={live} className="underline text-indigo-600">
                            {isApk ? "Download APK" : "Live Site"}
                        </a>
                    </div>
                </Modal>
            )}
        </>
    );
}

function Modal({ children, onClose }: any) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-zinc-900 rounded-xl p-6 max-w-lg w-full relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                >
                    <X size={20} />
                </button>
                {children}
            </motion.div>
        </div>
    );
}
