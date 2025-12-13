import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <section className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <motion.h1
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Hi, I'm Elmo
            </motion.h1>
            <p className="text-xl text-gray-700">
                <Typewriter
                    words={['Web Developer', 'React Enthusiast', 'UI/UX Lover']}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </p>
        </section>
    )
}
