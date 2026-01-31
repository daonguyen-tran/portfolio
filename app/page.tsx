import { Navbar } from "@/components/navbar";
import { HeroSection, AboutSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Conçu avec Next.js, Tailwind CSS et shadcn/ui
          </p>
        </div>
      </footer>
    </>
  );
}
