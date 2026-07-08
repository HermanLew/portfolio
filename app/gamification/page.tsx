import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactSection, SiteHeader } from "@/app/shared-ui";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Game");

  return createPageMetadata({
    title: t("metadataTitle"),
    description: t("metadataDescription"),
    path: "/gamification",
  });
}

export default async function GamificationPage() {
  const t = await getTranslations("Game");

  return (
    <main className="game-page">
      <SiteHeader />
      <section className="game-hero section-shell" aria-label={t("aria")}>
        <div className="game-frame game-frame-desktop">
          <iframe
            src="https://funhtml5games.com?embed=spaceinvaders"
            title={t("desktopTitle")}
            frameBorder="0"
            scrolling="no"
          />
        </div>
        <div className="game-frame game-frame-mobile">
          <iframe
            src="https://funhtml5games.com?embed=sasquash"
            title={t("mobileTitle")}
            frameBorder="0"
            scrolling="no"
          />
        </div>
        <p>{t("instructions")}</p>
      </section>
      <ContactSection />
    </main>
  );
}
