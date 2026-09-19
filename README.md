# Fitness Park Gym — Website

Official website for **Fitness Park Gym**, a gym and fitness center on
Tongi – Kaliganj – Gorashal – Pachdona Rd, Tongi, Gazipur 1710, Bangladesh.

Production: https://fitnessparkgym.vercel.app

## Stack

- Next.js 16 (App Router, `output: "export"` static export)
- Tailwind (CDN runtime build) + custom CSS in `src/app/globals.css`

## Development

```bash
npm run dev     # local dev server
npm run build   # static export to ./out
```

## SEO surface

| Concern | Location |
| --- | --- |
| Brand/business constants, JSON-LD builders | `src/lib/seo.ts` |
| Metadata, JSON-LD injection | `src/app/layout.tsx` |
| Favicon / icons | `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png` |
| Logo asset for structured data | `public/logo.png` |
| robots.txt | `src/app/robots.ts` |
| sitemap.xml | `src/app/sitemap.ts` |
| Web app manifest | `src/app/manifest.ts` |
| Open Graph image | `src/app/opengraph-image.tsx` |

Business facts (name, address, phone, hours, prices) live only in `src/lib/seo.ts`
and the page copy — keep the two consistent when either changes.
