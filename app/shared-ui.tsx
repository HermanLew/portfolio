"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function SiteHeader({ variant = "default" }: { variant?: "default" | "case" }) {
  const isCase = variant === "case";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const t = useTranslations("Navigation");

  useEffect(() => {
    if (isCase) return;

    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      setScrollProgress(Math.min(1, Math.max(0, nextProgress)));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [isCase]);

  return (
    <header
      className={`site-header${isCase ? " site-header-case" : ""}`}
      style={{ "--scroll-progress": scrollProgress } as CSSProperties}
    >
      <a
        className="brand-link"
        href={isCase ? "/#work" : "/"}
        aria-label={isCase ? t("backAria") : t("homeAria")}
      >
        {isCase ? t("back") : t("brand")}
      </a>
      <span className="nav-rule" aria-hidden="true" />
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
        aria-controls="site-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav
        className={`site-nav${isMenuOpen ? " is-open" : ""}`}
        id="site-navigation"
        aria-label={t("primaryAria")}
      >
        {isCase ? (
          <>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              {t("contact")}
            </a>
            <LanguageSwitcher onSwitch={() => setIsMenuOpen(false)} />
          </>
        ) : (
          <>
            <a href="/#work" onClick={() => setIsMenuOpen(false)}>
              {t("work")}
            </a>
            <a href="/#experience" onClick={() => setIsMenuOpen(false)}>
              {t("about")}
            </a>
            <a href="/#contact" onClick={() => setIsMenuOpen(false)}>
              {t("contact")}
            </a>
            <LanguageSwitcher onSwitch={() => setIsMenuOpen(false)} />
          </>
        )}
      </nav>
    </header>
  );
}

function LanguageSwitcher({ onSwitch }: { onSwitch: () => void }) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Navigation");
  const languages = [
    { locale: "en", label: "EN" },
    { locale: "ru", label: "RU" },
  ];

  const switchLocale = (nextLocale: string) => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    onSwitch();
    router.refresh();
  };

  return (
    <div className="language-switcher" aria-label={t("languageSwitcherAria")}>
      {languages.map((language, index) => {
        const isActive = locale === language.locale;

        return (
          <span className="language-option" key={language.locale}>
            <button
              type="button"
              aria-current={isActive ? "true" : undefined}
              disabled={isActive}
              onClick={() => switchLocale(language.locale)}
            >
              {language.label}
            </button>
            {index < languages.length - 1 ? <span aria-hidden="true">/</span> : null}
          </span>
        );
      })}
    </div>
  );
}

export function ContactSection({ reduceMotion = false }: { reduceMotion?: boolean }) {
  const t = useTranslations("Contact");

  return (
    <section className="contact-section section-shell" id="contact">
      <motion.div
        className="contact-copy"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2>
          <span>{t("headingLead")}</span> {t("headingRest")}
        </h2>
        <p>
          {t("bodyLine1")}
          <br />
          {t("bodyLine2")}
        </p>
      </motion.div>
      <div className="contact-links" aria-label={t("linksAria")}>
        <a href="https://t.me/hlsimpo" target="_blank" rel="noreferrer">
          {t("telegram")}
        </a>
        <a href="mailto:hlsimpo@gmail.com">{t("email")}</a>
        <a
          href="https://www.linkedin.com/in/hlevandovskiy/"
          target="_blank"
          rel="noreferrer"
        >
          {t("linkedin")}
        </a>
      </div>
      <p className="site-credit">{t("credit")}</p>
    </section>
  );
}
