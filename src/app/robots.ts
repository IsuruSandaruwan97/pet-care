import type { MetadataRoute } from "next";
import { getAbsoluteUrl, siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/media/"],
      disallow: ["/api/appointments"],
    },
    sitemap: getAbsoluteUrl("/sitemap.xml"),
    host: new URL(`${siteConfig.url}/`).host,
  };
}
