"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  FolderGit2,
  ChevronDown,
  CalendarClock,
  ChefHat,
  Images,
  Code2,
  Wallet,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { useTranslations } from "next-intl";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

// Non-translatable project data (icons, techs, links)
const projectsData = [
  {
    icon: <CalendarClock className="h-4 w-4" />,
    technologies: [
      "React",
      "Electron",
      "Tailwind CSS",
      "Leaflet",
      "Prisma",
      "Expo",
      "Gitlab",
    ],
  },
  {
    icon: <ChefHat className="h-4 w-4" />,
    technologies: ["C#", "WindowsForms .NET", "SQLite", "Gitlab"],
  },
  {
    icon: <Images className="h-4 w-4" />,
    technologies: ["React", "Nextjs", "Prisma", "Supabase", "Tailwind CSS"],
  },
  {
    icon: <Code2 className="h-4 w-4" />,
    technologies: ["Java", "UML", "Gitlab"],
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    technologies: [
      "React",
      "React Router",
      "TypeScript",
      "CSS",
      "Prisma",
      "Gitlab",
    ],
  },
  {
    icon: <Wallet className="h-4 w-4" />,
    technologies: ["C#", "WindowsForms .NET", "SQLite", "Gitlab"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-card/20 border border-border/30 hover:border-primary/40 transition-all duration-500 overflow-hidden">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/30 group-hover:border-primary/60 transition-colors" />

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center rotate-45 group-hover:bg-primary/20 transition-colors">
              <span className="text-primary -rotate-45">{project.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground tracking-wide">
              {project.title}
            </h3>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none border border-border/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none border border-border/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-1 bg-secondary/30 text-muted-foreground border border-border/20 tracking-wide uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

const PROJECTS_PER_PAGE = 4;

export function ProjectsSection() {
  const t = useTranslations("projects");
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  const projects: Project[] = projectsData.map((data, i) => ({
    ...data,
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + PROJECTS_PER_PAGE, projects.length),
    );
  };

  return (
    <section id="projects" className="py-24 relative">
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

          {/* Projects Grid - 2 per row */}
          <div
            ref={gridRef}
            className={`grid md:grid-cols-2 gap-6 ${gridInView ? "animate-in fade-in-up delay-200" : "opacity-0"}`}
          >
            {visibleProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreProjects && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                className="rounded-none border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-5 tracking-wide transition-all duration-300 cursor-pointer"
                onClick={handleLoadMore}
              >
                {t("loadMore")}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
