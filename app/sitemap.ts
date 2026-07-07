import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/gamification`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}/case/${study.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
