import { defineArrayMember, defineField, defineType } from "sanity";

const localizedString = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "internationalizedArrayString",
  });

const localizedText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "internationalizedArrayText",
  });

const image = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
  });

const cta = defineType({
  name: "cta",
  title: "Call to action",
  type: "object",
  fields: [
    localizedString("label", "Label"),
    defineField({ name: "href", title: "Link", type: "string" }),
  ],
});

const navLink = defineType({
  name: "navLink",
  title: "Navigation link",
  type: "object",
  fields: [
    localizedString("label", "Label"),
    defineField({ name: "href", title: "Link", type: "string" }),
    defineField({ name: "badge", title: "Badge", type: "string" }),
  ],
});

const socialLink = defineType({
  name: "socialLink",
  title: "Social link",
  type: "object",
  fields: [
    defineField({ name: "platform", title: "Platform", type: "string" }),
    localizedString("label", "Label"),
    defineField({ name: "url", title: "URL", type: "url" }),
  ],
});

const stat = defineType({
  name: "stat",
  title: "Statistic",
  type: "object",
  fields: [
    defineField({ name: "value", title: "Value", type: "string" }),
    localizedString("label", "Label"),
  ],
});

const feature = defineType({
  name: "feature",
  title: "Feature",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Dumbbell", value: "dumbbell" },
          { title: "Heart", value: "heart" },
          { title: "Users", value: "users" },
          { title: "Sparkles", value: "sparkles" },
          { title: "Shield", value: "shield" },
          { title: "Chart", value: "chart" },
        ],
      },
    }),
    localizedString("title", "Title"),
    localizedText("description", "Description"),
  ],
});

const membershipPlan = defineType({
  name: "membershipPlan",
  title: "Membership plan",
  type: "object",
  fields: [
    localizedString("name", "Name"),
    defineField({ name: "price", title: "Price", type: "number" }),
    defineField({ name: "period", title: "Period", type: "string" }),
    localizedText("description", "Description"),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "featured", title: "Most popular", type: "boolean" }),
    localizedString("ctaLabel", "Button label"),
    defineField({ name: "ctaHref", title: "Button link", type: "string" }),
  ],
});

const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery image",
  type: "object",
  fields: [
    image("image", "Image"),
    localizedString("alt", "Alt text"),
    defineField({ name: "caption", title: "Caption", type: "string" }),
  ],
});

const faqItem = defineType({
  name: "faqItem",
  title: "FAQ item",
  type: "object",
  fields: [
    localizedString("question", "Question"),
    localizedText("answer", "Answer"),
  ],
});

const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact information",
  type: "object",
  fields: [
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "phoneDisplay", title: "Phone display", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp number", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    localizedText("address", "Address"),
    localizedText("hours", "Opening hours"),
    defineField({ name: "mapUrl", title: "Map URL", type: "url" }),
  ],
});

const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    localizedString("title", "Meta title"),
    localizedText("description", "Meta description"),
    image("shareImage", "Social share image"),
  ],
});

const announcement = defineType({
  name: "announcement",
  title: "Announcement bar",
  type: "object",
  fields: [
    localizedString("statusLabel", "Status label"),
    localizedString("hours", "Hours"),
    localizedString("address", "Address"),
    defineField({ name: "admissionFee", title: "Admission fee", type: "number" }),
    localizedString("membershipLabel", "Membership label"),
  ],
});

const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "object",
  fields: [
    localizedText("tagline", "Tagline"),
    localizedString("copyright", "Copyright"),
    defineField({
      name: "links",
      title: "Footer links",
      type: "array",
      of: [defineArrayMember({ type: "navLink" })],
    }),
  ],
});

const program = defineType({
  name: "program",
  title: "Training program",
  type: "document",
  fields: [
    localizedString("title", "Title"),
    defineField({ name: "slug", title: "Slug", type: "slug" }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Dumbbell", value: "dumbbell" },
          { title: "Heart", value: "heart" },
          { title: "Users", value: "users" },
          { title: "Sparkles", value: "sparkles" },
        ],
      },
    }),
    localizedText("description", "Description"),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    image("image", "Image"),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  preview: {
    select: { title: "title.0.value", subtitle: "description.0.value" },
  },
});

const trainer = defineType({
  name: "trainer",
  title: "Trainer",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    localizedString("role", "Role"),
    localizedText("bio", "Bio"),
    image("image", "Photo"),
    defineField({
      name: "specialties",
      title: "Specialties",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "role.0.value", media: "image" },
  },
});

const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    localizedText("quote", "Quote"),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "rating", title: "Rating", type: "number" }),
    image("avatar", "Avatar"),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});

const bmi = defineType({
  name: "bmi",
  title: "BMI calculator",
  type: "object",
  fields: [
    localizedString("eyebrow", "Eyebrow"),
    localizedString("title", "Title"),
    localizedText("description", "Description"),
    localizedString("metricLabel", "Metric units label"),
    localizedString("privacyLabel", "Privacy label"),
    localizedString("maleLabel", "Male label"),
    localizedString("femaleLabel", "Female label"),
    localizedString("heightLabel", "Height label"),
    localizedString("weightLabel", "Weight label"),
    localizedString("estimateLabel", "Estimate label"),
    localizedString("underweightLabel", "Underweight label"),
    localizedString("healthyLabel", "Healthy label"),
    localizedString("overweightLabel", "Overweight label"),
    localizedString("obeseLabel", "Obese label"),
    localizedText("underweightDiet", "Underweight guidance"),
    localizedText("healthyDiet", "Healthy guidance"),
    localizedText("overweightDiet", "Overweight guidance"),
    localizedText("coachNote", "Coach note"),
  ],
});

