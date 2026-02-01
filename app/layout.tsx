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
  title: "Portfolio | Daonguyen TRAN - Étudiant BUT Informatique",
  description:
    "Portfolio personnel de 3ème année de BUT Informatique. Découvrez mes projets, compétences et parcours professionnel.",
  keywords: [
    "portfolio",
    "développeur",
    "BUT Informatique",
    "étudiant",
    "web",
    "développement",
  ],
  authors: [{ name: "Daonguyen TRAN" }],
  openGraph: {
    title: "Portfolio | Daonguyen TRAN - Étudiant BUT Informatique",
    description:
      "Portfolio personnel de 3ème année de BUT Informatique. Découvrez mes projets, compétences et parcours professionnel.",
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
