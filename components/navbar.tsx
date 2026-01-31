"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, FolderGit2, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { label: "Accueil", href: "#home", icon: <Home className="h-4 w-4" /> },
  { label: "À propos", href: "#about", icon: <User className="h-4 w-4" /> },
  {
    label: "Projets",
    href: "#projects",
    icon: <FolderGit2 className="h-4 w-4" />,
  },
  { label: "Contact", href: "#contact", icon: <Mail className="h-4 w-4" /> },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          : "bg-transparent",
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
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
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
