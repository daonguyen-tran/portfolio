import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Étudiant BUT Informatique",
  description:
    "Portfolio personnel d'un étudiant en 3ème année de BUT Informatique. Découvrez mes projets, compétences et parcours professionnel.",
  keywords: [
    "portfolio",
    "développeur",
    "BUT Informatique",
    "étudiant",
    "web",
    "développement",
  ],
  authors: [{ name: "Votre Nom" }],
  openGraph: {
    title: "Portfolio | Étudiant BUT Informatique",
    description:
      "Portfolio personnel d'un étudiant en 3ème année de BUT Informatique.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
