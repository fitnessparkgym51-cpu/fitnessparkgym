"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggle = () => {
    const next = language === "en" ? "bn" : "en";
    setLanguage(next);
    try {
      window.localStorage.setItem("fpg-lang", next);
    } catch {
      return;
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      data-no-translate="true"
      aria-label={language === "en" ? "Switch to Bangla" : "Switch to English"}
      title={language === "en" ? "বাংলায় দেখুন" : "View in English"}
      className="inline-flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-amber-500/40 bg-zinc-900/90 px-2.5 py-2 text-amber-400 transition-all hover:border-amber-500 hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none sm:px-3"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
      <span className="text-[10px] font-black uppercase tracking-wider sm:text-[11px]"><span className={language === "en" ? "text-amber-400" : "text-zinc-500"}>EN</span><span className="mx-1 text-zinc-600">|</span><span className={language === "bn" ? "text-amber-400" : "text-zinc-500"}>বাং</span></span>
    </button>
  );
}
