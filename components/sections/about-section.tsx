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
    <div className="relative flex gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[17px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-border/30" />
      )}

      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
          <GraduationCap className="h-4 w-4 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="pb-8 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Calendar className="h-3.5 w-3.5 text-primary" />
          <span className="text-sm font-medium text-primary">
            {formation.period}
          </span>
          {formation.highlight && (
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 text-xs"
            >
              <Award className="h-3 w-3 mr-1" />
              {formation.highlight}
            </Badge>
          )}
        </div>
        <h4 className="text-lg font-semibold text-foreground mb-1">
          {formation.title}
        </h4>
        <p className="text-sm text-muted-foreground mb-1">
          {formation.institution}, {formation.location}
        </p>
        <p className="text-sm text-muted-foreground/80">
          {formation.description}
        </p>
        {formation.secondLine && (
          <p className="text-sm text-muted-foreground/80 mt-1">
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
    <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">
              À propos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Qui suis-je ?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Étudiant passionné en troisième année de BUT Informatique à
                l&apos;IUT Robert Schuman (Illkirch-Graffenstaden), je suis à la
                recherche d&apos;un stage en développement informatique pour
                valider mon diplôme. Passionné par le développement web et
                d&apos;application, je souhaite consolider mes compétences et
                apprendre de nouvelles technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mon stage chez Viking Cruises à Bâle (Suisse) m&apos;a permis de
                travailler dans un environnement international et agile, où
                j&apos;ai développé une application interne avec les outils
                Microsoft (PowerApps, Power BI, Azure DevOps). Cette expérience
                a renforcé ma capacité d&apos;adaptation et mon autonomie.
              </p>
            </div>

            {/* Formation Timeline */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Parcours de formation
              </h3>
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
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            <InfoCard
              icon={<MapPin className="h-5 w-5" />}
              title="Localisation"
              description="Illkirch-Graffenstaden, France. Disponible pour un stage à partir de janvier 2026"
            />
            <InfoCard
              icon={<Target className="h-5 w-5" />}
              title="Objectif professionnel"
              description="Devenir développeur Full Stack et contribuer à des projets innovants et utiles dans un environnement international"
            />
          </div>

          {/* Centres d'intérêt */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
              Centres d&apos;intérêt
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Dumbbell className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-foreground">
                      Sport
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Je pratique le basket-ball et le volley-ball à
                    l&apos;université. Ces sports collectifs m&apos;apprennent
                    le travail d&apos;équipe, la communication et la
                    persévérance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Swords className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-foreground">
                      Arts martiaux
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Je pratique le kung-fu en club depuis plusieurs années. Cet
                    art martial m&apos;enseigne la discipline, la maîtrise de
                    soi et le respect des traditions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Pencil className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-foreground">
                      Dessin
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Le dessin est mon échappatoire créative. J&apos;aime
                    explorer différents styles et techniques pendant mon temps
                    libre, ce qui nourrit ma sensibilité au design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-16 bg-border/50" />
        </div>
      </div>
    </section>
  );
}
