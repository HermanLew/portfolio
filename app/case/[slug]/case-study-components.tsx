import Image from "next/image";
import type {
  CaseConstraint,
  CaseMetric,
  CaseSlide,
  CaseStudy,
} from "@/lib/case-studies";
import { CaseDotsNav } from "./case-dots-nav";
import { CaseHorizontalScroller } from "./case-horizontal-scroller";

type CaseLabels = {
  challenge: string;
  solution: string;
  constraint: string;
  designResponse: string;
  moreProjects: string;
};

type ProjectItem = {
  title: string;
  displayTitle: string;
  year: string;
  tags: string[];
  caseUrl?: string;
};

export function CaseStickyDots({ sections }: { sections: Array<{ id: string; label: string }> }) {
  return <CaseDotsNav sections={sections} />;
}

export function CaseHero({ study }: { study: CaseStudy }) {
  return (
    <section className="case-section case-hero section-shell" id="case-hero">
      <div className="case-hero-top">
        <div className="case-hero-main">
          <h1>{study.title}</h1>
          <p>{study.summary}</p>
          <div className="case-hero-tags">
            {study.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <dl className="case-info-list">
          {study.info.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    ↗ {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="case-cover">
        {study.cover ? (
          <Image
            src={study.cover}
            alt={`${study.title} cover`}
            width={2160}
            height={1186}
            priority
          />
        ) : (
          <VisualPlaceholder label={`${study.title} cover placeholder`} size="wide" />
        )}
      </div>
    </section>
  );
}

export function ChallengeSolution({
  study,
  labels,
}: {
  study: CaseStudy;
  labels: CaseLabels;
}) {
  return (
    <section className="case-section case-challenge-solution section-shell" id="challenge-solution">
      <div className="case-two-column">
        <ArticleBlock label={labels.challenge} text={study.challengeSolution.challenge} />
        <ArticleBlock label={labels.solution} text={study.challengeSolution.solution} />
      </div>
      <CaseVisual
        image={study.challengeSolution.image}
        label="Process image placeholder"
        className="case-wide-image"
        priority={false}
      />
    </section>
  );
}

export function IndustryContext({ study }: { study: CaseStudy }) {
  return (
    <section className="case-section case-industry section-shell" id="industry-context">
      <p className="case-label">{study.industryContext.label}</p>
      <h2>{study.industryContext.headline}</h2>
      <div className="case-industry-copy">
        <p>{study.industryContext.text}</p>
      </div>
      <CaseVisual
        image={study.industryContext.image}
        label={study.industryContext.visualLabel}
        className="case-wide-image"
        priority={false}
      />
    </section>
  );
}

export function ShapingProduct({ study }: { study: CaseStudy }) {
  const useStatementLayout = study.shaping.artifacts.length === 0;

  if (useStatementLayout) {
    return (
      <section className="case-section case-shaping case-shaping-statement section-shell" id="shaping-product">
        <p className="case-label">{study.shaping.label}</p>
        <h2>{study.shaping.feature.title}</h2>
        <p className="case-body-large">
          {[...study.shaping.paragraphs, study.shaping.feature.description].join(" ")}
        </p>
        <CaseVisual
          image={study.shaping.feature.image}
          label="Product strategy visual placeholder"
          className="case-wide-image"
          priority={false}
        />
      </section>
    );
  }

  return (
    <section className="case-section case-shaping section-shell" id="shaping-product">
      <p className="case-label">{study.shaping.label}</p>
      <h2>{study.shaping.headline}</h2>
      <div className="case-text-columns">
        {study.shaping.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="case-feature-row">
        <CaseVisual
          image={study.shaping.feature.image}
          video={study.shaping.feature.video}
          label="Product direction mockup"
          className="case-phone-image"
          priority={false}
        />
        <article>
          <h3>{study.shaping.feature.title}</h3>
          <p>{study.shaping.feature.description}</p>
        </article>
      </div>
    </section>
  );
}

export function EngagementLoop({ study }: { study: CaseStudy }) {
  return (
    <section className="case-section case-engagement" id="engagement-loop">
      <div className="section-shell case-engagement-intro">
        <p className="case-label">{study.engagementLoop.label}</p>
        <h2>{study.engagementLoop.headline}</h2>
        <p>{study.engagementLoop.text}</p>
      </div>
      {study.engagementLoop.display === "snap" ? (
        <VerticalSnapSlides slides={study.engagementLoop.slides} />
      ) : (
        <div className="section-shell">
          <CaseVisual
            image={study.engagementLoop.image}
            label={
              study.engagementLoop.visualLabel ??
              study.engagementLoop.loop.map((step) => step.label).join(" -> ")
            }
            className="case-wide-image case-loop-image"
            priority={false}
          />
        </div>
      )}
    </section>
  );
}

export function ConstraintsSection({
  study,
  labels,
}: {
  study: CaseStudy;
  labels: CaseLabels;
}) {
  return (
    <section className="case-section case-constraints section-shell" id="constraints">
      <p className="case-label">{study.constraints.label}</p>
      <h2>{study.constraints.headline}</h2>
      <div className="case-constraints-body">
        <div className="case-rich-text">
          {study.constraints.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ConstraintTable rows={study.constraints.table} labels={labels} />
      </div>
      <CaseVisual
        image={study.constraints.image}
        label="Constraints visual placeholder"
        className="case-wide-image case-constraints-image"
        priority={false}
      />
    </section>
  );
}

export function ScalingProduct({ study }: { study: CaseStudy }) {
  return (
    <section className="case-section case-scaling section-shell" id="scaling-product">
      <p className="case-label">{study.scaling.label}</p>
      <h2>{study.scaling.headline}</h2>
      <p className="case-body-large">{study.scaling.text}</p>
      {study.scaling.image ? (
        <CaseVisual
          image={study.scaling.image}
          label={study.scaling.visualLabel ?? "Scaling visual placeholder"}
          className="case-wide-image case-scaling-cover"
          priority={false}
        />
      ) : null}
      <CaseHorizontalScroller slides={study.scaling.slides} />
    </section>
  );
}

export function ImpactSection({ study }: { study: CaseStudy }) {
  return (
    <section className="case-section case-impact section-shell" id="impact">
      <p className="case-label">{study.impact.label}</p>
      <div className="case-metric-grid">
        {study.impact.metrics.map((metric) => (
          <MetricCard metric={metric} key={metric.label} />
        ))}
      </div>
      <ul className="case-impact-list">
        {study.impact.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
}

export function LearningsSection({ study }: { study: CaseStudy }) {
  return (
    <section className="case-section case-learnings section-shell" id="learnings">
      <div className="case-learnings-text">
        {study.learnings.bullets.map((bullet) => (
          <p key={bullet}>{bullet}</p>
        ))}
      </div>
    </section>
  );
}

function getProjectHref(project: ProjectItem) {
  if ("caseUrl" in project && project.caseUrl) return project.caseUrl;

  const slug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `/case/${slug}`;
}

export function MoreProjects({
  currentCaseUrl,
  labels,
  projects,
}: {
  currentCaseUrl: string;
  labels: CaseLabels;
  projects: ProjectItem[];
}) {
  const relatedProjects = projects
    .filter((project) => getProjectHref(project) !== currentCaseUrl)
    .slice(0, 4);

  return (
    <section className="case-section more-projects section-shell" aria-labelledby="more-projects-title">
      <h2 id="more-projects-title">{labels.moreProjects}</h2>
      <div className="more-projects-grid">
        {relatedProjects.map((project) => (
          <a
            className="more-project-card"
            href={getProjectHref(project)}
            key={`${project.title}-${project.year}`}
          >
            <div className="more-project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span aria-hidden="true" />
            </div>
            <div className="more-project-title-row">
              <h3>{project.displayTitle}</h3>
              <time>{project.year}</time>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ArticleBlock({ label, text }: { label: string; text: string }) {
  return (
    <article className="case-article-block">
      <h2>{label}</h2>
      <p>{text}</p>
    </article>
  );
}

function VerticalSnapSlides({ slides }: { slides: CaseSlide[] }) {
  return (
    <div className="case-vertical-slides">
      {slides.map((slide, index) => (
        <article className="case-vertical-slide section-shell" key={slide.title}>
          <div className="case-slide-visual">
            {slide.video ? (
              <video
                className="case-slide-image"
                src={slide.video}
                aria-label={slide.visualLabel}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : slide.image ? (
              <Image
                src={slide.image}
                alt={slide.visualLabel}
                width={1180}
                height={1664}
                className="case-slide-image"
              />
            ) : (
              <VisualPlaceholder label={slide.visualLabel} size="phone" />
            )}
          </div>
          <div>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ConstraintTable({
  rows,
  labels,
}: {
  rows: CaseConstraint[];
  labels: CaseLabels;
}) {
  return (
    <div className="case-table" role="table">
      <div className="case-table-row case-table-head" role="row">
        <span role="columnheader">{labels.constraint}</span>
        <span role="columnheader">{labels.designResponse}</span>
      </div>
      {rows.map((row) => (
        <div className="case-table-row" role="row" key={row.constraint}>
          <span role="cell">{row.constraint}</span>
          <span role="cell">{row.response}</span>
        </div>
      ))}
    </div>
  );
}

function MetricCard({ metric }: { metric: CaseMetric }) {
  return (
    <article className="case-metric-card">
      <strong>{metric.value}</strong>
      <span>{metric.label}</span>
    </article>
  );
}

function CaseVisual({
  image,
  video,
  label,
  className,
  priority,
}: {
  image?: string;
  video?: string;
  label: string;
  className?: string;
  priority: boolean;
}) {
  if (!image && !video) return <VisualPlaceholder label={label} size="wide" />;

  return (
    <div className={`case-image-frame ${className ?? ""}`}>
      {video ? (
        <video
          src={video}
          aria-label={label}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : image ? (
        <Image src={image} alt={label} width={2048} height={868} priority={priority} />
      ) : (
        <VisualPlaceholder label={label} size="wide" />
      )}
    </div>
  );
}

function VisualPlaceholder({
  label,
  size = "default",
}: {
  label: string;
  size?: "default" | "wide" | "phone";
}) {
  return (
    <div className={`case-visual-placeholder case-visual-${size}`}>
      <span>{label}</span>
    </div>
  );
}
