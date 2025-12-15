import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            shortDesc: "A PWA for VAWC case management.",
            fullDesc:
                "Supports barangay-level efforts in preventing and responding to Violence Against Women and Children cases. Features user authentication, reporting, and dashboards.",
            difficulty: 80,
            role: "Project Manager & Full-Stack Developer",
            contributors: "Team of 4",
            tags: ["React + Vite", "Node.js", "Express", "MongoDB", "AntD"],
            code: "https://github.com/VAWCARE-App/VAWCare-App",
            live: "https://vawcare-app.vercel.app/",
            icon: <Book size={20} />,
        },
        {
            title: "Trivia App - Android",
            shortDesc: "Trivia game app using Kotlin & Firebase.",
            fullDesc:
                "Firebase Authentication, Firestore leaderboard, Open Trivia DB integration, score tracking, categories, timer.",
            difficulty: 70,
            role: "Full-Stack Developer",
            contributors: "Solo",
            tags: ["Kotlin", "Firebase", "Android"],
            code: "https://github.com/rozvalle/AppDev-Final-TriviaApp",
            live: "https://github.com/rozvalle/AppDev-Final-TriviaApp/releases/tag/v1.1",
            icon: <Android size={20} />,
            isApk: true,
        },
    ];

    const [tab, setTab] = useState<"Personal" | "School">("Personal");
    const projects = tab === "Personal" ? personalProjects : schoolProjects;

    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
            <h3 className="text-3xl font-bold mb-6">Projects</h3>

            {/* Tabs */}
            <div className="flex gap-4 mb-8">
                {["Personal", "School"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t as "Personal" | "School")}
                        className={`px-4 py-2 rounded-full font-medium transition ${tab === t
                            ? "bg-indigo-600 text-white"
                            : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400"
                            }`}
                    >
                        {t} Projects
                    </button>
                ))}
            </div>

            {/* Project Grid with staggered animation */}
            <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((proj, idx) => (
                    <ProjectCard key={`${tab}-${idx}`} {...proj} />
                ))}
            </motion.div>

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

    const diffColor =
        difficulty < 60 ? "bg-green-400" : difficulty < 80 ? "bg-yellow-400" : "bg-red-500";

    return (
        <>
            <motion.div
                className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-300 dark:border-zinc-800 shadow-md cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => setOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >

                <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                    {icon} <h4 className="text-lg font-semibold">{title}</h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{shortDesc}</p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((t: string) => (
                        <span
                            key={t}
                            className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-800 font-medium"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <span
                    className={`absolute top-3 right-3 w-3 h-3 rounded-full ${diffColor}`}
                    title={`Difficulty: ${difficulty}%`}
                />
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {open && (
                    <Modal onClose={() => setOpen(false)}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 className="text-2xl font-bold mb-2">{title}</h4>
                            <p className="text-zinc-700 dark:text-zinc-300 mb-4">{fullDesc}</p>

                            <div className="mb-4">
                                <h5 className="font-semibold mb-1">Difficulty</h5>
                                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-3">
                                    <div
                                        className="h-3 rounded-full"
                                        style={{
                                            width: `${difficulty}%`,
                                            backgroundColor: diffColor.includes("green")
                                                ? "#34D399"
                                                : diffColor.includes("yellow")
                                                    ? "#FACC15"
                                                    : "#EF4444",
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <p className="mb-2">
                                <span className="font-semibold">Role:</span> {role}
                            </p>
                            <p className="mb-4">
                                <span className="font-semibold">Contributors:</span> {contributors}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {tags.map((t: string) => (
                                    <span
                                        key={t}
                                        className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-800 font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-4">
                                <a
                                    href={code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-indigo-600"
                                    data-cursor="button"
                                    data-cursor-text="CODE"
                                >
                                    View Code
                                </a>
                                <a
                                    href={live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-indigo-600"
                                    data-cursor="button"
                                    data-cursor-text={isApk ? "DOWNLOAD" : "LIVE"}
                                >
                                    {isApk ? "Download APK" : "Live Site"}
                                </a>
                            </div>
                        </motion.div>
                    </Modal>
                )}
            </AnimatePresence>
        </>
    );
}

function Modal({ children, onClose }: any) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-zinc-900 rounded-xl p-6 max-w-lg w-full relative overflow-y-auto max-h-[90vh]"
            >
                <button
                    data-cursor="button"
                    data-cursor-text="CLOSE"
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
