export const SITE_URL = "https://fitnessparkgym.vercel.app";

export const GYM_NAME = "Fitness Park Gym";
export const GYM_ALT_NAME = "FITNESS PARK GYM";
export const GYM_TAGLINE = "Tongi, Gazipur | Best Gym in Bangladesh";

/** Primary <title> for the homepage. Brand first, then local intent. */
export const SITE_TITLE = "Fitness Park Gym - Best Gym in Tongi";

export const GYM_DESCRIPTION =
  "Fitness Park Gym is a gym and fitness center in Tongi, Gazipur — strength training, bodybuilding and cardio with experienced coaches. Open daily 7:00 AM – 11:00 PM.";

export const GYM_PHONE = "+8801922749473";
export const GYM_PHONE_DISPLAY = "+880 1922-749473";
export const GYM_STREET_ADDRESS = "Tongi - Kaliganj - Gorashal - Pachdona Rd";
export const GYM_LOCALITY = "Tongi";
export const GYM_REGION = "Gazipur";
export const GYM_POSTAL_CODE = "1710";
export const GYM_ADDRESS_COUNTRY = "BD";
export const GYM_GEO = { latitude: 23.8908, longitude: 90.4065 };
export const GYM_OPEN_TIME = "07:00";
export const GYM_CLOSE_TIME = "23:00";
export const GYM_MAP_URL =
  "https://maps.google.com/?q=Tongi+-+Kaliganj+-+Gorashal+-+Pachdona+Rd,+Tongi,+Bangladesh,+1710";

export const GYM_IMAGES = Array.from(
  { length: 18 },
  (_, i) => `/images/gym-${String(i + 1).padStart(2, "0")}.jpg`
);
export const OG_IMAGE = `${SITE_URL}/opengraph-image`;
export const LOGO_IMAGE = `${SITE_URL}/logo.png`;

export const GYM_KEYWORDS = [
  "fitness park gym",
  "gym in tongi",
  "gym in gazipur",
  "best gym in bangladesh",
  "bodybuilding gym tongi",
  "fitness center gazipur",
  "weight training gym gazipur",
  "gym near me tongi",
  "muscle building gym bangladesh",
  "cheap gym in gazipur",
];

export const GYM_DPA = `${SITE_URL}/#dpa`;

export function jsonLd<T>(data: T): string {
  return JSON.stringify(data);
}

type JsonLdObject = {
  "@context": "https://schema.org";
  "@type": string | string[];
  "@id"?: string;
  [key: string]: unknown;
};

export type SeoOverrides = {
  name?: string;
  description?: string;
  phone?: string;
  streetAddress?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  mapUrl?: string;
  logoUrl?: string;
  imageUrls?: string[];
  admissionFee?: number;
  membershipPlans?: Array<{ name: string; price?: number; period?: string }>;
  faq?: Array<{ question: string; answer: string }>;
  breadcrumb?: Array<{ name: string; path: string }>;
};

export function organizationSchema(overrides: SeoOverrides = {}): JsonLdObject {
  const name = overrides.name || GYM_NAME;
  const description = overrides.description || GYM_DESCRIPTION;
  const logo = overrides.logoUrl || LOGO_IMAGE;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name,
    legalName: name,
    alternateName: GYM_ALT_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: logo,
      contentUrl: logo,
      width: 512,
      height: 512,
      caption: name,
    },
    image: { "@id": `${SITE_URL}/#logo` },
    description,
    telephone: overrides.phone || GYM_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: overrides.streetAddress || GYM_STREET_ADDRESS,
      addressLocality: overrides.locality || GYM_LOCALITY,
      addressRegion: overrides.region || GYM_REGION,
      postalCode: overrides.postalCode || GYM_POSTAL_CODE,
      addressCountry: overrides.country || GYM_ADDRESS_COUNTRY,
    },
  };
}

