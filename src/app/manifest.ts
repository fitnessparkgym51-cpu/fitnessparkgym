import type { MetadataRoute } from "next";
import { getCmsData } from "@/sanity/client";
import { localized } from "@/sanity/helpers";
import { GYM_DESCRIPTION, GYM_NAME } from "@/lib/seo";

export const dynamic = "force-static";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const { homepage, siteSettings } = await getCmsData();
  const seo = homepage.seo || siteSettings.seo || {};
  const name = localized(siteSettings.siteName, "en", GYM_NAME);
  const description = localized(seo.description, "en", GYM_DESCRIPTION);

  return {
    name: `${name} - Best Gym in Tongi`,
    short_name: name,
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
