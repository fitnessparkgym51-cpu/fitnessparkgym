export type Language = "en" | "bn";

export type LocalizedValue = {
  _key?: string;
  _type?: string;
  language: string;
  value?: string;
};

export type ImageData = {
  asset?: {
    _id?: string;
    url?: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width?: number;
        height?: number;
        aspectRatio?: number;
      };
    };
  };
  url?: string;
};

export type NavItemData = {
  _key?: string;
  label?: LocalizedValue[];
  href?: string;
  badge?: string;
};

export type SocialLinkData = {
  _key?: string;
  platform?: string;
  label?: LocalizedValue[];
  url?: string;
};

export type CtaData = {
  label?: LocalizedValue[];
  href?: string;
};

export type ContactData = {
  phone?: string;
  phoneDisplay?: string;
  whatsapp?: string;
  email?: string;
  address?: LocalizedValue[];
  hours?: LocalizedValue[];
  mapUrl?: string;
};

export type SeoData = {
  title?: LocalizedValue[];
  description?: LocalizedValue[];
  shareImage?: ImageData;
};

export type SiteSettingsData = {
  _id?: string;
  siteName?: LocalizedValue[];
  location?: LocalizedValue[];
  established?: LocalizedValue[];
  logo?: ImageData;
  navigation?: NavItemData[];
  joinCta?: CtaData;
  announcement?: {
    statusLabel?: LocalizedValue[];
    hours?: LocalizedValue[];
    address?: LocalizedValue[];
    admissionFee?: number;
    membershipLabel?: LocalizedValue[];
  };
  contact?: ContactData;
  socialLinks?: SocialLinkData[];
  footer?: {
    tagline?: LocalizedValue[];
    copyright?: LocalizedValue[];
    links?: NavItemData[];
  };
  seo?: SeoData;
};

export type FeatureData = {
  _key?: string;
  icon?: string;
  title?: LocalizedValue[];
  description?: LocalizedValue[];
};

export type StatData = {
  _key?: string;
  value?: string;
  label?: LocalizedValue[];
};

export type ProgramData = {
  _id?: string;
  title?: LocalizedValue[];
  slug?: { current?: string };
  icon?: string;
  description?: LocalizedValue[];
  highlights?: string[];
  image?: ImageData;
  order?: number;
};

export type TrainerData = {
  _id?: string;
  name?: string;
  role?: LocalizedValue[];
  bio?: LocalizedValue[];
  image?: ImageData;
  specialties?: string[];
  order?: number;
};

export type TestimonialData = {
  _id?: string;
  quote?: LocalizedValue[];
  name?: string;
  role?: string;
  rating?: number;
  avatar?: ImageData;
  order?: number;
};

export type MembershipPlanData = {
  _key?: string;
  name?: LocalizedValue[];
  price?: number;
  period?: string;
  description?: LocalizedValue[];
  features?: string[];
  featured?: boolean;
  ctaLabel?: LocalizedValue[];
  ctaHref?: string;
};

export type GalleryImageData = {
  _key?: string;
  image?: ImageData;
  alt?: LocalizedValue[];
  caption?: string;
};

export type FaqItemData = {
  _key?: string;
  question?: LocalizedValue[];
  answer?: LocalizedValue[];
};

export type BmiData = {
  eyebrow?: LocalizedValue[];
  title?: LocalizedValue[];
  description?: LocalizedValue[];
  metricLabel?: LocalizedValue[];
  privacyLabel?: LocalizedValue[];
  maleLabel?: LocalizedValue[];
  femaleLabel?: LocalizedValue[];
  heightLabel?: LocalizedValue[];
  weightLabel?: LocalizedValue[];
  estimateLabel?: LocalizedValue[];
  underweightLabel?: LocalizedValue[];
  healthyLabel?: LocalizedValue[];
  overweightLabel?: LocalizedValue[];
  obeseLabel?: LocalizedValue[];
  underweightDiet?: LocalizedValue[];
  healthyDiet?: LocalizedValue[];
  overweightDiet?: LocalizedValue[];
  coachNote?: LocalizedValue[];
};

export type HomepageData = {
  _id?: string;
  hero?: {
    eyebrow?: LocalizedValue[];
    title?: LocalizedValue[];
    accent?: LocalizedValue[];
    description?: LocalizedValue[];
    primaryCta?: CtaData;
    secondaryCta?: CtaData;
    backgroundImage?: ImageData;
  };
  stats?: StatData[];
  about?: {
    eyebrow?: LocalizedValue[];
    title?: LocalizedValue[];
    description?: LocalizedValue[];
    image?: ImageData;
    badge?: LocalizedValue[];
    badgeCaption?: LocalizedValue[];
    highlights?: FeatureData[];
  };
  bmi?: BmiData;
  features?: {
    eyebrow?: LocalizedValue[];
    title?: LocalizedValue[];
    description?: LocalizedValue[];
    items?: FeatureData[];
  };
  programs?: {
    eyebrow?: LocalizedValue[];
    title?: LocalizedValue[];
    description?: LocalizedValue[];
    items?: ProgramData[];
  };
  memberships?: {
    eyebrow?: LocalizedValue[];
    title?: LocalizedValue[];
    description?: LocalizedValue[];
    plans?: MembershipPlanData[];
  };
  trainers?: {
    eyebrow?: LocalizedValue[];
    title?: LocalizedValue[];
    description?: LocalizedValue[];
    items?: TrainerData[];
  };
  testimonials?: {
    eyebrow?: LocalizedValue[];
    title?: LocalizedValue[];
    items?: TestimonialData[];
  };
  gallery?: {
    eyebrow?: LocalizedValue[];
    title?: LocalizedValue[];
    images?: GalleryImageData[];
  };
  contact?: {
    eyebrow?: LocalizedValue[];
    title?: LocalizedValue[];
    description?: LocalizedValue[];
    contact?: ContactData;
  };
  faq?: {
    eyebrow?: LocalizedValue[];
    title?: LocalizedValue[];
    items?: FaqItemData[];
  };
  bottomCta?: {
    title?: LocalizedValue[];
    description?: LocalizedValue[];
    primaryCta?: CtaData;
  };
  seo?: SeoData;
};

export type CmsData = {
  homepage: HomepageData;
  siteSettings: SiteSettingsData;
};
