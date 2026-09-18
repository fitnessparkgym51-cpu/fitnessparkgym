import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "FITNESS PARK GYM - Tongi, Gazipur | Best Fitness Center & Champion Trainers",
  description:
    "FITNESS PARK GYM is the best fitness center in Tongi, Gazipur with champion trainers, modern equipment and specialized programs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-gray-200 antialiased selection:bg-amber-500 selection:text-black">
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