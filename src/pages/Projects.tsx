import ProjectCard from '../components/ProjectCards';

export default function Projects() {
    const projects = [
        { title: 'Portfolio Website', description: 'A personal portfolio website built with React and TailwindCSS.', link: '#' },
        { title: 'E-commerce App', description: 'A simple e-commerce application with shopping cart functionality.', link: '#' },
        { title: 'Blog Platform', description: 'A blog platform built with React and Node.js backend.', link: '#' },
    ];

    return (
        <section className="p-12 bg-gray-100">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    )
}
