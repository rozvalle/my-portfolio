import { motion } from "framer-motion";

export default function Education() {
    return (
        <section id="education" className= "py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-3xl font-bold mb-12">Education</h3>

                <div className="border-l border-zinc-400 dark:border-zinc-700 relative space-y-10">
                    <TimelineItem
                        year="2022 - Present"
                        title="BS Information Technology"
                        place="Saint Mary's University College Department"
                        achievements={[
                            "Silver Medalist - 1st Year, 1st Semester",
                            "Bronze Medalist - 1st Year, 2nd Semester",
                            "Silver Medalist - 4th Year, 1st Semester"
                        ]}
                    />
                    <TimelineItem
                        year="2020 - 2022"
                        title="BS Information Technology"
                        place="Saint Louis University"
                        achievements={[
                            "Deans Lister - 1st Year, 1st Semester",
                        ]}
                    />
                    <TimelineItem
                        year="2018 - 2020"
                        title="STEM Senior High School"
                        place="Saint Mary's University Senior High School Department"
                        achievements={[
                            "With Honors - 2018-2020",
                            "With High Honors - 2019-2020"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ year, title, place, achievements }: any) {
    return (
        <motion.div
            className="ml-6 relative bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md dark:shadow-black/50 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            {/* Timeline node */}
            <div className="absolute -left-[12px] top-6 w-6 h-6 bg-black dark:bg-white rounded-full border-2 border-zinc-200 dark:border-zinc-800" />

            {/* Year */}
            <span className="text-sm text-zinc-500">{year}</span>

            {/* Degree / School */}
            <h4 className="text-xl font-semibold mt-1">{title}</h4>
            <p className="text-zinc-600 dark:text-zinc-400">{place}</p>

            {/* Achievements */}
            {achievements && achievements.length > 0 && (
                <ul className="mt-3 list-disc list-inside text-zinc-600 dark:text-zinc-400 text-sm">
                    {achievements.map((ach: string, idx: number) => (
                        <li key={idx}>{ach}</li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
}
