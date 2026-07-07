import type { Metadata } from "next";
import { ContactSection, SiteHeader } from "@/app/shared-ui";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Gamification - Herman Lewandowsky",
  description:
    "A small Space Invaders interaction inside Herman Lewandowsky's product design portfolio.",
  path: "/gamification",
});

export default function GamificationPage() {
  return (
    <main className="game-page">
      <SiteHeader />
      <section className="game-hero section-shell" aria-label="Space Invaders game">
        <div className="game-frame game-frame-desktop">
          <iframe
            src="https://funhtml5games.com?embed=spaceinvaders"
            title="Space Invaders"
            frameBorder="0"
            scrolling="no"
          />
        </div>
        <div className="game-frame game-frame-mobile">
          <iframe
            src="https://funhtml5games.com?embed=sasquash"
            title="Sasquash"
            frameBorder="0"
            scrolling="no"
          />
        </div>
        <p>ARROWS - move, SPACE - fire. Have fun!</p>
      </section>
      <ContactSection />
    </main>
  );
}
