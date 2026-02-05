"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { useTranslations } from "next-intl";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/daonguyen-tran",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daonguyen-tran-370848350/",
  },
];

export function ContactSection() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: leftRef, isInView: leftInView } = useInView();
  const { ref: rightRef, isInView: rightInView } = useInView();

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="h-4 w-4" />,
      label: t("email"),
      value: "daonguyentr.pro@gmail.com",
      href: "mailto:daonguyentr.pro@gmail.com",
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: t("location"),
      value: t("locationValue"),
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual logic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left side - Contact Info */}
            <div
              ref={leftRef}
              className={`space-y-8 ${leftInView ? "animate-in fade-in-up delay-200" : "opacity-0"}`}
            >
              <div className="relative pl-6 border-l border-primary/30">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("intro")}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center rotate-45">
                      <span className="-rotate-45 text-primary">
                        {info.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  {t("findMe")}
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="rounded-none border border-border/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div
              ref={rightRef}
              className={`relative ${rightInView ? "animate-in fade-in-up delay-300" : "opacity-0"}`}
            >
              {/* Corner decorations */}
              <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-primary/40" />
              <div className="absolute -top-4 -right-4 w-6 h-6 border-t-2 border-r-2 border-primary/40" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-b-2 border-l-2 border-primary/40" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-primary/40" />

              <form
                onSubmit={handleSubmit}
                className="bg-card/20 border border-border/30 p-6 sm:p-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder={t("form.namePlaceholder")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder={t("form.emailPlaceholder")}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    {t("form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder={t("form.subjectPlaceholder")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-background/50 border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder={t("form.messagePlaceholder")}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 tracking-wide transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("form.submitting")}
                    </>
                  ) : (
                    <>
                      {t("form.submit")}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {/* Success Message */}
                {submitted && (
                  <div className="text-center py-3 bg-primary/10 border border-primary/30">
                    <p className="text-sm text-primary">{t("form.success")}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
