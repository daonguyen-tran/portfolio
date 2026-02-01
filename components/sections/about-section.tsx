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

interface Formation {
  period: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  secondLine?: string;
  highlight?: string;
}

const formations: Formation[] = [
  {
    period: "2025 - 2026",
    title: "BUT Informatique 3ème année",
    institution: "IUT Robert Schuman",
    location: "Illkirch-Graffenstaden",
    description:
      "Parcours Réalisation d'applications : conception, développement, validation",
  },
  {
    period: "2024 - 2025",
    title: "BUT Informatique 2ème année",
    institution: "IUT Robert Schuman",
    location: "Illkirch-Graffenstaden",
    description:
      "Parcours Réalisation d'applications : conception, développement, validation",
    secondLine:
      "Stage de fin d'année chez Viking Cruises (Bâle, Suisse) : développement d'une application interne avec PowerApps et Power BI",
    highlight: "DUT obtenu",
  },
  {
    period: "2022 - 2024",
    title: "BUT Informatique 1ère année",
    institution: "IUT Robert Schuman",
    location: "Illkirch-Graffenstaden",
    description:
      "Tronc commun : bases de l'informatique, algorithmie, programmation, développement",
  },
  {
    period: "2018 - 2022",
    title: "Baccalauréat général",
    institution: "Lycée Jean-Henri Lambert",
    location: "Mulhouse",
    description: "Filière générale",
    secondLine:
      "Spécialités Mathématiques & LLCER Anglais | Option Maths expertes",
    highlight: "Mention Bien",
  },
];

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
  return (
    <section id="about" className="py-24 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header - Asian style */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
                À propos
              </p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-wide ink-stroke">
              Mon parcours
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-primary/30">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Étudiant passionné en troisième année de BUT Informatique à
                  l&apos;IUT Robert Schuman (Illkirch-Graffenstaden), je suis à
                  la recherche d&apos;un stage en développement informatique
                  pour valider mon diplôme.
                </p>
              </div>
              <div className="relative pl-6 border-l border-border/30">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Ma première année de BUT m&apos;a permis d&apos;acquérir de
                  solides bases en informatique, couvrant des domaines tels que
                  l&apos;algorithmie, la programmation, les bases de données, le
                  réseau et le développement web. D'autres matières annexes mais
                  tout aussi importantes comme les mathématiques, la gestion de
                  projet, l'économie et l'anglais technique ont également
                  enrichi mon parcours.
                </p>
              </div>
              <div className="relative pl-6 border-l border-border/30">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Lors de ma deuxième année de BUT, le parcours que j'ai suivi,
                  "Réalisation d&apos;Applications: Conception, Développement,
                  Validation", m&apos;a permis de me spécialiser dans le
                  développement logiciel. J&apos;ai approfondi mes compétences
                  en développement web et ainsi découvert React qui est devenu
                  mon framework de prédilection.
                </p>
              </div>
              <div className="relative pl-6 border-l border-border/30">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Mon stage chez Viking Cruises à Bâle (Suisse) m&apos;a permis
                  de travailler dans un environnement international et agile, où
                  j&apos;ai développé une application interne avec les outils
                  Microsoft (PowerApps, Power BI, Azure DevOps). Cette
                  expérience très enrichissante m'a permis de développer mes
                  compétences en gestion de projet et l'importance de la
                  compréhension des besoins utilisateurs.
                </p>
              </div>
            </div>

            {/* Formation Timeline */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px bg-primary/40" />
                <h3 className="text-lg font-semibold text-foreground tracking-wide">
                  Formation
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
          <div className="grid sm:grid-cols-2 gap-6 mt-16">
            <InfoCard
              icon={<MapPin className="h-4 w-4" />}
              title="Localisation"
              description="Mulhouse/Strasbourg, France. Disponible pour un stage à partir de janvier 2026"
            />
            <InfoCard
              icon={<Target className="h-4 w-4" />}
              title="Objectif professionnel"
              description="Devenir développeur Full Stack et contribuer à des projets innovants et utiles dans un environnement international"
            />
          </div>

          {/* Centres d'intérêt */}
          <div className="mt-20">
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/40" />
              <h3 className="text-sm font-medium text-foreground tracking-wider uppercase">
                Centres d&apos;intérêt
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
                  Sport
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Basket-ball et volley-ball à l&apos;université. Ces sports
                  collectifs m&apos;apprennent le travail d&apos;équipe et la
                  persévérance.
                </p>
              </div>

              {/* Arts martiaux */}
              <div className="group text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 border border-primary/30 flex items-center justify-center rotate-45 group-hover:bg-primary/20 transition-colors">
                  <Swords className="h-5 w-5 text-primary -rotate-45" />
                </div>
                <h4 className="text-sm font-medium text-foreground mb-2">
                  Arts martiaux
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pratique du kung-fu en club depuis 8 ans. Discipline, maîtrise
                  de soi et respect des traditions.
                </p>
              </div>

              {/* Dessin */}
              <div className="group text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 border border-primary/30 flex items-center justify-center rotate-45 group-hover:bg-primary/20 transition-colors">
                  <Pencil className="h-5 w-5 text-primary -rotate-45" />
                </div>
                <h4 className="text-sm font-medium text-foreground mb-2">
                  Dessin
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Mon échappatoire créative. J&apos;explore différents styles et
                  techniques, ce qui nourrit ma sensibilité au design. Le style
                  manga étant mon style principal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
