import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/40 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Nimisha{" "}
            <span className="text-gradient">Padsala</span>
          </h1>

          {/* Role */}
          <p className="font-display text-xl md:text-2xl text-primary font-medium mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Laravel Developer
          </p>

          {/* Bio */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Crafting scalable, secure & beautiful web applications with passion. 
            I turn ideas into elegant digital experiences using PHP, Laravel & modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="gradient-primary text-primary-foreground px-8 py-4 rounded-full font-medium shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-card text-foreground px-8 py-4 rounded-full font-medium shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
