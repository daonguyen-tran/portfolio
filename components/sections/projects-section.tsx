"use client";

import { useState } from "react";
import { ExternalLink, Github, FolderGit2, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Níðhöggr",
    description:
      "Projet de développement d'un jeu ou d'une application interactive. Travail en équipe utilisant des méthodologies agiles et des outils de versioning.",
    technologies: [
      "React",
      "Electron",
      "Tailwind CSS",
      "Leaflet",
      "Prisma",
      "Gitlab",
    ],
    githubUrl: "#",
  },
  {
    title: "Application Gallerie Photos",
    description:
      "Application web développée durant mon temps libre, permettant de gérer et partager des photos avec des fonctionnalités avancées de création de compte, de visualisation, de tri et de recherche.",
    technologies: ["Nextjs", "Prisma", "Supabase", "Tailwind CSS"],
  },
  {
    title: "Portfolio Personnel",
    description:
      "Ce portfolio que vous consultez actuellement ! Développé avec Next.js et Tailwind CSS, avec un design moderne inspiré de l'esthétique asiatique.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Projet T3-T4",
    description:
      "Projet académique de troisième année impliquant la conception et le développement d'une application complète, de l'analyse des besoins au déploiement.",
    technologies: ["À définir"],
  },
  {
    title: "Projet T6",
    description:
      "Projet académique de troisième année impliquant la conception et le développement d'une application complète, de l'analyse des besoins au déploiement.",
    technologies: ["À définir"],
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
              <FolderGit2 className="h-4 w-4 text-primary -rotate-45" />
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
                  aria-label="Voir sur GitHub"
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
                  aria-label="Voir le site"
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
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

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
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
                Réalisations
              </p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-wide ink-stroke">
              Mes projets
            </h2>
          </div>

          {/* Projects Grid - 2 per row */}
          <div className="grid md:grid-cols-2 gap-6">
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
                Voir plus de projets
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
