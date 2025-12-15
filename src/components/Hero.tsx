import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from "react-icons/ai";
import heroImage from "../assets/hero-image.svg"; // Replace with a better hero image

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center pt-24 px-6 md:px-24"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left: Text */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                    className="flex flex-col gap-4 md:gap-6 flex-1 text-center md:text-left"
                >
                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                    >
                        Hi, I’m <span className="text-indigo-600">Francis</span>
                    </motion.h1>
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: -15 }, visible: { opacity: 1, y: 0 } }}
                        className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                    >
                        Aspiring Full-Stack Developer
                    </motion.h2>
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                        className="text-gray-600 dark:text-gray-300 md:text-lg max-w-md mx-auto md:mx-0"
                    >
                        Building modern web applications with React, Node.js, and cutting-edge tools.
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-wrap justify-center md:justify-start gap-4 mt-4"
                    >
                        <a
                            href="/Valeros_CV.pdf"
                            download
                            className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium shadow-md"
                            data-cursor="button"
                            data-cursor-text="DOWNLOAD"
                        >
                            <AiOutlineDownload size={20} /> Download CV
                        </a>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <AiFillGithub size={28} />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <AiFillLinkedin size={28} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right: Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex justify-center md:justify-end flex-1 mt-8 md:mt-0"
                >
                    <motion.img
                        src={heroImage}
                        alt="Hero"
                        className="w-52 sm:w-56 md:w-72 lg:w-80 rounded-xl shadow-2xl"
                        whileHover={{ y: -10, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 120 }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
