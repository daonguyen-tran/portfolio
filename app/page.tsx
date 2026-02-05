"use client";

import { Navbar } from "@/components/navbar";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("footer");

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card/20 relative">
        {/* Decorative top line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo / Name */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-primary/60 flex items-center justify-center rotate-45">
                  <span className="text-primary text-sm font-bold -rotate-45">
                    D
                  </span>
                </div>
                <span className="text-foreground font-medium tracking-wide">
                  Daonguyen TRAN
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/daonguyen-tran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <span className="w-px h-4 bg-border/50" />
                <a
                  href="https://www.linkedin.com/in/daonguyen-tran-370848350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <span className="w-px h-4 bg-border/50" />
                <a
                  href="mailto:daonguyentr.pro@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-xs text-muted-foreground">
                  {t("copyright", { year: new Date().getFullYear() })}
                </p>
                <p className="text-[10px] text-muted-foreground/50 mt-1">
                  Next.js · Tailwind CSS · shadcn/ui
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
