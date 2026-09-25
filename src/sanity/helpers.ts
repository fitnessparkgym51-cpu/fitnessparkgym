import { BN } from "@/lib/translations";
import type { ImageData, Language, LocalizedValue } from "./types";

export function localized(
  value: LocalizedValue[] | string | undefined,
  language: Language,
  fallback = ""
): string {
  if (typeof value === "string") return value || fallback;
  const match = value?.find((item) => item.language === language)?.value;
  if (match) return match;
  const english = value?.find((item) => item.language === "en")?.value;
  if (!english) return fallback;
  if (language === "bn") return BN[english] || english;
  return english;
}

export function imageUrl(
  image: ImageData | undefined,
  fallback: string,
  width = 1800
): string {
  const source = image?.asset?.url || image?.url || fallback;
  if (!source) return fallback;
  const separator = source.includes("?") ? "&" : "?";
  return `${source}${separator}auto=format&fit=max&w=${width}&q=85`;
}

export function safeHref(href: string | undefined): string {
  if (!href) return "#";
  if (
    href.startsWith("#") ||
    href.startsWith("/") ||
    /^(https?:|tel:|mailto:)/i.test(href)
  ) {
    return href;
  }
  return "#";
}

export function formatPrice(price: number | undefined, language: Language): string {
  const value = new Intl.NumberFormat(language === "bn" ? "bn-BD" : "en-US").format(
    price || 0
  );
  return language === "bn" ? `৳${value}` : `Tk ${value}`;
}
