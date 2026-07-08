import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { ContactSection, SiteHeader } from "@/app/shared-ui";
import type { CaseSectionKey, CaseStudy } from "@/lib/case-studies";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { localizeCaseStudy } from "@/lib/case-study-localization";
import { createPageMetadata } from "@/lib/metadata";
import {
  CaseHero,
  CaseStickyDots,
  ChallengeSolution,
  ConstraintsSection,
  EngagementLoop,
  ImpactSection,
  IndustryContext,
  LearningsSection,
  MoreProjects,
  ScalingProduct,
  ShapingProduct,
} from "./case-study-components";

type ProjectItem = {
  title: string;
  displayTitle: string;
  year: string;
  tags: string[];
  caseUrl?: string;
};
type Messages = {
  Home: {
    projects: ProjectItem[];
  };
};

const defaultSectionOrder: CaseSectionKey[] = [
  "challengeSolution",
  "industryContext",
  "shaping",
  "engagementLoop",
  "constraints",
  "scaling",
  "impact",
  "learnings",
];

const sectionMeta: Record<CaseSectionKey, { id: string; labelKey: string }> = {
  challengeSolution: { id: "challenge-solution", labelKey: "challenge" },
  industryContext: { id: "industry-context", labelKey: "context" },
  shaping: { id: "shaping-product", labelKey: "strategy" },
  engagementLoop: { id: "engagement-loop", labelKey: "loop" },
  constraints: { id: "constraints", labelKey: "constraints" },
  scaling: { id: "scaling-product", labelKey: "scaling" },
  impact: { id: "impact", labelKey: "impact" },
  learnings: { id: "learnings", labelKey: "learnings" },
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const baseStudy = getCaseStudy(slug);
  const study = baseStudy ? localizeCaseStudy(baseStudy, locale) : undefined;

  if (!study) {
    return createPageMetadata({
      title: "Case study not found - Herman Lewandowsky",
      description: "This case study could not be found.",
      path: `/case/${slug}`,
    });
  }

  return createPageMetadata({
    title: `${study.title} - Case Study | Herman Lewandowsky`,
    description: study.summary,
    path: `/case/${study.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations("Case");
  const messages = (await getMessages()) as unknown as Messages;
  const baseStudy = getCaseStudy(slug);
  const study = baseStudy ? localizeCaseStudy(baseStudy, locale) : undefined;

  if (!study) notFound();
  const sectionOrder = study.sectionOrder ?? defaultSectionOrder;
  const sectionDots = [
    { id: "case-hero", label: t("sections.hero") },
    ...sectionOrder.map((section) => {
      const meta = sectionMeta[section];
      return { id: meta.id, label: t(`sections.${meta.labelKey}`) };
    }),
  ];
  const labels = {
    challenge: t("labels.challenge"),
    solution: t("labels.solution"),
    constraint: t("labels.constraint"),
    designResponse: t("labels.designResponse"),
    moreProjects: t("labels.moreProjects"),
  };

  return (
    <main className="case-page">
      <SiteHeader variant="case" />
      <div className="case-orientation-disclaimer">
        <img src="/images/ui/updating-case-icon.png" alt="" aria-hidden="true" />
        <span>{t("orientation")}</span>
      </div>
      <CaseStickyDots sections={sectionDots} />
      <CaseHero study={study} />
      {sectionOrder.map((section) => renderCaseSection(section, study, labels))}
      <MoreProjects
        currentCaseUrl={`/case/${study.slug}`}
        labels={labels}
        projects={messages.Home.projects}
      />
      <ContactSection reduceMotion />
    </main>
  );
}

function renderCaseSection(
  section: CaseSectionKey,
  study: CaseStudy,
  labels: {
    challenge: string;
    solution: string;
    constraint: string;
    designResponse: string;
    moreProjects: string;
  },
) {
  switch (section) {
    case "challengeSolution":
      return <ChallengeSolution key={section} study={study} labels={labels} />;
    case "industryContext":
      return <IndustryContext key={section} study={study} />;
    case "shaping":
      return <ShapingProduct key={section} study={study} />;
    case "engagementLoop":
      return <EngagementLoop key={section} study={study} />;
    case "constraints":
      return <ConstraintsSection key={section} study={study} labels={labels} />;
    case "scaling":
      return <ScalingProduct key={section} study={study} />;
    case "impact":
      return <ImpactSection key={section} study={study} />;
    case "learnings":
      return <LearningsSection key={section} study={study} />;
  }
}
