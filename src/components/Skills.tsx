import { Code, Database, Layout, FileCode, Palette, Box, Sparkle } from "lucide-react";

const skills = [
  {
    name: "Laravel",
    icon: Box,
    color: "bg-primary/20",
    description: "PHP Framework",
  },
  {
    name: "PHP",
    icon: Code,
    color: "bg-secondary",
    description: "Server-side scripting",
  },
  {
    name: "MySQL",
    icon: Database,
    color: "bg-accent",
    description: "Database management",
  },
  {
    name: "HTML",
    icon: FileCode,
    color: "bg-secondary",
    description: "Markup language",
  },
  {
    name: "CSS",
    icon: Palette,
    color: "bg-primary/20",
    description: "Styling & layouts",
  },
  {
    name: "Bootstrap",
    icon: Layout,
    color: "bg-accent",
    description: "CSS Framework",
  },
  {
    name: "JavaScript",
    icon: Sparkle,
    color: "bg-secondary",
    description: "Interactive features",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">
              My Skills
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technologies I Love
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These are the tools and technologies I work with to bring ideas to life
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}

            {/* Special card */}
            <div className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-default border-2 border-dashed border-primary/30">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary-foreground text-2xl">+</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                Always Learning
              </h3>
              <p className="text-sm text-muted-foreground">Growing every day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
