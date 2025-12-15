import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <CustomCursor />
      <div className="bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 scroll-smooth transition-colors">
        <Navbar dark={dark} setDark={setDark} />
        <main id="main-content">
          <Hero />
          <About />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}