"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "@/sanity/types";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem("fpg-lang") === "bn" ? "bn" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const value = useMemo(() => ({ language, setLanguage }), [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.lang = language;
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
