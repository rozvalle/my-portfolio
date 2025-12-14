// App.tsx
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-lg">Elmo</span>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24">
      <div className="relative text-center">
        <h1 className="absolute inset-0 flex items-center justify-center text-[6rem] md:text-[9rem] font-extrabold text-zinc-800 opacity-30 select-none">
          FRANCIS ELMO
        </h1>
        <img
          src="/profile.jpg"
          alt="Profile"
          className="relative z-10 w-48 h-48 mx-auto rounded-full border-4 border-zinc-700 object-cover"
        />
        <h2 className="mt-6 text-3xl font-bold">Francis Elmo Valeros</h2>
        <p className="text-zinc-400 mt-2">Full‑Stack Developer | IT Student</p>
        <a
          href="/cv.pdf"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-zinc-200"
        >
          <Download size={18} /> Download CV
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold mb-6">About Me</h3>
      <p className="text-zinc-400 max-w-3xl">
        I am a passionate IT student and developer who enjoys building web applications, experimenting with new technologies, and continuously learning. I focus on clean UI, maintainable code, and practical solutions.
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        {[
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Node.js",
          "Python",
          "Linux",
        ].map((skill) => (
          <span key={skill} className="px-3 py-1 text-sm rounded-full bg-zinc-800">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="bg-zinc-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12">Education</h3>
        <div className="border-l border-zinc-700 space-y-10">
          <TimelineItem
            year="2022 – Present"
            title="BS Information Technology"
            place="Your University"
          />
          <TimelineItem
            year="2020 – 2022"
            title="Senior High School – ICT"
            place="Your School"
          />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, title, place }: any) {
  return (
    <div className="ml-6 relative">
      <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white rounded-full" />
      <span className="text-sm text-zinc-400">{year}</span>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-zinc-400">{place}</p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold mb-12">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Portfolio Website"
          desc="Personal portfolio built with React, TypeScript, and Tailwind CSS."
          tags={["React", "TypeScript", "Tailwind"]}
        />
        <ProjectCard
          title="VAWC Reporting System"
          desc="Decision support system for reporting and assisting VAWC cases."
          tags={["Laravel", "MySQL", "Bootstrap"]}
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tags }: any) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-600 transition">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-zinc-400 mt-2">{desc}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag: string) => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-800">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-6 text-sm">
        <a href="#" className="underline">View Code</a>
        <a href="#" className="underline">Live Site</a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <div className="flex justify-center gap-6">
          <a href="mailto:you@email.com"><Mail /></a>
          <a href="https://github.com/yourusername"><Github /></a>
          <a href="https://linkedin.com/in/yourusername"><Linkedin /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-zinc-500">
      © {new Date().getFullYear()} Francis Elmo Valeros
    </footer>
  );
}
