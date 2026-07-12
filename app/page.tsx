"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, MouseEvent, RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";
import { ContactSection, SiteHeader } from "@/app/shared-ui";
import { conceptsPreviewImages } from "@/lib/concepts";
import type { ConceptImage } from "@/lib/concepts";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type ProjectItem = {
  title: string;
  displayTitle: string;
  year: string;
  role: string;
  tags: string[];
  challenge: string;
  cover: string;
  caseUrl?: string;
  isUpdating?: boolean;
};

type ExperienceItem = {
  company: string;
  role: string;
  years: string;
};

type ExpertiseItem = {
  title: string;
  description: string;
  key?: string;
};

type HomeMessages = {
  Home: {
    systemPairs: Array<{ from: string; to: string }>;
    projects: ProjectItem[];
    experienceItems: ExperienceItem[];
    expertiseItems: ExpertiseItem[];
  };
};

export default function Home() {
  const reduceMotion = useReducedMotion();
  const messages = useMessages() as unknown as HomeMessages;
  const home = messages.Home;
  const expertiseRef = useRef<HTMLElement | null>(null);
  const expertiseTrackRef = useRef<HTMLDivElement | null>(null);
  const heroDescriptionRef = useRef<HTMLParagraphElement | null>(null);
  const [expertiseTranslate, setExpertiseTranslate] = useState(0);
  const [expertiseHeight, setExpertiseHeight] = useState("360svh");
  const [descriptionFill, setDescriptionFill] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const section = expertiseRef.current;
      const track = expertiseTrackRef.current;
      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const isStacked = window.matchMedia("(max-width: 1120px)").matches;

      if (isStacked) {
        setExpertiseTranslate(0);
        setExpertiseHeight("auto");
        return;
      }

      const visibleWidth = track.parentElement?.clientWidth ?? section.clientWidth;
      const maxTranslate = Math.max(0, track.scrollWidth - visibleWidth);
      const nextHeight = Math.ceil(window.innerHeight + maxTranslate);
      const scrollable = Math.max(1, nextHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));

      setExpertiseHeight(`${nextHeight}px`);
      setExpertiseTranslate(Number.isFinite(progress) ? progress * maxTranslate : 0);
    };

    updateProgress();
    const resizeObserver = new ResizeObserver(updateProgress);
    if (expertiseRef.current) resizeObserver.observe(expertiseRef.current);
    if (expertiseTrackRef.current) resizeObserver.observe(expertiseTrackRef.current);

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const updateDescriptionFill = () => {
      const element = heroDescriptionRef.current;
      if (!element) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDescriptionFill(1);
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight;
      const end = viewportHeight * 0.5;
      const progress = (start - rect.top) / Math.max(1, start - end);
      setDescriptionFill(Math.min(1, Math.max(0, progress)));
    };

    updateDescriptionFill();
    window.addEventListener("scroll", updateDescriptionFill, { passive: true });
    window.addEventListener("resize", updateDescriptionFill);

    return () => {
      window.removeEventListener("scroll", updateDescriptionFill);
      window.removeEventListener("resize", updateDescriptionFill);
    };
  }, []);

  return (
    <main>
      <SiteHeader />
      <HeroSection
        descriptionFill={descriptionFill}
        descriptionRef={heroDescriptionRef}
        reduceMotion={Boolean(reduceMotion)}
        systemPairs={home.systemPairs}
      />
      <WorkSection reduceMotion={Boolean(reduceMotion)} />
      <ConceptsSection reduceMotion={Boolean(reduceMotion)} />
      <ExperienceSection
        experience={home.experienceItems}
        reduceMotion={Boolean(reduceMotion)}
      />
      <ExpertiseSection
        expertise={home.expertiseItems}
        refElement={expertiseRef}
        trackRef={expertiseTrackRef}
        translate={expertiseTranslate}
        height={expertiseHeight}
        reduceMotion={Boolean(reduceMotion)}
      />
      <ContactSection reduceMotion={Boolean(reduceMotion)} />
    </main>
  );
}

