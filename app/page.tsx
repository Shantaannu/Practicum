import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Subtle grid background */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <Hero />
        <div className="border-t border-[#1f1f1f]" />
        <About />
        <div className="border-t border-[#1f1f1f]" />
        <Experience />
        <div className="border-t border-[#1f1f1f]" />
        <Projects />
        <div className="border-t border-[#1f1f1f]" />
        <Skills />
        <div className="border-t border-[#1f1f1f]" />
        <Contact />
      </main>
    </>
  );
}
