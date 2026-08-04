import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  return (
    <main data-testid="portfolio-root" className="relative bg-[#050505] text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
