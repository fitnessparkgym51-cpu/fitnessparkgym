export const SITE_URL = "https://fitnessparkgym.vercel.app";

export const GYM_NAME = "Fitness Park Gym";
export const GYM_ALT_NAME = "FITNESS PARK GYM";
export const GYM_TAGLINE = "Tongi, Gazipur | Best Gym in Bangladesh";

export const GYM_DESCRIPTION =
  "Fitness Park Gym, Tongi, Gazipur is Bangladesh's trusted fitness center with champion trainers, modern gym equipment and bodybuilding programs from only ৳1,000/month. Open daily 7:00 AM – 11:00 PM.";

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
export const LOGO_IMAGE = `${SITE_URL}/images/gym-01.jpg`;

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

export function organizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: GYM_NAME,
    alternateName: GYM_ALT_NAME,
    url: SITE_URL,
    logo: LOGO_IMAGE,
    image: GYM_IMAGES.slice(0, 3).map((img) => `${SITE_URL}${img}`),
    description: GYM_DESCRIPTION,
    telephone: GYM_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: GYM_STREET_ADDRESS,
      addressLocality: GYM_LOCALITY,
      addressRegion: GYM_REGION,
      postalCode: GYM_POSTAL_CODE,
      addressCountry: GYM_ADDRESS_COUNTRY,
    },
  };
}

export function webSiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: GYM_NAME,
    url: SITE_URL,
    description: GYM_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function gymSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": [
      "HealthClub",
      "ExerciseGym",
      "SportsActivityLocation",
      "LocalBusiness",
    ],
    "@id": `${SITE_URL}/#gym`,
    name: GYM_NAME,
    alternateName: GYM_ALT_NAME,
    url: SITE_URL,
    logo: LOGO_IMAGE,
    image: GYM_IMAGES.map((img) => `${SITE_URL}${img}`),
    description: GYM_DESCRIPTION,
    telephone: GYM_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: GYM_STREET_ADDRESS,
      addressLocality: GYM_LOCALITY,
      addressRegion: GYM_REGION,
      postalCode: GYM_POSTAL_CODE,
      addressCountry: GYM_ADDRESS_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GYM_GEO.latitude,
      longitude: GYM_GEO.longitude,
    },
    hasMap: GYM_MAP_URL,
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
    priceRange: "৳1,000",
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
      itemListElement: [
        {
          "@type": "Offer",
          name: "Monthly Membership",
          price: "1000",
          priceCurrency: "BDT",
          url: `${SITE_URL}/#membership`,
          itemOffered: {
            "@type": "Service",
            name: "1 Month Gym Membership",
          },
        },
        {
          "@type": "Offer",
          name: "Quarterly Membership (3 Months)",
          price: "2500",
          priceCurrency: "BDT",
          url: `${SITE_URL}/#membership`,
          itemOffered: {
            "@type": "Service",
            name: "3 Month Gym Membership",
          },
        },
        {
          "@type": "Offer",
          name: "Half-Yearly Membership (6 Months)",
          price: "4500",
          priceCurrency: "BDT",
          url: `${SITE_URL}/#membership`,
          itemOffered: {
            "@type": "Service",
            name: "6 Month Gym Membership",
          },
        },
      ],
    },
  };
}

export function breadcrumbSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ["Home", "/"],
      ["Membership Plans", "/#membership"],
      ["Gym Facilities", "/#facilities"],
      ["Training Programs", "/#programs"],
      ["Master Coaches & Trainers", "/#trainers"],
      ["Contact & Location", "/#contact"],
    ].map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${SITE_URL}${path}`,
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
      "Fitness Park Gym membership packages are ৳1,000 per month, ৳2,500 for 3 months, and ৳4,500 for 6 months.",
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

export function faqSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_DATA.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}