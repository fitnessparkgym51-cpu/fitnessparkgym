import { createClient } from "@sanity/client";
import { defaultCmsData } from "./defaults";
import { homepageQuery, siteSettingsQuery } from "./queries";
import type { CmsData, HomepageData, SiteSettingsData } from "./types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7tmixrhl";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-10-15",
  useCdn: true,
  perspective: "published",
});

export async function getCmsData(): Promise<CmsData> {
  try {
    const [homepage, siteSettings] = await Promise.all([
      sanityClient.fetch<HomepageData | null>(homepageQuery),
      sanityClient.fetch<SiteSettingsData | null>(siteSettingsQuery),
    ]);

    return {
      homepage: homepage || defaultCmsData.homepage,
      siteSettings: siteSettings || defaultCmsData.siteSettings,
    };
  } catch {
    return defaultCmsData;
  }
}
