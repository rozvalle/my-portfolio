import { motion } from 'framer-motion';

type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
};

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
        >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
        </motion.div>
    );
}
