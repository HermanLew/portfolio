import type { Metadata } from "next";
import { SiteHeader } from "@/app/shared-ui";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "404: Page not Found - Herman Lewandowsky",
  description: "The requested page could not be found.",
  path: "/404",
});

export default function NotFound() {
  return (
    <main className="not-found-page">
      <SiteHeader />
      <section className="not-found-content section-shell">
        <div className="not-found-gif" aria-hidden="true">
          <iframe
            src="https://giphy.com/embed/Lny6Rw04nsOOc"
            width="480"
            height="360"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="404 terminal animation"
          />
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
