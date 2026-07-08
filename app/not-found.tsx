import type { Metadata } from "next";
import { SiteHeader } from "@/app/shared-ui";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "404: Page not Found - Herman Lewandowsky",
  description: "The requested page could not be found.",
  path: "/404",
});

export default function NotFound() {
  const gifTiles = Array.from({ length: 8 }, (_, index) => index);

  return (
    <main className="not-found-page">
      <SiteHeader />
      <section className="not-found-content section-shell">
        <div className="not-found-gif" aria-hidden="true">
          <div className="not-found-gif-strip">
            {gifTiles.map((tile) => (
              <img
                key={tile}
                src="https://media.giphy.com/media/Lny6Rw04nsOOc/giphy.gif"
                width="480"
                height="360"
                alt=""
              />
            ))}
          </div>
        </div>
        <h1>404: Page not Found</h1>
        <div className="not-found-actions">
          <a href="/#contact">Contact me</a>
          <a href="/">Back to homepage</a>
        </div>
      </section>
    </main>
  );
}
