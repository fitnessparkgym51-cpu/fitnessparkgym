"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";
import { defaultCmsData } from "@/sanity/defaults";
import { imageUrl, localized, safeHref } from "@/sanity/helpers";
import type { NavItemData, SiteSettingsData } from "@/sanity/types";

function navLabel(item: NavItemData, language: "en" | "bn") {
  return localized(item.label, language, item.href === "#home" ? "Home" : "Section");
}

export default function Navbar({ data }: { data: SiteSettingsData }) {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const navItems = useMemo(
    () => (data.navigation?.length ? data.navigation : defaultCmsData.siteSettings.navigation || []).filter((item) => item.href),
    [data.navigation]
  );
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href?.replace("#", "")).filter(Boolean) as string[],
    [navItems]
  );
  const siteName = localized(data.siteName, language, "FITNESS PARK GYM");
  const joinLabel = localized(data.joinCta?.label, language, "JOIN NOW");
  const joinHref = safeHref(data.joinCta?.href || "#membership");
  const logo = imageUrl(data.logo, "/images/gym-01.jpg", 160);
  const announcement = data.announcement || {};
  const contact = data.contact || {};

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight || 1;
        setIsScrolled(y > 20);
        setProgress(Math.min(Math.max((y / max) * 100, 0), 100));
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (!intersecting.length) return;
        const best = intersecting.reduce((previous, current) =>
          current.intersectionRatio > previous.intersectionRatio ? current : previous
        );
        if (best.target.id) setActiveSection(best.target.id);
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0.1, 0.3, 0.6] }
    );
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string | undefined) => {
    const targetHref = safeHref(href);
    if (!targetHref.startsWith("#")) return;
    event.preventDefault();
    setIsMobileOpen(false);
    const targetId = targetHref.replace("#", "");
    if (targetId === "home" || !targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <div className="hidden border-b border-zinc-800/80 bg-[#080808] px-4 py-1.5 text-[11px] text-zinc-400 select-none md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3 lg:gap-4">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-emerald-400">{localized(announcement.statusLabel, language, "Open Today")}:</span> {localized(announcement.hours, language, "7:00 AM – 11:00 PM")}
            </span>
            <span className="hidden text-zinc-600 lg:inline">|</span>
            <span className="hidden truncate text-zinc-400 lg:inline">{localized(announcement.address, language, "Tongi - Kaliganj Rd, Tongi, Gazipur")}</span>
          </div>
          <div className="flex items-center gap-3 lg:gap-4">
            <span className="whitespace-nowrap font-semibold text-amber-400">{language === "bn" ? "ভর্তি ফি" : "Admission Fee"}: {language === "bn" ? `৳${announcement.admissionFee || 1000}` : `Tk ${announcement.admissionFee || 1000}`} {language === "bn" ? "মাত্র" : "Only"}</span>
            <span className="hidden text-zinc-600 lg:inline">|</span>
            <span className="hidden whitespace-nowrap font-medium text-zinc-300 lg:inline">{localized(announcement.membershipLabel, language, "Combined Men & Women Section")}</span>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-amber-500/25 bg-[#0a0a0a]/95 py-2 shadow-2xl shadow-black/80 backdrop-blur-xl" : "border-b border-zinc-800 bg-[#0c0c0c]/90 py-2.5 backdrop-blur-md sm:py-3.5"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
          <a href="#home" onClick={(event) => handleNavClick(event, "#home")} className="group flex min-w-0 items-center gap-2 rounded-lg p-1 outline-none focus-visible:ring-2 focus-visible:ring-amber-500 sm:gap-3" aria-label={`${siteName} - Home`}>
            <span className="relative flex-shrink-0"><Image src={logo} alt={`${siteName} logo`} width={44} height={44} unoptimized className="h-9 w-9 rounded-full border-2 border-amber-500 object-cover shadow-md shadow-amber-500/20 transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-400 sm:h-11 sm:w-11" /><span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0c0c0c] bg-emerald-500 sm:h-3 sm:w-3" /></span>
             <span className="min-w-0 leading-tight"><span className="block truncate text-[15px] font-black tracking-wide text-amber-400 transition-colors group-hover:text-amber-300 sm:tracking-wider sm:text-xl">{siteName}</span><span className="flex items-center gap-1.5 truncate text-[9px] font-bold uppercase tracking-widest text-zinc-400 sm:text-[10px]">{localized(data.location, language, "TONGI, GAZIPUR")} <span className="hidden h-1 w-1 rounded-full bg-amber-500 sm:inline-block" /><span className="hidden font-mono text-[9px] text-zinc-500 sm:inline">{localized(data.established, language, "ESTD 2010")}</span></span></span>
          </a>

          <nav aria-label="Main Navigation" className="hidden items-center gap-0.5 text-xs font-semibold uppercase tracking-wider lg:flex xl:gap-2">
            {navItems.map((item) => {
              const href = safeHref(item.href);
              const targetId = href.replace("#", "");
              const active = activeSection === targetId;
              return <a key={href} href={href} onClick={(event) => handleNavClick(event, href)} className={`relative whitespace-nowrap rounded-md px-2.5 py-2 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none xl:px-3 ${active ? "bg-amber-500/10 font-bold text-amber-400 shadow-sm shadow-amber-500/10" : "text-zinc-300 hover:bg-zinc-800/50 hover:text-amber-300"}`}>{navLabel(item, language)}{item.badge ? <span className="ml-1.5 hidden rounded bg-amber-500 px-1.5 py-0.5 text-[9px] font-extrabold text-black xl:inline">{item.badge}</span> : null}{active ? <span className="absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" /> : null}</a>;
            })}
          </nav>

          <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-3">
            <LanguageToggle />
            <a href={joinHref} onClick={(event) => handleNavClick(event, joinHref)} className="group/btn hidden items-center justify-center gap-2 whitespace-nowrap overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-lg shadow-amber-500/30 ring-2 ring-amber-400/60 transition-all duration-200 hover:scale-105 hover:shadow-amber-400/50 active:scale-95 sm:inline-flex lg:px-6 sm:text-sm"><span className="absolute inset-0 w-full -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out group-hover/btn:translate-x-full" /><svg viewBox="0 0 24 24" fill="currentColor" className="relative z-10 h-4 w-4 flex-shrink-0 transition-transform duration-200 group-hover/btn:rotate-12" aria-hidden="true"><path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /></svg><span className="relative z-10">{joinLabel}</span></a>
            <button type="button" onClick={() => setIsMobileOpen((open) => !open)} aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMobileOpen} aria-controls="mobile-navigation-drawer" className="inline-flex items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-900/90 p-2.5 text-amber-400 transition-all hover:border-amber-500/60 hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-amber-500 lg:hidden"><span className="flex h-4 w-5 flex-col items-center justify-between"><span className={`h-0.5 w-5 origin-left rounded-full bg-amber-400 transition-all duration-300 ${isMobileOpen ? "translate-x-0.5 rotate-45" : ""}`} /><span className={`h-0.5 w-5 rounded-full bg-amber-400 transition-all duration-200 ${isMobileOpen ? "-translate-x-2 opacity-0" : "opacity-100"}`} /><span className={`h-0.5 w-5 origin-left rounded-full bg-amber-400 transition-all duration-300 ${isMobileOpen ? "-translate-x-0.5 -rotate-45" : ""}`} /></span></button>
          </div>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </header>

      <div id="mobile-navigation-drawer" className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${isMobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div onClick={() => setIsMobileOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
        <div className={`absolute bottom-0 right-0 top-0 flex w-[86%] max-w-sm flex-col overflow-y-auto overscroll-contain border-l border-zinc-800 bg-[#0e0e0e] p-5 shadow-2xl transition-transform duration-300 ease-out sm:p-6 ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex-1">
             <div className="flex items-center justify-between gap-3 border-b border-zinc-800 pb-5"><div className="flex min-w-0 items-center gap-3"><Image src={logo} alt={`${siteName} logo`} width={40} height={40} unoptimized className="h-10 w-10 flex-shrink-0 rounded-full border-2 border-amber-500 object-cover" /><div className="min-w-0"><span className="block truncate text-sm font-extrabold tracking-wide text-amber-400">{siteName}</span><span className="block truncate text-[10px] font-semibold uppercase tracking-widest text-zinc-400">{localized(data.location, language, "TONGI, GAZIPUR")}</span></div></div><button type="button" onClick={() => setIsMobileOpen(false)} aria-label="Close menu" className="flex-shrink-0 rounded-md border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 transition-colors hover:border-amber-500/50 hover:text-amber-400"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[18px] w-[18px]"><path d="M18 6 6 18M6 6l12 12" /></svg></button></div>
            <div className="mt-4 flex items-center justify-between gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/90 p-3 text-xs"><span className="flex min-w-0 items-center gap-2"><span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" /><span className="truncate font-medium text-zinc-300">{localized(announcement.hours, language, "7:00 AM – 11:00 PM")}</span></span><span className="flex-shrink-0 rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-400">DAILY</span></div>
            <nav className="mt-5 space-y-1.5">{navItems.map((item, index) => { const href = safeHref(item.href); const targetId = href.replace("#", ""); const active = activeSection === targetId; return <a key={href} href={href} onClick={(event) => handleNavClick(event, href)} style={{ transitionDelay: isMobileOpen ? `${index * 35}ms` : "0ms" }} className={`drawer-link flex items-center justify-between gap-2 rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all ${isMobileOpen ? "is-open" : ""} ${active ? "border border-amber-500/30 bg-amber-500/15 font-bold text-amber-400" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"}`}><span className="flex min-w-0 items-center gap-2.5"><span className="truncate">{navLabel(item, language)}</span>{item.badge ? <span className="rounded bg-amber-500 px-2 py-0.5 text-[10px] font-extrabold text-black">{item.badge}</span> : null}</span><span className={`flex-shrink-0 transition-transform ${active ? "translate-x-1 text-amber-400" : "text-zinc-600"}`}>›</span></a>; })}</nav>
          </div>
          <div className="mt-5 space-y-3 border-t border-zinc-800 pt-5"><a href={joinHref} onClick={(event) => handleNavClick(event, joinHref)} className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 py-3.5 text-xs font-black uppercase tracking-wider text-black shadow-lg shadow-amber-500/30 ring-2 ring-amber-400/60 transition-all active:scale-95">{joinLabel} {announcement.admissionFee ? `(${language === "bn" ? "ভর্তি" : "Admission"} ${language === "bn" ? `৳${announcement.admissionFee}` : `Tk ${announcement.admissionFee}`})` : ""}</a><a href={contact.phone ? `tel:${contact.phone}` : "tel:+8801922749473"} className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 py-3 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-all hover:border-amber-500/60 hover:text-amber-400">{contact.phoneDisplay || contact.phone || "+880 1922-749473"}</a><p className="text-center text-[11px] leading-relaxed text-zinc-500">{localized(contact.address, language, "Tongi, Gazipur")}</p></div>
        </div>
      </div>
    </>
  );
}
