"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/10" />

      {/* Decorative vertical lines - bamboo inspired */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

      {/* Warm lantern glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[80px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-xl">
            {/* Greeting with decorative element */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
              <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase font-light">
                Bienvenue
              </p>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60 lg:hidden" />
            </div>

            {/* Name with ink brush style */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Daonguyen</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ink-stroke">
                <span className="text-primary">TRAN</span>
              </h1>
            </div>

            {/* Title/Role */}
            <p className="text-lg sm:text-xl text-muted-foreground font-light tracking-wide">
              Développeur en devenir · BUT Informatique
            </p>

            {/* Description in a styled container */}
            <div className="relative max-w-lg mx-auto lg:mx-0 py-6 px-8">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40" />
              <p className="text-muted-foreground leading-relaxed">
                Passionné par le développement web et les nouvelles
                technologies, je construis mon parcours professionnel avec
                curiosité et détermination.
              </p>
            </div>

            {/* Social Links with subtle styling */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none border border-border/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <span className="w-px h-6 bg-border/50" />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none border border-border/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                asChild
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <span className="w-px h-6 bg-border/50" />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none border border-border/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                asChild
              >
                <a href="mailto:votre@email.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-primary/20" />
              <div className="absolute -inset-3 border border-primary/10 translate-x-2 translate-y-2" />

              {/* Corner decorations */}
              <div className="absolute -top-5 -left-5 w-3 h-3 border-t-2 border-l-2 border-primary/60" />
              <div className="absolute -top-5 -right-5 w-3 h-3 border-t-2 border-r-2 border-primary/60" />
              <div className="absolute -bottom-5 -left-5 w-3 h-3 border-b-2 border-l-2 border-primary/60" />
              <div className="absolute -bottom-5 -right-5 w-3 h-3 border-b-2 border-r-2 border-primary/60" />

              {/* Image container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 overflow-hidden bg-secondary/20">
                <Image
                  src="/img/profile.jpg"
                  alt="Photo de profil de Daonguyen TRAN"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Diamond accent */}
              <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-primary/20 rotate-45" />
            </div>
          </div>
        </div>

        {/* CTA Button - centered below the content */}
        <div className="mt-12 flex justify-center w-full">
          <Button
            variant="outline"
            size="lg"
            className="rounded-none border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 tracking-wide transition-all duration-300"
            onClick={handleScrollToAbout}
          >
            Découvrir mon parcours
            <ArrowDown className="ml-3 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator - minimal */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
}
