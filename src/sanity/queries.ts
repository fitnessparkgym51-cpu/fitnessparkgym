const imageProjection = `{
  asset->{
    _id,
    url,
    metadata {
      lqip,
      dimensions {
        width,
        height,
        aspectRatio
      }
    }
  }
}`;

const ctaProjection = `{label, href}`;
const localizedProjection = `{
  eyebrow,
  title,
  accent,
  description,
  "backgroundImage": backgroundImage${imageProjection},
  "primaryCta": primaryCta${ctaProjection},
  "secondaryCta": secondaryCta${ctaProjection}
}`;

export const homepageQuery = `*[_type == "homepage" && _id == "homepage"][0]{
  _id,
  "hero": hero${localizedProjection},
  stats[]{
    _key,
    value,
    label
  },
  "about": about{
    eyebrow,
    title,
    description,
     "image": image${imageProjection},
     badge,
     badgeCaption,
     highlights[]{
      _key,
      icon,
      title,
      description
    }
   },
  "bmi": bmi{
    eyebrow,
    title,
    description,
    metricLabel,
    privacyLabel,
    maleLabel,
    femaleLabel,
    heightLabel,
    weightLabel,
    estimateLabel,
    underweightLabel,
    healthyLabel,
    overweightLabel,
    obeseLabel,
    underweightDiet,
    healthyDiet,
    overweightDiet,
    coachNote
  },
  "features": features{
    eyebrow,
    title,
    description,
    items[]{
      _key,
      icon,
      title,
      description
    }
  },
  "programs": programs{
    eyebrow,
    title,
    description,
    "items": items[]->{
      _id,
      title,
      slug,
      icon,
      description,
      highlights,
      "image": image${imageProjection},
      order
    }
  },
  "memberships": memberships{
    eyebrow,
    title,
    description,
    plans[]{
      _key,
      name,
      price,
      period,
      description,
      features,
      featured,
      ctaLabel,
      ctaHref
    }
  },
  "trainers": trainers{
    eyebrow,
    title,
    description,
    "items": items[]->{
      _id,
      name,
      role,
      bio,
      "image": image${imageProjection},
      specialties,
      order
    }
  },
  "testimonials": testimonials{
    eyebrow,
    title,
    "items": items[]->{
      _id,
      quote,
      name,
      role,
      rating,
      "avatar": avatar${imageProjection},
      order
    }
  },
  "gallery": gallery{
    eyebrow,
    title,
    images[]{
      _key,
      "image": image${imageProjection},
      alt,
      caption
    }
  },
  "contact": contact{
    eyebrow,
    title,
    description,
    "contact": contact{
      phone,
      phoneDisplay,
      whatsapp,
      email,
      address,
      hours,
      mapUrl
    }
  },
  "faq": faq{
    eyebrow,
    title,
    items[]{
      _key,
      question,
      answer
    }
  },
  "bottomCta": bottomCta{
    title,
    description,
    "primaryCta": primaryCta${ctaProjection}
  },
  "seo": seo{
    title,
    description,
    "shareImage": shareImage${imageProjection}
  }
}`;

export const siteSettingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  _id,
  siteName,
  location,
  established,
  "logo": logo${imageProjection},
  navigation[]{
    _key,
    label,
    href,
    badge
  },
  "joinCta": joinCta${ctaProjection},
  announcement{
    statusLabel,
    hours,
    address,
    admissionFee,
    membershipLabel
  },
  "contact": contact{
    phone,
    phoneDisplay,
    whatsapp,
    email,
    address,
    hours,
    mapUrl
  },
  socialLinks[]{
    _key,
    platform,
    label,
    url
  },
  "footer": footer{
    tagline,
    copyright,
    links[]{
      _key,
      label,
      href,
      badge
    }
  },
  "seo": seo{
    title,
    description,
    "shareImage": shareImage${imageProjection}
  }
}`;
