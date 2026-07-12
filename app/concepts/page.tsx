import type { Metadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";
import { ContactSection, SiteHeader } from "@/app/shared-ui";
import { MoreProjects } from "@/app/case/[slug]/case-study-components";
import { conceptsGalleryImages } from "@/lib/concepts";
import { createPageMetadata } from "@/lib/metadata";
import { ConceptsGallery } from "./concepts-gallery";

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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Concepts");

  return createPageMetadata({
    title: t("metadataTitle"),
    description: t("metadataDescription"),
    path: "/concepts",
  });
}

export default async function ConceptsPage() {
  const t = await getTranslations("Concepts");
  const caseT = await getTranslations("Case");
  const messages = (await getMessages()) as unknown as Messages;
  const labels = {
    challenge: caseT("labels.challenge"),
    solution: caseT("labels.solution"),
    constraint: caseT("labels.constraint"),
    designResponse: caseT("labels.designResponse"),
    moreProjects: caseT("labels.moreProjects"),
  };

  return (
    <main className="concepts-page">
      <SiteHeader variant="case" />
      <section className="concepts-hero section-shell">
        <h1>{t("heading")}</h1>
        <p>{t("description")}</p>
      </section>
      <ConceptsGallery
        images={conceptsGalleryImages}
        labels={{
          close: t("close"),
          gallery: t("galleryAria"),
          next: t("next"),
          previous: t("previous"),
          openImage: t("openImage"),
        }}
      />
      <MoreProjects
        currentCaseUrl="/concepts"
        labels={labels}
        projects={messages.Home.projects}
      />
      <ContactSection reduceMotion />
    </main>
  );
}
