import type { Metadata, Viewport } from "next";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import {
  GYM_DESCRIPTION,
  GYM_KEYWORDS,
  GYM_NAME,
  SITE_TITLE,
  SITE_URL,
  breadcrumbSchema,
  faqSchema,
  gymSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/seo";
import "./globals.css";

const TITLE = SITE_TITLE;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${GYM_NAME}`,
  },
  applicationName: GYM_NAME,
  authors: [{ name: GYM_NAME, url: SITE_URL }],
  description: GYM_DESCRIPTION,
  keywords: GYM_KEYWORDS,
  creator: GYM_NAME,
  publisher: GYM_NAME,
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
    siteName: GYM_NAME,
    title: TITLE,
    description: GYM_DESCRIPTION,
  },
  appleWebApp: {
    capable: true,
    title: GYM_NAME,
    statusBarStyle: "black-translucent",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: GYM_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eab308",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />
        <link rel="dns-prefetch" href="https://cdn.tailwindcss.com" />
      </head>
      <body className="bg-[#0a0a0a] text-gray-200 antialiased selection:bg-amber-500 selection:text-black">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
        <JsonLd data={gymSchema()} />
        <JsonLd data={breadcrumbSchema()} />
        <JsonLd data={faqSchema()} />
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
          src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}