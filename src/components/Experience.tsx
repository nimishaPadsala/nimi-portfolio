import { Building2, Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">Work Experience</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Journey So Far
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building amazing web applications and growing as a developer
            </p>
          </div>

          {/* Experience card */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            {/* Company card */}
            <div className="relative pl-0 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-5 top-8 w-6 h-6 gradient-primary rounded-full shadow-glow hidden md:flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-foreground rounded-full" />
              </div>

              <div className="bg-background rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border/50">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 gradient-accent rounded-xl flex items-center justify-center shadow-soft">
                      <Building2 className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Codexive Solution</h3>
                      <p className="text-primary font-medium">Laravel Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-secondary-foreground">June 2022 – Present</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                    <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">Full-Stack Development</p>
                      <p className="text-sm text-muted-foreground">Building secure, scalable web applications using Laravel, PHP, and MySQL</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                    <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">API Development</p>
                      <p className="text-sm text-muted-foreground">Designing and implementing RESTful APIs for seamless integrations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                    <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">Project Delivery</p>
                      <p className="text-sm text-muted-foreground">Successfully delivered multiple projects across various domains</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
