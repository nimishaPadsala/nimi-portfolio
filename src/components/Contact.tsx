import { useState } from "react";
import { Mail, Phone, Send, Heart, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 💌",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4">Contact Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Say Hello! <Heart className="inline w-8 h-8 text-primary fill-primary" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'd love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:nimishapadsala@gmail.com" className="font-medium text-foreground hover:text-primary transition-colors">
                      nimishapadsala@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-soft">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:7862071232" className="font-medium text-foreground hover:text-primary transition-colors">
                      +91 7862071232
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-soft">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-card">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-primary text-primary-foreground py-4 rounded-xl font-medium shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
