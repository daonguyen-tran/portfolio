"use client";

import {
  GraduationCap,
  Target,
  MapPin,
  Dumbbell,
  Swords,
  Pencil,
  Calendar,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/useInView";
import { useTranslations } from "next-intl";

interface Formation {
  period: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  secondLine?: string;
  highlight?: string;
}

function TimelineItem({
  formation,
  isLast,
}: {
  formation: Formation;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-5">
      {/* Timeline line - bamboo inspired */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-border/20" />
      )}

      {/* Timeline dot - lantern style with graduation icon */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-7 h-7 bg-primary/20 border border-primary/60 flex items-center justify-center rotate-45">
          <GraduationCap className="w-3.5 h-3.5 text-primary -rotate-45" />
        </div>
      </div>

      {/* Content */}
      <div className="pb-8 flex-1 pt-0.5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-medium text-primary tracking-wider">
            {formation.period}
          </span>
          {formation.highlight && (
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/30 text-[10px] uppercase tracking-wider rounded-none px-2"
            >
              {formation.highlight}
            </Badge>
          )}
        </div>
        <h4 className="text-base font-semibold text-foreground mb-1">
          {formation.title}
        </h4>
        <p className="text-xs text-muted-foreground mb-1">
          {formation.institution}, {formation.location}
        </p>
        <p className="text-xs text-muted-foreground/70 leading-relaxed">
          {formation.description}
        </p>
        {formation.secondLine && (
          <p className="text-xs text-muted-foreground/70 mt-1 leading-relaxed">
            {formation.secondLine}
          </p>
        )}
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="group relative p-6 bg-card/30 border border-border/30 hover:border-primary/40 transition-all duration-500">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40 group-hover:border-primary/70 transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40 group-hover:border-primary/70 transition-colors" />

      <div className="flex items-start gap-4">
        <div className="p-2 bg-primary/10 text-primary">{icon}</div>
        <div className="space-y-1">
          <h3 className="font-medium text-foreground text-sm tracking-wide">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const t = useTranslations("about");
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: contentRef, isInView: contentInView } = useInView();
  const { ref: infoCardsRef, isInView: infoCardsInView } = useInView();
  const { ref: interestsRef, isInView: interestsInView } = useInView();

  const formations: Formation[] = [0, 1, 2, 3].map((i) => ({
    period: t(`formations.${i}.period`),
    title: t(`formations.${i}.title`),
    institution: t(`formations.${i}.institution`),
    location: t(`formations.${i}.location`),
    description: t(`formations.${i}.description`),
    secondLine: t.has(`formations.${i}.secondLine`)
      ? t(`formations.${i}.secondLine`)
      : undefined,
    highlight: t.has(`formations.${i}.highlight`)
      ? t(`formations.${i}.highlight`)
      : undefined,
  }));

  return (
    <section id="about" className="py-24 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />

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

          {/* Content */}
          <div
            ref={contentRef}
            className={`grid lg:grid-cols-2 gap-16 items-start ${contentInView ? "animate-in fade-in-up delay-200" : "opacity-0"}`}
          >
            {/* Text Content */}
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-primary/30">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("paragraphs.intro")}
                </p>
              </div>
              <div className="relative pl-6 border-l border-border/30">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("paragraphs.firstYear")}
                </p>
              </div>
              <div className="relative pl-6 border-l border-border/30">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("paragraphs.secondYear")}
                </p>
              </div>
              <div className="relative pl-6 border-l border-border/30">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("paragraphs.internship")}
                </p>
              </div>
              <div className="relative pl-6 border-l border-border/30">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("paragraphs.thirdYear")}
                </p>
              </div>
            </div>

            {/* Formation Timeline */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px bg-primary/40" />
                <h3 className="text-lg font-semibold text-foreground tracking-wide">
                  {t("formationTitle")}
                </h3>
              </div>
              <div className="space-y-0">
                {formations.map((formation, index) => (
                  <TimelineItem
                    key={index}
                    formation={formation}
                    isLast={index === formations.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Info Cards - Localisation & Objectif */}
          <div
            ref={infoCardsRef}
            className={`grid sm:grid-cols-2 gap-6 mt-16 ${infoCardsInView ? "animate-in fade-in-up delay-300" : "opacity-0"}`}
          >
            <InfoCard
              icon={<MapPin className="h-4 w-4" />}
              title={t("infoCards.locationTitle")}
              description={t("infoCards.locationDescription")}
            />
            <InfoCard
              icon={<Target className="h-4 w-4" />}
              title={t("infoCards.objectiveTitle")}
              description={t("infoCards.objectiveDescription")}
            />
          </div>

          {/* Centres d'intérêt */}
          <div
            ref={interestsRef}
            className={`mt-20 ${interestsInView ? "animate-in fade-in-up delay-200" : "opacity-0"}`}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/40" />
              <h3 className="text-sm font-medium text-foreground tracking-wider uppercase">
                {t("interests.title")}
              </h3>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Sport */}
              <div className="group text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 border border-primary/30 flex items-center justify-center rotate-45 group-hover:bg-primary/20 transition-colors">
                  <Dumbbell className="h-5 w-5 text-primary -rotate-45" />
                </div>
                <h4 className="text-sm font-medium text-foreground mb-2">
                  {t("interests.sport.title")}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t("interests.sport.description")}
                </p>
              </div>

              {/* Arts martiaux */}
              <div className="group text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 border border-primary/30 flex items-center justify-center rotate-45 group-hover:bg-primary/20 transition-colors">
                  <Swords className="h-5 w-5 text-primary -rotate-45" />
                </div>
                <h4 className="text-sm font-medium text-foreground mb-2">
                  {t("interests.martialArts.title")}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t("interests.martialArts.description")}
                </p>
              </div>

              {/* Dessin */}
              <div className="group text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 border border-primary/30 flex items-center justify-center rotate-45 group-hover:bg-primary/20 transition-colors">
                  <Pencil className="h-5 w-5 text-primary -rotate-45" />
                </div>
                <h4 className="text-sm font-medium text-foreground mb-2">
                  {t("interests.drawing.title")}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t("interests.drawing.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
