import { Heart, Code2, Lightbulb, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Nice to meet you! <Heart className="inline w-8 h-8 text-primary fill-primary" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image/Illustration area */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative shapes */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-secondary rounded-3xl" />
                <div className="absolute -bottom-4 -right-4 w-full h-full gradient-accent rounded-3xl" />
                
                {/* Main card */}
                <div className="relative bg-card rounded-3xl p-8 shadow-card">
                  <div className="w-full aspect-square gradient-hero rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                        <span className="font-display text-5xl font-bold text-primary-foreground">NP</span>
                      </div>
                      <p className="font-display text-xl font-semibold text-foreground">Nimisha Padsala</p>
                      <p className="text-muted-foreground">Laravel Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a detail-oriented Laravel Developer with hands-on experience in building 
                <span className="text-primary font-medium"> scalable, secure, and high-performance</span> web applications. 
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Skilled in PHP, Laravel framework, RESTful APIs, MySQL, and front-end technologies. 
                I have strong problem-solving abilities with a focus on clean code, optimized performance, 
                and seamless user experience.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Passionate about learning new technologies and contributing to efficient, high-quality software solutions. 
                I believe in writing code that not only works but is also maintainable and elegant.
              </p>

              {/* Highlight cards */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                <div className="gradient-card rounded-2xl p-4 shadow-soft hover:shadow-card transition-shadow">
                  <Code2 className="w-8 h-8 text-primary mb-2" />
                  <p className="font-medium text-foreground text-sm">Clean Code</p>
                  <p className="text-xs text-muted-foreground">Best practices</p>
                </div>
                <div className="gradient-card rounded-2xl p-4 shadow-soft hover:shadow-card transition-shadow">
                  <Lightbulb className="w-8 h-8 text-primary mb-2" />
                  <p className="font-medium text-foreground text-sm">Problem Solver</p>
                  <p className="text-xs text-muted-foreground">Creative solutions</p>
                </div>
                <div className="gradient-card rounded-2xl p-4 shadow-soft hover:shadow-card transition-shadow">
                  <GraduationCap className="w-8 h-8 text-primary mb-2" />
                  <p className="font-medium text-foreground text-sm">BCA Graduate</p>
                  <p className="text-xs text-muted-foreground">Computer Applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;