import type { MetadataRoute } from "next";
import { GYM_DESCRIPTION, GYM_NAME } from "@/lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${GYM_NAME} - Best Gym in Tongi, Gazipur`,
    short_name: GYM_NAME,
    description: GYM_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.jpg",
        sizes: "512x511",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}