function HeroSection({
  descriptionFill,
  descriptionRef,
  reduceMotion,
  systemPairs,
}: {
  descriptionFill: number;
  descriptionRef: RefObject<HTMLParagraphElement | null>;
  reduceMotion: boolean;
  systemPairs: Array<{ from: string; to: string }>;
}) {
  const t = useTranslations("Home.hero");
  const heroDescription = t("description");

  return (
    <section className="hero-section" id="top">
      <motion.div
        className="hero-statement section-shell"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1>
          <span>{t("headlineStart")}</span> {t("headlineMiddle")}
          <br />
          <span>{t("headlineSecondStart")}</span> {t("headlineEnd")}
        </h1>
      </motion.div>
      <div className="hero-detail section-shell">
        <div className="hero-meta" aria-label={t("locationAria")}>
          <span>{t("location")}</span>
          <span>{t("timezone")}</span>
        </div>
        <motion.div
          className="hero-detail-copy"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="hero-description"
            ref={descriptionRef}
            style={{ "--description-fill": descriptionFill } as CSSProperties}
          >
            {heroDescription.split("").map((character, index) => {
              const threshold = index / Math.max(1, heroDescription.length - 1);
              return (
                <span
                  className={descriptionFill >= threshold ? "is-filled" : undefined}
                  key={`${character}-${index}`}
                >
                  {character}
                </span>
              );
            })}
          </p>
          <div className="system-diagram" aria-label={t("diagramAria")}>
            {systemPairs.map((pair) => (
              <div className="system-pair" key={pair.from}>
                <span>{pair.from}</span>
                <span className="system-line" aria-hidden="true" />
                <span>{pair.to}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="hero-portrait"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/portrait/herman-portrait.png"
            alt={t("portraitAlt")}
            width={1028}
            height={1497}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

function ConceptsSection({ reduceMotion }: { reduceMotion: boolean }) {
  const t = useTranslations("Home.concepts");

  return (
    <section className="concepts-home-section" aria-labelledby="concepts-home-title">
      <article
        className="concepts-home-card concepts-clickable section-shell"
        onMouseMove={(event: MouseEvent<HTMLElement>) => {
          const rect = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
          event.currentTarget.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
        }}
      >
        <span className="project-hover-label concepts-hover-label" aria-hidden="true">
          {t("hoverLabel")}
        </span>
        <motion.div
          className="concepts-home-copy"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link className="concepts-copy-link" href="/concepts">
            <h2 id="concepts-home-title">{t("heading")}</h2>
            <p>{t("description")}</p>
          </Link>
        </motion.div>
        <motion.div
          className="concepts-home-visual"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link className="concepts-visual-link" href="/concepts" aria-label={t("openAria")}>
            {conceptsPreviewImages.map((image, index) => (
              <ConceptTile image={image} priority={false} key={`${image.alt}-${index}`} />
            ))}
          </Link>
        </motion.div>
      </article>
    </section>
  );
}

function ConceptTile({
  image,
  priority,
}: {
  image: ConceptImage;
  priority: boolean;
}) {
  if (!image.src) {
    return <div className={`concept-tile concept-tile-${image.aspect}`} aria-label={image.alt} />;
  }

  return (
    <div className={`concept-tile concept-tile-${image.aspect}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={900}
        sizes="(max-width: 768px) 44vw, 24vw"
        priority={priority}
      />
    </div>
  );
}

function WorkSection({ reduceMotion }: { reduceMotion: boolean }) {
  const t = useTranslations("Home.work");
  const messages = useMessages() as unknown as HomeMessages;
  const projects = messages.Home.projects;

  return (
    <section
      className="work-section"
      id="work"
      aria-label={t("aria")}
    >
      <div className="work-section-heading section-shell">
        <h2>{t("heading")}</h2>
      </div>
      <div className="work-snap">
        {projects.map((project) => {
          const projectUrl = "caseUrl" in project ? project.caseUrl : undefined;
          const projectContent = (
            <>
              <div className="project-heading">
                <h2>{project.displayTitle}</h2>
                <span>{project.year}</span>
              </div>
              <p className="project-role">{project.role}</p>
              <p className="project-challenge">{project.challenge}</p>
              <div className="tag-list" aria-label={`${project.title} ${t("tagsAriaSuffix")}`}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </>
          );

          return (
          <article
            className={`project-slide ${projectUrl ? "project-clickable" : ""}`}
            key={project.title}
            onMouseMove={(event: MouseEvent<HTMLElement>) => {
              const rect = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
              event.currentTarget.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
            }}
          >
            {projectUrl ? (
              <span className="project-hover-label project-slide-hover-label" aria-hidden="true">
                {t("hoverLabel")}
              </span>
            ) : null}
            <motion.div
              className="project-copy"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {projectUrl ? (
                <Link className="project-copy-link" href={projectUrl}>
                  {projectContent}
                </Link>
              ) : (
                projectContent
              )}
            </motion.div>
            <ProjectVisual project={project} reduceMotion={reduceMotion} />
          </article>
          );
        })}
      </div>
    </section>
  );
}

function ProjectVisual({
  project,
  reduceMotion,
}: {
  project: ProjectItem;
  reduceMotion: boolean;
}) {
  const t = useTranslations("Home.work");
  const hasUpdatingInfoLabel = Boolean(project.isUpdating);
  const visual = (
    <>
      {project.cover ? (
        <>
          <Image
            src={project.cover}
            alt={`${project.title} ${t("previewAltSuffix")}`}
            width={2160}
            height={1186}
            sizes="(max-width: 768px) 92vw, 48vw"
          />
          {hasUpdatingInfoLabel ? (
            <span className="project-status-label">{t("updatingLabel")}</span>
          ) : null}
        </>
      ) : (
        <div className="placeholder-frame">
          <span>{project.displayTitle}</span>
          <small>{t("visualComingSoon")}</small>
        </div>
      )}
    </>
  );
  const commonProps = {
    className: `project-visual ${project.cover ? "" : "project-placeholder"}`,
    onMouseMove: (event: MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
      event.currentTarget.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
    },
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  };

  if ("caseUrl" in project && project.caseUrl) {
    return (
      <motion.div {...commonProps}>
        <Link className="project-visual-link" href={project.caseUrl}>
          {visual}
        </Link>
      </motion.div>
    );
  }

  return <motion.div {...commonProps}>{visual}</motion.div>;
}

function ExperienceSection({
  experience,
  reduceMotion,
}: {
  experience: ExperienceItem[];
  reduceMotion: boolean;
}) {
  const t = useTranslations("Home.experience");

  return (
    <section className="experience-section section-shell" id="experience">
      <motion.div
        className="experience-intro"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2>
          {t("heading")} <span>{t("headingAccent")}</span>
        </h2>
      </motion.div>
      <div className="experience-list">
        {experience.map((item) => (
          <div className="experience-row" key={item.company}>
            <span>{item.company}</span>
            <span>{item.role}</span>
            <span>{item.years.replace("-", " -> ")}</span>
          </div>
        ))}
      </div>
      <a
        className="experience-download"
        href={t("cvHref")}
        target="_blank"
        rel="noreferrer"
      >
        {t("downloadCv")} <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

function ExpertiseSection({
  expertise,
  refElement,
  trackRef,
  translate,
  height,
  reduceMotion,
}: {
  expertise: ExpertiseItem[];
  refElement: React.RefObject<HTMLElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
  translate: number;
  height: string;
  reduceMotion: boolean;
}) {
  const t = useTranslations("Home.expertise");
  const desktopTranslate = reduceMotion ? 0 : -translate;
  const sectionStyle = {
    "--expertise-height": height,
  } as CSSProperties;

  return (
    <section className="expertise-section" ref={refElement} style={sectionStyle}>
      <div className="expertise-sticky section-shell">
        <div className="expertise-heading">
          <h2>{t("heading")}</h2>
          <span className="section-rule" aria-hidden="true" />
        </div>
        <div
          ref={trackRef}
          className="expertise-track"
          style={{ transform: `translate3d(${desktopTranslate}px, 0, 0)` }}
        >
          {expertise.map((item, index) => (
            <ExpertiseCard item={item} index={index} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({
  item,
  index,
}: {
  item: ExpertiseItem;
  index: number;
}) {
  const t = useTranslations("Home.expertise");
  const isGamification = item.key === "gamification";
  const content = (
    <>
      <span className="expertise-number">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        {isGamification ? (
          <Image
            className="expertise-card-icon"
            src="/images/invader.svg"
            alt=""
            width={128}
            height={128}
            aria-hidden="true"
          />
        ) : null}
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </>
  );

  if (isGamification) {
    return (
      <Link
        className="expertise-card expertise-card-link"
        href="/gamification"
        aria-label={t("gamificationAria")}
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="expertise-card">{content}</article>
  );
}
