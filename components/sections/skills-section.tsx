"use client";

import { useEffect, useRef } from "react";
import { Globe, Users, Lightbulb, Puzzle, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";
import { useTranslations } from "next-intl";

interface Skill {
  name: string;
  icon: string;
}

interface SoftSkill {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

// Compétences techniques basées sur le CV
const technicalSkills: Skill[] = [
  // Langages principaux
  {
    name: "TypeScript",
    icon: "/assets/typescript-original.svg",
  },
  {
    name: "Java",
    icon: "/assets/java-original.svg",
  },
  {
    name: "C",
    icon: "/assets/c-original.svg",
  },
  {
    name: "C#",
    icon: "/assets/csharp-original.svg",
  },
  // Environnement Microsoft
  {
    name: "Azure DevOps",
    icon: "/assets/azure-original.svg",
  },
  {
    name: ".NET",
    icon: "/assets/dotnetcore-original.svg",
  },
  {
    name: "PowerShell",
    icon: "/assets/powershell-original.svg",
  },
  // Programmation web
  {
    name: "HTML5",
    icon: "/assets/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "/assets/css3-original.svg",
  },
  {
    name: "React",
    icon: "/assets/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "/assets/nextjs-original.svg",
  },
  // Base de données
  {
    name: "Oracle",
    icon: "/assets/oracle-original.svg",
  },
  {
    name: "MySQL",
    icon: "/assets/mysql-original.svg",
  },
  {
    name: "Prisma",
    icon: "/assets/prisma-original.svg",
  },
  // Autres outils
  {
    name: "Git",
    icon: "/assets/git-original.svg",
  },
  {
    name: "Docker",
    icon: "/assets/docker-original.svg",
  },
];

// Soft skills et langues - icons mapped by key
const softSkillKeys = [
  "languages",
  "teamwork",
  "learning",
  "problemSolving",
] as const;

const softSkillIcons: Record<string, React.ReactNode> = {
  languages: <Languages className="h-5 w-5" />,
  teamwork: <Users className="h-5 w-5" />,
  learning: <Lightbulb className="h-5 w-5" />,
  problemSolving: <Puzzle className="h-5 w-5" />,
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex-shrink-0 group">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-card/30 border border-border/30 flex items-center justify-center transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 group-hover:rotate-3">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <p className="text-[10px] text-center text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
        {skill.name}
      </p>
    </div>
  );
}

function SoftSkillCard({ softSkill }: { softSkill: SoftSkill }) {
  return (
    <div className="group relative p-5 bg-card/20 border border-border/30 hover:border-primary/40 transition-all duration-500">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30 group-hover:border-primary/60 transition-colors" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30 group-hover:border-primary/60 transition-colors" />

      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary">{softSkill.icon}</div>
        <h3 className="text-sm font-medium text-foreground tracking-wide">
          {softSkill.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {softSkill.items.map((item, index) => (
          <span
            key={index}
            className="text-[10px] px-2 py-1 bg-secondary/30 text-muted-foreground border border-border/20 tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const t = useTranslations("skills");
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: carouselRef, isInView: carouselInView } = useInView();
  const { ref: softSkillsRef, isInView: softSkillsInView } = useInView();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone items for seamless loop
    const scrollContent = scrollContainer.querySelector(".scroll-content");
    if (
      scrollContent &&
      scrollContent.children.length === technicalSkills.length
    ) {
      const items = Array.from(scrollContent.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollContent.appendChild(clone);
      });
    }
  }, []);

  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header - Asian style */}
          <div
            ref={headerRef}
            className={`text-center mb-20 ${headerInView ? "animate-in fade-in-up" : "opacity-0"}`}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
                {t("sectionLabel")}
              </p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-wide ink-stroke">
              {t("title")}
            </h2>
          </div>

          {/* Technical Skills Carousel */}
          <div
            ref={carouselRef}
            className={`mb-12 ${carouselInView ? "animate-in fade-in delay-200" : "opacity-0"}`}
          >
            <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
              {t("technologiesLabel")}
            </p>
            <div className="relative">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              {/* Scrolling container */}
              <div ref={scrollRef} className="overflow-hidden">
                <div className="scroll-content flex gap-4 sm:gap-6 animate-scroll py-4">
                  {technicalSkills.map((skill, index) => (
                    <SkillCard key={`${skill.name}-${index}`} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills Grid */}
          <div
            ref={softSkillsRef}
            className={
              softSkillsInView ? "animate-in fade-in-up delay-300" : "opacity-0"
            }
          >
            <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
              {t("softSkillsLabel")}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkillKeys.map((key) => {
                const items: string[] = t.raw(`softSkills.${key}.items`);
                return (
                  <SoftSkillCard
                    key={key}
                    softSkill={{
                      icon: softSkillIcons[key],
                      title: t(`softSkills.${key}.title`),
                      items,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
