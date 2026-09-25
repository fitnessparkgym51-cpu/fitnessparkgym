import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "7tmixrhl",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  deployment: {
    appId: "axo1a0ktb4cgnmxv3bqozt5o",
  },
});
