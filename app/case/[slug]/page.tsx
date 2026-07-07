import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactSection, SiteHeader } from "@/app/shared-ui";
import type { CaseSectionKey, CaseStudy } from "@/lib/case-studies";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
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

const sectionMeta: Record<CaseSectionKey, { id: string; label: string }> = {
  challengeSolution: { id: "challenge-solution", label: "Challenge" },
  industryContext: { id: "industry-context", label: "Context" },
  shaping: { id: "shaping-product", label: "Strategy" },
  engagementLoop: { id: "engagement-loop", label: "Loop" },
  constraints: { id: "constraints", label: "Constraints" },
  scaling: { id: "scaling-product", label: "Scaling" },
  impact: { id: "impact", label: "Impact" },
  learnings: { id: "learnings", label: "Learnings" },
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
  const study = getCaseStudy(slug);

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
  const study = getCaseStudy(slug);

  if (!study) notFound();
  const sectionOrder = study.sectionOrder ?? defaultSectionOrder;
  const sectionDots = [
    { id: "case-hero", label: "Hero" },
    ...sectionOrder.map((section) => sectionMeta[section]),
  ];

  return (
    <main className="case-page">
      <SiteHeader variant="case" />
      <div className="case-orientation-disclaimer">
        <img src="/images/ui/updating-case-icon.png" alt="" aria-hidden="true" />
        <span>I recommend viewing case studies in landscape orientation.</span>
      </div>
      <CaseStickyDots sections={sectionDots} />
      <CaseHero study={study} />
      {sectionOrder.map((section) => renderCaseSection(section, study))}
      <MoreProjects currentCaseUrl={`/case/${study.slug}`} />
      <ContactSection reduceMotion />
    </main>
  );
}

function renderCaseSection(section: CaseSectionKey, study: CaseStudy) {
  switch (section) {
    case "challengeSolution":
      return <ChallengeSolution key={section} study={study} />;
    case "industryContext":
      return <IndustryContext key={section} study={study} />;
    case "shaping":
      return <ShapingProduct key={section} study={study} />;
    case "engagementLoop":
      return <EngagementLoop key={section} study={study} />;
    case "constraints":
      return <ConstraintsSection key={section} study={study} />;
    case "scaling":
      return <ScalingProduct key={section} study={study} />;
    case "impact":
      return <ImpactSection key={section} study={study} />;
    case "learnings":
      return <LearningsSection key={section} study={study} />;
  }
}
