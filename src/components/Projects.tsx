import { Shield, Calendar, Trophy, Home, Landmark, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Aadhaar-Based Employee Verification",
    description: "A secure web application for companies to verify employee identity using Aadhaar details. Features include secure data handling, employee registration, verification workflow, and company-wise employee management.",
    icon: Shield,
    tags: ["Laravel", "PHP", "MySQL", "Security"],
    color: "from-primary/80 to-secondary",
  },
  {
    title: "Event Booking Platform",
    description: "A dynamic web application that allows users to browse events and book tickets online. Includes an admin panel for event organizers to create, update, and manage events with real-time updates.",
    icon: Calendar,
    tags: ["Laravel", "Bootstrap", "MySQL", "API"],
    color: "from-secondary to-accent",
  },
  {
    title: "Assist - Sports Platform",
    description: "A sports-focused web application providing users with information about different sports activities, events, schedules, and related updates across various sports categories.",
    icon: Trophy,
    tags: ["PHP", "Laravel", "JavaScript", "MySQL"],
    color: "from-accent to-primary/60",
  },
  {
    title: "List Properties",
    description: "A comprehensive real estate web application for managing property listings including sales and rentals. Users can browse properties, view details, and contact owners with full admin control.",
    icon: Home,
    tags: ["Laravel", "MySQL", "Bootstrap", "CRUD"],
    color: "from-primary/70 to-accent",
  },
  {
    title: "Neosurf Banking Application",
    description: "A microservices-based banking application handling secure financial operations such as limit management, withdrawals, deposits, and KYC verification with high performance and scalability.",
    icon: Landmark,
    tags: ["Laravel", "Microservices", "API", "Security"],
    color: "from-secondary to-primary/80",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">My Projects</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work I'm Proud Of
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills and passion for development
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card header with gradient */}
                <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-foreground/5" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-card/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-card/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 bg-muted text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
