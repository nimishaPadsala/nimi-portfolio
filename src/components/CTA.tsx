import { Heart, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 gradient-cta opacity-50" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Floating sparkle */}
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl shadow-glow mb-8 animate-float">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Work{" "}
            <span className="text-gradient">Together</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="gradient-primary text-primary-foreground px-10 py-4 rounded-full font-medium shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Get In Touch
            </a>
            <a
              href="mailto:nimishapadsala@gmail.com"
              className="bg-card text-foreground px-10 py-4 rounded-full font-medium shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
