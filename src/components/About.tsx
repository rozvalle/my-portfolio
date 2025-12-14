import { motion } from "framer-motion";

function About() {
    const languages = ["Java", "C#", "VB.net", "HTML", "CSS", "JavaScript", "TypeScript", "Kotlin", "Python", "SQL", "Bash"];
    const frameworks = ["React", "Node.js", "Express", "Tailwind CSS", "Next.js"];
    const interests = ["Gaming", "Playing Guitar", "Drawing", "Motorsports"];

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

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
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                className="text-zinc-600 dark:text-zinc-400 max-w-3xl mb-10"
            >
                I am an IT student and aspiring full‑stack developer who enjoys building modern web applications, learning new technologies, and turning ideas into real projects.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Programming Languages */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md dark:shadow-black/50"
                >
                    <h4 className="text-xl font-semibold mb-4">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                        {languages.map((lang) => (
                            <span
                                key={lang}
                                className="px-3 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-700"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Frameworks / Libraries */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md dark:shadow-black/50"
                >
                    <h4 className="text-xl font-semibold mb-4">Frameworks / Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                        {frameworks.map((fw) => (
                            <span
                                key={fw}
                                className="px-3 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-700"
                            >
                                {fw}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Personal Interests */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md dark:shadow-black/50"
                >
                    <h4 className="text-xl font-semibold mb-4">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                            <span
                                key={interest}
                                className="px-3 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-700"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
