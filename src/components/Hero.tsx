import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const roles = ["Software Engineer", "Full-Stack Developer", "React Developer", "Problem Solver"];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-primary opacity-10 blur-[100px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-primary opacity-8 blur-[100px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl text-center animate-fade-in">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-sm px-4 py-1.5 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Software Engineer at XTS
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient">Fazeel Memon</span>
        </h1>

        <div className="mt-4 h-10 flex items-center justify-center">
          <span className="text-xl text-muted-foreground sm:text-2xl font-mono">
            {displayed}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto">
          Full-Stack Developer crafting performant, scalable web applications
          with React.js, Node.js & modern cloud technologies.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity glow-primary">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-primary/30 hover:bg-primary/10 hover:border-primary/50">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          {[
            { icon: Github, href: "https://github.com/fazeel03" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/fazeel-m-a30380258" },
            { icon: Mail, href: "#contact", external: false },
          ].map(({ icon: Icon, href, external }, i) => (
            <a
              key={i}
              href={href}
              target={external === false ? undefined : "_blank"}
              rel={external === false ? undefined : "noopener noreferrer"}
              className="text-muted-foreground transition-all hover:text-primary hover:scale-110 hover:-translate-y-0.5"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce hover:text-primary transition-colors"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};
