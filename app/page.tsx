import Navbar    from "@/components/layout/Navbar";
import Hero       from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects   from "@/components/sections/Projects";
import Skills     from "@/components/sections/Skills";
import Contact    from "@/components/sections/Contact";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
