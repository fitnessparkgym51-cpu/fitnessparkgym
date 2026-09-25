import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { structure } from "./structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "fitness-park-gym",
  title: "Fitness Park Gym",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "7tmixrhl",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [
    structureTool({ structure }),
    visionTool(),
    internationalizedArray({
      languages: [
        { id: "en", title: "English" },
        { id: "bn", title: "Bangla" },
      ],
      defaultLanguages: ["en", "bn"],
      fieldTypes: ["string", "text"],
      languageDisplay: "titleAndCode",
      restoreOrder: false,
    }),
  ],
  schema: { types: schemaTypes },
});