export function webSiteSchema(overrides: SeoOverrides = {}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: overrides.name || GYM_NAME,
    alternateName: GYM_ALT_NAME,
    url: SITE_URL,
    description: overrides.description || GYM_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function gymSchema(overrides: SeoOverrides = {}): JsonLdObject {
  const name = overrides.name || GYM_NAME;
  const description = overrides.description || GYM_DESCRIPTION;
  const imageUrls = overrides.imageUrls?.length
    ? overrides.imageUrls
    : GYM_IMAGES.map((image) => `${SITE_URL}${image}`);
  const plans = overrides.membershipPlans?.length
    ? overrides.membershipPlans
    : [
        { name: "Starter", price: 1000, period: "admission" },
        { name: "Standard", price: 1000, period: "per month" },
        { name: "Premium", price: 2000, period: "per month" },
      ];

  return {
    "@context": "https://schema.org",
    "@type": [
      "HealthClub",
      "ExerciseGym",
      "SportsActivityLocation",
      "LocalBusiness",
    ],
    "@id": `${SITE_URL}/#gym`,
    name,
    alternateName: GYM_ALT_NAME,
    url: SITE_URL,
    branchOf: { "@id": `${SITE_URL}/#organization` },
    logo: overrides.logoUrl || LOGO_IMAGE,
    image: imageUrls,
    description,
    telephone: overrides.phone || GYM_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: overrides.streetAddress || GYM_STREET_ADDRESS,
      addressLocality: overrides.locality || GYM_LOCALITY,
      addressRegion: overrides.region || GYM_REGION,
      postalCode: overrides.postalCode || GYM_POSTAL_CODE,
      addressCountry: overrides.country || GYM_ADDRESS_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GYM_GEO.latitude,
      longitude: GYM_GEO.longitude,
    },
    hasMap: overrides.mapUrl || GYM_MAP_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: GYM_OPEN_TIME,
        closes: GYM_CLOSE_TIME,
      },
    ],
    priceRange: overrides.admissionFee ? `৳${overrides.admissionFee}` : "৳1000",
    currenciesAccepted: "BDT",
    paymentAccepted: "Cash",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Street Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Combined Men & Women Training Area",
        value: true,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fitness Park Gym Membership Plans",
      itemListElement: plans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: String(plan.price || 0),
        priceCurrency: "BDT",
        url: `${SITE_URL}/#membership`,
        itemOffered: {
          "@type": "Service",
          name: `${plan.name} Membership`,
        },
      })),
    },
  };
}

export function breadcrumbSchema(overrides: SeoOverrides = {}): JsonLdObject {
  const items = overrides.breadcrumb || [
    { name: "Home", path: "/" },
    { name: "Membership Plans", path: "/#membership" },
    { name: "Gym Facilities", path: "/#facilities" },
    { name: "Training Programs", path: "/#programs" },
    { name: "Master Coaches & Trainers", path: "/#trainers" },
    { name: "Contact & Location", path: "/#contact" },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

const FAQ_DATA: { question: string; answer: string }[] = [
  {
    question: "What is the gym admission fee at Fitness Park Gym Tongi?",
    answer:
      "The admission fee at FITNESS PARK GYM is ৳1,000 (one-time fee), which covers official membership registration and induction.",
  },
  {
    question: "What are the membership prices at Fitness Park Gym?",
    answer:
      "Fitness Park Gym membership packages start at ৳1,000 for admission, with monthly plans at ৳1,000 and ৳2,000.",
  },
  {
    question: "Is Fitness Park Gym a combined section for men and women?",
    answer:
      "Yes, Fitness Park Gym features a unified, combined training environment for both men and women, maintained with a safe, respectful atmosphere and full supervision from our professional coaching staff.",
  },
  {
    question: "Are there parking facilities at the gym?",
    answer:
      "Yes, dedicated bike and vehicle parking is accessible directly outside the gym facility.",
  },
  {
    question: "What are the gym opening hours in Tongi?",
    answer:
      "FITNESS PARK GYM is open daily from 7:00 AM until 11:00 PM, Monday through Sunday.",
  },
  {
    question: "How many trainers are available on-site at Fitness Park Gym?",
    answer:
      "We have 3 dedicated experienced coaches stationed on-site providing hands-on supervision throughout operational shifts, including our 15+ Years Experienced Head Coach for superior form correction and bodybuilding guidance.",
  },
  {
    question: "Where is Fitness Park Gym located?",
    answer:
      "We are located on Tongi - Kaliganj - Gorashal - Pachdona Rd, Tongi, Gazipur, Bangladesh, 1710. You can reach us quickly from any landmark in the Tongi region.",
  },
];

export function faqSchema(overrides: SeoOverrides = {}): JsonLdObject {
  const faq = overrides.faq?.length ? overrides.faq : FAQ_DATA;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}