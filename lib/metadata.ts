import type { Metadata } from "next";

export const SITE_NAME = "Herman Lewandowsky";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://hermanlewdesign.com"
).replace(/\/$/, "");

export const DEFAULT_TITLE = "Herman Lewandowsky - Product Design Lead";
export const DEFAULT_DESCRIPTION =
  "Portfolio of Herman Lewandowsky, a Product Designer focused on product strategy, systems thinking, engagement mechanics, and scalable digital products.";

const OG_IMAGE_PATH = "/opengraph-image.jpg";

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createPageMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
}: PageMetadataInput = {}): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: canonicalPath,
    },
    icons: {
      icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
      apple: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: "Herman Lewandowsky portfolio",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
