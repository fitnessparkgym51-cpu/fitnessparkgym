import type { MetadataRoute } from "next";
import { getCmsData } from "@/sanity/client";
import { GYM_IMAGES, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

function absoluteImageUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { homepage } = await getCmsData();
  const images = (homepage.gallery?.images || [])
    .map((item) => item.image?.asset?.url || item.image?.url)
    .filter((url): url is string => Boolean(url))
    .map(absoluteImageUrl);

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: images.length ? images : GYM_IMAGES.map((image) => `${SITE_URL}${image}`),
    },
  ];
}
