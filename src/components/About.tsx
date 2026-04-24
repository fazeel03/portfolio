import { Briefcase, Code2, Globe, GraduationCap, Sparkles } from "lucide-react";

const highlights = [
  { icon: Briefcase, title: "Software Engineer", desc: "Full-Stack at XTS Xponential Technology Services (Feb 2025 – Present)", color: "from-primary to-primary/60" },
  { icon: Globe, title: "Full-Stack", desc: "React.js, Node.js, Python, MySQL & more", color: "from-primary/80 to-[hsl(var(--gradient-end))]" },
  { icon: GraduationCap, title: "MSc in Computer Applications", desc: "Symbiosis Institute, Pune (2023–2025)", color: "from-[hsl(var(--gradient-end))] to-primary" },
];

export const About = () => {
  return (
    <section id="about" className="relative border-t border-border py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="mx-auto max-w-6xl relative">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About Me</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Passionate about building <span className="text-gradient">great software</span>
        </h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Fazeel Memon, a results-driven Full-Stack Developer based in Pune, India.
              I'm currently working as a Software Engineer at <strong className="text-foreground">XTS Xponential Technology Services</strong> since
              February 2025, where I build scalable web applications using React.js, Node.js, Python, and MySQL.
            </p>
            <p>
              My day-to-day involves working with CI/CD pipelines, Express.js, JWT authentication,
              REST APIs, Sequelize ORM, and modern testing with Vitest. I focus on writing clean,
              maintainable code and building experiences that feel effortless.
            </p>
            <p>
              Previously, I interned at Salahkaar, a healthcare organization, where I developed
              internal web tools and RESTful API integrations. I hold a Master's degree in Computer
              Applications from Symbiosis Institute of Computer Studies and Research, Pune.
            </p>
          </div>
          <div className="grid gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm p-5 transition-all hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${h.color} text-primary-foreground shadow-lg`}>
                  <h.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">{h.title}</p>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
