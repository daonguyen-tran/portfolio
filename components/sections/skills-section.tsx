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
  {
    name: "Unity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  },
  {
    name: "Android Studio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
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
    items: ["Analyse", "Adaptation", "Capacité d'analyse", "Autonomie"],
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex-shrink-0 group">
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-card/50 border border-border/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <p className="text-xs text-center text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </p>
    </div>
  );
}

function SoftSkillCard({ softSkill }: { softSkill: SoftSkill }) {
  return (
    <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {softSkill.icon}
          </div>
          <h3 className="font-semibold text-foreground">{softSkill.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {softSkill.items.map((item, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-secondary/50 text-muted-foreground hover:bg-secondary/80 transition-colors"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
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
    <section id="skills" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">
            Compétences
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technologies & Savoir-faire
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Les technologies et compétences que j&apos;ai acquises au cours de
            mon parcours à l&apos;IUT et lors de mon stage chez Viking Cruises.
          </p>
        </div>
      </div>

      {/* Technical Skills Carousel */}
      <div className="mb-16">
        <h3 className="text-center text-lg font-medium text-foreground mb-8">
          Compétences techniques
        </h3>
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div ref={scrollRef} className="overflow-hidden">
            <div className="scroll-content flex gap-6 sm:gap-8 animate-scroll py-4">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={`${skill.name}-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Survolez les icônes pour voir le nom de chaque technologie
        </p>
      </div>

      {/* Soft Skills Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-medium text-foreground mb-8">
          Compétences transversales
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {softSkills.map((softSkill, index) => (
            <SoftSkillCard key={index} softSkill={softSkill} />
          ))}
        </div>
      </div>
    </section>
  );
}
