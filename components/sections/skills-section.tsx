"use client";

import { useEffect, useRef } from "react";
import { Globe, Users, Lightbulb, Puzzle, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  // Environnement Microsoft
  {
    name: "Azure DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: ".NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    name: "PowerShell",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
  },
  // Programmation web
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  // Base de données
  {
    name: "Oracle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  // Autres outils
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

// Soft skills et langues
const softSkills: SoftSkill[] = [
  {
    icon: <Languages className="h-5 w-5" />,
    title: "Langues",
    items: [
      "Français (courant)",
      "Vietnamien (bilingue)",
      "Anglais (B2)",
      "Allemand (A2-B1)",
    ],
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Travail d'équipe",
    items: [
      "Collaboration",
      "Communication",
      "Méthodologie Agile",
      "Esprit d'équipe",
    ],
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Apprentissage",
    items: ["Curiosité", "Rigueur", "Auto-formation", "Veille technologique"],
  },
  {
    icon: <Puzzle className="h-5 w-5" />,
    title: "Résolution de problèmes",
    items: ["Adaptation", "Capacité d'analyse", "Autonomie"],
  },
];

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
  const scrollRef = useRef<HTMLDivElement>(null);

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
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
                Savoir-faire
              </p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-wide ink-stroke">
              Compétences
            </h2>
          </div>

          {/* Technical Skills Carousel */}
          <div className="mb-12">
            <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
              Technologies
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
          <div>
            <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
              Compétences transversales
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((softSkill, index) => (
                <SoftSkillCard key={index} softSkill={softSkill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
