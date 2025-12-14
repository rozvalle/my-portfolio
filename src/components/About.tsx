import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function About() {
    const languages = [
        { name: "Java", level: 70 },
        { name: "C#", level: 65 },
        { name: "VB.net", level: 60 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Kotlin", level: 50 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 80 },
        { name: "Bash", level: 60 },
    ];

    const frameworks = [
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 70 },
    ];

    const interests = ["Gaming", "Playing Guitar", "Drawing", "Motorsports"];

    const [selectedSkill, setSelectedSkill] = useState<{
        name: string;
        level: number;
        type: string;
    } | null>(null);

    return (
        <section id="about" className="max-w-6xl mx-auto px-6 py-24">
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold mb-6"
            >
                About Me
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-zinc-600 dark:text-zinc-400 max-w-3xl mb-10"
            >
                I am an IT student and aspiring full‑stack developer who enjoys building modern web applications, learning new technologies, and turning ideas into real projects.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Languages */}
                <SkillCard
                    title="Languages"
                    items={languages}
                    type="Language"
                    setSelectedSkill={setSelectedSkill}
                />

                {/* Frameworks */}
                <SkillCard
                    title="Frameworks / Libraries"
                    items={frameworks}
                    type="Framework"
                    setSelectedSkill={setSelectedSkill}
                />

                {/* Interests */}
                <motion.div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md dark:shadow-black/50">
                    <h4 className="text-xl font-semibold mb-4">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                            <span
                                key={interest}
                                className="px-3 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-700 cursor-default"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Skill Modal */}
            <AnimatePresence>
                {selectedSkill && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedSkill(null)}
                    >
                        <motion.div
                            className="bg-white dark:bg-zinc-900 p-6 rounded-xl max-w-sm w-full shadow-lg"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h4 className="text-xl font-bold mb-4">{selectedSkill.name}</h4>
                            <p className="mb-4">Type: {selectedSkill.type}</p>
                            <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-4 rounded-full overflow-hidden">
                                <motion.div
                                    className="bg-indigo-600 h-4 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${selectedSkill.level}%` }}
                                    transition={{ duration: 0.8 }}
                                />
                            </div>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Experience: {selectedSkill.level}%
                            </p>
                            <button
                                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                                onClick={() => setSelectedSkill(null)}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function SkillCard({ title, items, type, setSelectedSkill }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md dark:shadow-black/50"
        >
            <h4 className="text-xl font-semibold mb-4">{title}</h4>
            <div className="flex flex-wrap gap-2">
                {items.map((item: any) => (
                    <motion.span
                        key={item.name}
                        className="px-3 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-700 cursor-pointer hover:bg-indigo-200 dark:hover:bg-indigo-700 transition"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedSkill({ ...item, type })}
                    >
                        {item.name}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}

export default About;
