"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background" />

      {/* Decorative elements - Asian-inspired */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-jade/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg tracking-wide uppercase">
            Bienvenue sur mon portfolio
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Daonguyen</span>{" "}
            <span className="text-primary">TRAN</span>
          </h1>

          {/* Title/Role */}
          <p className="text-xl sm:text-2xl text-muted-foreground font-light">
            Étudiant en 3ème année de BUT Informatique
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Passionné par le développement web et les nouvelles technologies. En
            quête de nouvelles opportunités pour construire mon identité
            professionnelle.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer"
              asChild
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer"
              asChild
            >
              <a href="mailto:votre@email.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 shadow-lg shadow-primary/20 transition-all duration-200"
              onClick={handleScrollToAbout}
            >
              Découvrir mon parcours
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
