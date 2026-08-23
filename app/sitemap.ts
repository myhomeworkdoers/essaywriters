import { MetadataRoute } from "next";
import { getAllKeywordSlugs } from "@/lib/data";

const BASE_URL = "https://essaywriters.homeworkdoers.help";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllKeywordSlugs();
  const currentDate = new Date();

  // Root Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // Dynamic Keyword Landing Pages
  slugs.forEach((slug) => {
    routes.push({
      url: `${BASE_URL}/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  return routes;
}
