import { Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Responsive Design", level: 90 },
      { name: "Lucide React", level: 85 },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST API", level: 90 },
      { name: "JWT Authentication", level: 80 },
      { name: "Sequelize ORM", level: 80 },
    ],
  },
  {
    title: "Languages & Databases",
    skills: [
      { name: "Python", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "PHP", level: 75 },
      { name: "SQL", level: 85 },
      { name: "JSON", level: 90 },
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Vitest", level: 80 },
      { name: "WordPress", level: 70 },
      { name: "Debugging", level: 85 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative border-t border-border py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-[hsl(var(--gradient-end))]/5 blur-[100px]" />
      <div className="mx-auto max-w-6xl relative">
        <div className="flex items-center gap-2 mb-2">
          <Wrench className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Skills</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My <span className="text-gradient">tech stack</span>
        </h2>
        <p className="mt-2 text-muted-foreground">Technologies and tools I work with daily.</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-primary/20 hover:bg-card"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