const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        localizedString("eyebrow", "Eyebrow"),
        localizedString("title", "Title"),
        localizedString("accent", "Accent title"),
        localizedText("description", "Description"),
        defineField({ name: "primaryCta", title: "Primary CTA", type: "cta" }),
        defineField({ name: "secondaryCta", title: "Secondary CTA", type: "cta" }),
        image("backgroundImage", "Background image"),
      ],
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [defineArrayMember({ type: "stat" })],
    }),
    defineField({
      name: "about",
      title: "About",
      type: "object",
      fields: [
        localizedString("eyebrow", "Eyebrow"),
        localizedString("title", "Title"),
        localizedText("description", "Description"),
        image("image", "Image"),
        localizedString("badge", "Image badge"),
        localizedText("badgeCaption", "Image badge caption"),
        defineField({
          name: "highlights",
          title: "Highlights",
          type: "array",
          of: [defineArrayMember({ type: "feature" })],
        }),
      ],
    }),
    defineField({ name: "bmi", title: "BMI calculator", type: "bmi" }),
    defineField({
      name: "features",
      title: "Why choose us",
      type: "object",
      fields: [
        localizedString("eyebrow", "Eyebrow"),
        localizedString("title", "Title"),
        localizedText("description", "Description"),
        defineField({
          name: "items",
          title: "Items",
          type: "array",
          of: [defineArrayMember({ type: "feature" })],
        }),
      ],
    }),
    defineField({
      name: "programs",
      title: "Training programs",
      type: "object",
      fields: [
        localizedString("eyebrow", "Eyebrow"),
        localizedString("title", "Title"),
        localizedText("description", "Description"),
        defineField({
          name: "items",
          title: "Programs",
          type: "array",
          of: [defineArrayMember({ type: "reference", to: [{ type: "program" }] })],
        }),
      ],
    }),
    defineField({
      name: "memberships",
      title: "Memberships",
      type: "object",
      fields: [
        localizedString("eyebrow", "Eyebrow"),
        localizedString("title", "Title"),
        localizedText("description", "Description"),
        defineField({
          name: "plans",
          title: "Plans",
          type: "array",
          of: [defineArrayMember({ type: "membershipPlan" })],
        }),
      ],
    }),
    defineField({
      name: "trainers",
      title: "Trainers",
      type: "object",
      fields: [
        localizedString("eyebrow", "Eyebrow"),
        localizedString("title", "Title"),
        localizedText("description", "Description"),
        defineField({
          name: "items",
          title: "Trainers",
          type: "array",
          of: [defineArrayMember({ type: "reference", to: [{ type: "trainer" }] })],
        }),
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "object",
      fields: [
        localizedString("eyebrow", "Eyebrow"),
        localizedString("title", "Title"),
        defineField({
          name: "items",
          title: "Testimonials",
          type: "array",
          of: [defineArrayMember({ type: "reference", to: [{ type: "testimonial" }] })],
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "object",
      fields: [
        localizedString("eyebrow", "Eyebrow"),
        localizedString("title", "Title"),
        defineField({
          name: "images",
          title: "Images",
          type: "array",
          of: [defineArrayMember({ type: "galleryImage" })],
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        localizedString("eyebrow", "Eyebrow"),
        localizedString("title", "Title"),
        localizedText("description", "Description"),
        defineField({ name: "contact", title: "Contact details", type: "contactInfo" }),
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "object",
      fields: [
        localizedString("eyebrow", "Eyebrow"),
        localizedString("title", "Title"),
        defineField({
          name: "items",
          title: "Questions",
          type: "array",
          of: [defineArrayMember({ type: "faqItem" })],
        }),
      ],
    }),
    defineField({
      name: "bottomCta",
      title: "Bottom CTA",
      type: "object",
      fields: [
        localizedString("title", "Title"),
        localizedText("description", "Description"),
        defineField({ name: "primaryCta", title: "Primary CTA", type: "cta" }),
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
});

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    localizedString("siteName", "Site name"),
    localizedString("location", "Header location"),
    localizedString("established", "Established label"),
    image("logo", "Logo"),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [defineArrayMember({ type: "navLink" })],
    }),
    defineField({ name: "joinCta", title: "Join button", type: "cta" }),
    defineField({ name: "announcement", title: "Announcement bar", type: "announcement" }),
    defineField({ name: "contact", title: "Contact information", type: "contactInfo" }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [defineArrayMember({ type: "socialLink" })],
    }),
    defineField({ name: "footer", title: "Footer", type: "footer" }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
});

export const schemaTypes = [
  cta,
  navLink,
  socialLink,
  stat,
  feature,
  membershipPlan,
  galleryImage,
  faqItem,
  contactInfo,
  seo,
  announcement,
  footer,
  program,
  trainer,
  testimonial,
  bmi,
  homepage,
  siteSettings,
];
