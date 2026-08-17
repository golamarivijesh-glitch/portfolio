import type { MetadataRoute } from "next";
import { profile } from "@/lib/content";

// Single-page site — the one route plus the résumé, which is worth indexing
// separately since people search for it by name.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${profile.siteUrl}/resume.pdf`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
