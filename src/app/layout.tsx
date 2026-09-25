import type { Metadata, Viewport } from "next";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { getCmsData } from "@/sanity/client";
import { localized } from "@/sanity/helpers";
import type { CmsData, ImageData } from "@/sanity/types";
import {
  GYM_DESCRIPTION,
  GYM_KEYWORDS,
  GYM_NAME,
  GYM_STREET_ADDRESS,
  SITE_TITLE,
  SITE_URL,
  breadcrumbSchema,
  faqSchema,
  gymSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/seo";
import type { SeoOverrides } from "@/lib/seo";
import "./globals.css";

function absoluteAssetUrl(image: ImageData | undefined, fallback: string): string {
  const source = image?.asset?.url || image?.url || fallback;
  if (source.startsWith("http://") || source.startsWith("https://")) return source;
  return `${SITE_URL}${source.startsWith("/") ? source : `/${source}`}`;
}

function getSeoOverrides(data: CmsData): SeoOverrides {
  const { homepage, siteSettings } = data;
  const seo = homepage.seo || siteSettings.seo || {};
  const contact = siteSettings.contact || homepage.contact?.contact || {};
  const name = localized(siteSettings.siteName, "en", GYM_NAME);
  const address = localized(contact.address, "en", GYM_STREET_ADDRESS);
  const logoUrl = absoluteAssetUrl(siteSettings.logo, "/logo.png");
  const imageUrls = (homepage.gallery?.images || [])
    .map((item) => absoluteAssetUrl(item.image, "/images/gym-01.jpg"))
    .filter(Boolean);
  const membershipPlans = (homepage.memberships?.plans || []).map((plan) => ({
    name: localized(plan.name, "en", "Membership"),
    price: plan.price,
    period: plan.period,
  }));
  const faq = (homepage.faq?.items || []).map((item) => ({
    question: localized(item.question, "en"),
    answer: localized(item.answer, "en"),
  }));
  const breadcrumb = [
    { name, path: "/" },
    ...(siteSettings.navigation || [])
      .filter((item) => item.href?.startsWith("#"))
      .map((item) => ({ name: localized(item.label, "en", "Section"), path: item.href as string })),
  ];

  return {
    name,
    description: localized(seo.description, "en", GYM_DESCRIPTION),
    phone: contact.phone,
    streetAddress: address,
    mapUrl: contact.mapUrl,
    logoUrl,
    imageUrls,
    admissionFee: siteSettings.announcement?.admissionFee,
    membershipPlans,
    faq,
    breadcrumb,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCmsData();
  const { homepage, siteSettings } = data;
  const seo = homepage.seo || siteSettings.seo || {};
  const name = localized(siteSettings.siteName, "en", GYM_NAME);
  const title = localized(seo.title, "en", SITE_TITLE);
  const description = localized(seo.description, "en", GYM_DESCRIPTION);
  const shareImage = absoluteAssetUrl(seo.shareImage, "/opengraph-image");

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${name}`,
    },
    applicationName: name,
    authors: [{ name, url: SITE_URL }],
    description,
    keywords: GYM_KEYWORDS,
    creator: name,
    publisher: name,
    category: "Health & Fitness",
    verification: {
      google: "Zvy_0TkaSYK71VYf0qvla8o_M47GmwQHpWKRBYBIPg4",
    },
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      alternateLocale: "bn_BD",
      url: `${SITE_URL}/`,
      siteName: name,
      title,
      description,
      images: [{ url: shareImage, width: 1200, height: 630, alt: title }],
    },
    appleWebApp: {
      capable: true,
      title: name,
      statusBarStyle: "black-translucent",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eab308",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const data = await getCmsData();
  const seoOverrides = getSeoOverrides(data);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />
        <link rel="dns-prefetch" href="https://cdn.tailwindcss.com" />
      </head>
      <body className="bg-[#0a0a0a] text-gray-200 antialiased selection:bg-amber-500 selection:text-black">
        <JsonLd data={organizationSchema(seoOverrides)} />
        <JsonLd data={webSiteSchema(seoOverrides)} />
        <JsonLd data={gymSchema(seoOverrides)} />
        <JsonLd data={breadcrumbSchema(seoOverrides)} />
        <JsonLd data={faqSchema(seoOverrides)} />
        {children}
        <Script
          id="tailwind-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#eab308',
          amber: '#f59e0b',
          darkamber: '#d97706',
          bg: '#0a0a0a',
          card: '#141414',
          cardBorder: '#262626',
          borderMuted: '#1f1f1f'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    }
  }
}`,
          }}
        />
        <Script
          src="https://cdn.tailwindcss.com/3.4.17?plugins=forms@0.5.10,container-queries@0.1.1"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}