import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© 2025 Fazeel Memon. Built with <span className="text-gradient">React & TypeScript</span>.</p>
      </footer>
    </div>
  );
};

export default Index;
