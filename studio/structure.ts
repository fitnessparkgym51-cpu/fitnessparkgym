import type { StructureResolver } from "sanity/structure";

const singletonTypes = new Set(["homepage", "siteSettings"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Fitness Park Gym")
    .items([
      S.listItem()
        .title("Homepage")
        .id("homepage")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return Boolean(id && !singletonTypes.has(id));
      }),
    ]);
