import type { MetadataRoute } from "next";
import { getAbsoluteUrl, routes, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.seo.lastUpdated);

  return routes.map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: route.sitemap.changeFrequency,
    priority: route.sitemap.priority,
    alternates: {
      languages: {
        en: getAbsoluteUrl(route.path),
      },
    },
  }));
}
