import type { MetadataRoute } from "next";
import { GYM_IMAGES, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: GYM_IMAGES.map((img) => `${SITE_URL}${img}`),
    },
  ];
}