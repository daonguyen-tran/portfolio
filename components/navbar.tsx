"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, FolderGit2, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useLocale } from "@/contexts/locale-provider";
import { locales, localeLabels, type Locale } from "@/i18n/config";

interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface LanguageSwitcherProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

function FrenchFlag() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="rounded-full"
    >
      <clipPath id="fr-clip">
        <circle cx="10" cy="10" r="10" />
      </clipPath>
      <g clipPath="url(#fr-clip)">
        <rect x="0" y="0" width="7" height="20" fill="#002395" />
        <rect x="7" y="0" width="6" height="20" fill="#FFFFFF" />
        <rect x="13" y="0" width="7" height="20" fill="#ED2939" />
      </g>
    </svg>
  );
}

function BritishFlag() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 60 60"
      className="rounded-full"
    >
      <clipPath id="gb-clip">
        <circle cx="30" cy="30" r="30" />
      </clipPath>
      <g clipPath="url(#gb-clip)">
        <rect width="60" height="60" fill="#012169" />
        <path d="M0,0 L60,60 M60,0 L0,60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M0,0 L60,60 M60,0 L0,60" stroke="#C8102E" strokeWidth="6" />
        <path d="M30,0 V60 M0,30 H60" stroke="#FFFFFF" strokeWidth="12" />
        <path d="M30,0 V60 M0,30 H60" stroke="#C8102E" strokeWidth="7" />
      </g>
    </svg>
  );
}

const flagComponents: Record<Locale, React.ReactNode> = {
  fr: <FrenchFlag />,
  en: <BritishFlag />,
};

function LanguageSwitcher({ locale, setLocale }: LanguageSwitcherProps) {
  const nextLocale = locales.find((l) => l !== locale) ?? locales[0];

  return (
    <button
      onClick={() => setLocale(nextLocale)}
      className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide cursor-pointer"
      aria-label={`Switch to ${localeLabels[nextLocale]}`}
    >
      {flagComponents[locale]}
      <span className="text-xs font-medium">{localeLabels[locale]}</span>
    </button>
  );
}

export function Navbar() {
  const t = useTranslations("navbar");
  const { locale, setLocale } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: t("home"), href: "#home", icon: <Home className="h-4 w-4" /> },
    { label: t("about"), href: "#about", icon: <User className="h-4 w-4" /> },
    {
      label: t("projects"),
      href: "#projects",
      icon: <FolderGit2 className="h-4 w-4" />,
    },
    {
      label: t("contact"),
      href: "#contact",
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/95 backdrop-blur-sm",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 border border-primary/60 flex items-center justify-center rotate-45 group-hover:border-primary transition-colors">
              <span className="text-primary text-sm font-bold -rotate-45">
                D
              </span>
            </div>
            <span className="text-foreground font-medium tracking-wide group-hover:text-primary transition-colors hidden sm:block">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                <button
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide cursor-pointer"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </button>
                {index < navLinks.length - 1 && (
                  <span className="h-4 w-px bg-border/50" />
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <span className="h-4 w-px bg-border/50 mx-1" />
            <LanguageSwitcher locale={locale} setLocale={setLocale} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher locale={locale} setLocale={setLocale} />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-border/30 mt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:text-primary hover:bg-secondary/30 transition-all duration-200 cursor-pointer"
                onClick={() => handleNavClick(link.href)}
              >
                <span className="w-1.5 h-1.5 bg-primary/40 rotate-45" />
                <span className="text-sm tracking-wide">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
