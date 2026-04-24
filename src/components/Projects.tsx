import { ExternalLink, Github, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Task Manager Web Application",
    description:
      "A full-stack CRUD-based task management application with user authentication and responsive design. Built with React frontend, PHP backend with RESTful API endpoints, and MySQL for data persistence.",
    tags: ["React", "PHP", "MySQL", "REST API"],
    github: "https://github.com/fazeel03",
    link: "#",
  },
  {
    title: "Journal Publication Platform",
    description:
      "A web-based academic journal publication system (OJS Clone). Implemented frontend features with HTML5, CSS3, and JavaScript, integrated with backend systems using REST API calls and JSON data handling.",
    tags: ["HTML5", "CSS3", "JavaScript", "REST API"],
    github: "https://github.com/fazeel03",
    link: "#",
  },
  {
    title: "Interactive UI Component Showcase",
    description:
      "A library of reusable React components demonstrating modern UI patterns. Implemented responsive layouts using CSS3 Flexbox/Grid with best practices in component design and state management.",
    tags: ["React", "CSS3", "Component Architecture", "State Management"],
    github: "https://github.com/fazeel03",
    link: "#",
  },
  {
    title: "XTS Internal Tools",
    description:
      "Scalable internal tools and applications at XTS Xponential Technology Services. Built with React.js, Node.js, Express.js, MySQL, JWT authentication, Sequelize ORM, and CI/CD pipelines.",
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    github: "#",
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative border-t border-border py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="mx-auto max-w-6xl relative">
        <div className="flex items-center gap-2 mb-2">
          <Folder className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Projects</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Things I've <span className="text-gradient">built</span>
        </h2>
        <p className="mt-2 text-muted-foreground">
          Projects and applications I've crafted with care.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                  <Folder className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="transition-all hover:text-primary hover:scale-110">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={project.link} className="transition-all hover:text-primary hover:scale-110">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-normal bg-secondary/50 text-secondary-foreground border-border">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
