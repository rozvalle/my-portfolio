import { Download } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
    const floatingShapes = [
        { size: 60, x: -50, y: -100, delay: 0 },
        { size: 80, x: 100, y: -150, delay: 0.5 },
        { size: 100, x: -120, y: 50, delay: 1 },
        { size: 50, x: 150, y: 100, delay: 1.5 },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
            {/* Floating background shapes */}
            {floatingShapes.map((shape, idx) => (
                <motion.div
                    key={idx}
                    className="absolute rounded-full bg-indigo-200 dark:bg-indigo-800 opacity-30"
                    style={{ width: shape.size, height: shape.size, top: shape.y, left: shape.x }}
                    animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: shape.delay, ease: "easeInOut" }}
                />
            ))}

            {/* Main Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-center z-10 px-4"
            >
                {/* Profile Image */}
                <motion.img
                    src="https://avatars.githubusercontent.com/u/190080158?v=4"
                    className="relative z-10 w-48 h-48 mx-auto rounded-full border-4 border-zinc-400 dark:border-zinc-700 object-cover shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                />

                {/* Name */}
                <motion.h2
                    className="mt-6 text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Francis Elmo Valeros
                </motion.h2>

                {/* Role */}
                <motion.p
                    className="text-zinc-600 dark:text-zinc-400 mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    Full‑Stack Developer | IT Student
                </motion.p>

                {/* CV Download Button */}
                <motion.a
                    href="/Valeros_CV.pdf"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium shadow-lg hover:scale-105 transition-transform"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    <Download size={18} /> Download CV
                </motion.a>
            </motion.div>
        </section>
    );
}

export default Hero;
