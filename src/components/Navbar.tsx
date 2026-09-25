"use client";

import React, { useState, useEffect } from "react";
import LanguageToggle from "./LanguageToggle";

interface NavItem {
  name: string;
  href: string;
  badge?: string;
  /** Hidden on medium desktops, shown from xl up, to stop the bar crowding. */
  wide?: boolean;
}

// Navigation sections aligned with the page layout order
const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Membership", href: "#membership", badge: "Tk 500" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "BMI", href: "#bmi" },
  { name: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_ITEMS.map((i) => i.href.replace("#", ""));

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);

  // Scroll elevation + reading progress bar
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max =
          document.documentElement.scrollHeight - window.innerHeight || 1;
        setIsScrolled(y > 20);
        setProgress(Math.min(Math.max((y / max) * 100, 0), 100));
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy: detect currently visible section
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const intersecting = entries.filter((entry) => entry.isIntersecting);
      if (intersecting.length > 0) {
        const best = intersecting.reduce((prev, curr) =>
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev
        );
        if (best.target.id) setActiveSection(best.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-25% 0px -45% 0px",
      threshold: [0.1, 0.3, 0.6],
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close on Escape & auto close once the desktop nav returns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const targetId = href.replace("#", "");

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
      {/* Top micro-announcement bar */}
      <div className="bg-[#080808] border-b border-zinc-800/80 text-[11px] text-zinc-400 py-1.5 px-4 hidden md:block select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 lg:gap-4 min-w-0">
            <span className="inline-flex items-center gap-1.5 text-zinc-300 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-emerald-400">Open Today:</span>{" "}
              7:00 AM – 11:00 PM
            </span>
            <span className="text-zinc-600 hidden lg:inline">|</span>
            <span className="text-zinc-400 truncate hidden lg:inline">
              Tongi - Kaliganj Rd, Tongi, Gazipur
            </span>
          </div>
          <div className="flex items-center gap-3 lg:gap-4">
            <span className="text-amber-400 font-semibold whitespace-nowrap">
              Admission Fee: Tk 500 Only
            </span>
            <span className="text-zinc-600 hidden lg:inline">|</span>
            <span className="text-zinc-300 font-medium whitespace-nowrap hidden lg:inline">
              Combined Men &amp; Women Section
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-amber-500/25 shadow-2xl shadow-black/80 py-2"
            : "bg-[#0c0c0c]/90 backdrop-blur-md border-b border-zinc-800 py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 sm:gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 -m-1 min-w-0"
            aria-label="FITNESS PARK GYM - Home"
          >
            <div className="relative flex-shrink-0">
              <img
                src="/images/gym-01.jpg"
                alt="FITNESS PARK GYM Logo"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-amber-500 shadow-md shadow-amber-500/20 transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-400"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 border-2 border-[#0c0c0c]" />
            </div>
            <div className="leading-tight min-w-0">
              <span className="text-[15px] sm:text-xl font-black tracking-wide sm:tracking-wider text-amber-400 block group-hover:text-amber-300 transition-colors truncate">
                FITNESS PARK GYM
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-zinc-400 uppercase flex items-center gap-1.5 truncate">
                TONGI, GAZIPUR
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-amber-500" />
                <span className="hidden sm:inline-block text-zinc-500 font-mono text-[9px]">
                  ESTD 2010
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-2 text-xs font-semibold tracking-wider uppercase"
          >
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-2.5 xl:px-3 py-2 rounded-md transition-all duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                    item.wide ? "hidden xl:inline-block" : ""
                  } ${
                    isActive
                      ? "text-amber-400 font-bold bg-amber-500/10 shadow-sm shadow-amber-500/10"
                      : "text-zinc-300 hover:text-amber-300 hover:bg-zinc-800/50"
                  }`}
                >
                  {item.name}
                  {item.badge && (
                    <span className="ml-1.5 text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-500 text-black hidden xl:inline">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action area */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            {/* Language switch: English <-> Bangla */}
            <LanguageToggle />

            {/* Join CTA — full label on desktop, compact on phones */}
            <a
              href="#membership"
              onClick={(e) => handleNavClick(e, "#membership")}
              className="relative group/btn hidden sm:inline-flex items-center justify-center gap-2 px-4 lg:px-6 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:via-yellow-300 hover:to-amber-400 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-105 active:scale-95 transition-all duration-200 ring-2 ring-amber-400/60 whitespace-nowrap overflow-hidden"
              aria-label="Join Fitness Park Gym Now"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 flex-shrink-0 group-hover/btn:rotate-12 transition-transform duration-200"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="relative z-10">JOIN NOW</span>
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label={
                isMobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMobileOpen}
              aria-controls="mobile-navigation-drawer"
              className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg border border-zinc-700/80 bg-zinc-900/90 text-amber-400 hover:bg-zinc-800 hover:border-amber-500/60 focus-visible:ring-2 focus-visible:ring-amber-500 transition-all flex-shrink-0"
            >
              <span className="w-5 h-4 relative flex flex-col justify-between items-center">
                <span
                  className={`w-5 h-0.5 bg-amber-400 rounded-full transition-all duration-300 transform origin-left ${
                    isMobileOpen ? "rotate-45 translate-x-0.5" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-amber-400 rounded-full transition-all duration-200 ${
                    isMobileOpen ? "opacity-0 -translate-x-2" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-amber-400 rounded-full transition-all duration-300 transform origin-left ${
                    isMobileOpen ? "-rotate-45 translate-x-0.5" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Reading progress bar */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 transition-[width] duration-150 ease-out pointer-events-none"
          style={{ width: `${progress}%` }}
        />
      </header>

      {/* Mobile / Tablet Slide-Over Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div
          onClick={() => setIsMobileOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div
          className={`absolute top-0 right-0 bottom-0 w-[86%] max-w-sm bg-[#0e0e0e] border-l border-zinc-800 p-5 sm:p-6 flex flex-col shadow-2xl transition-transform duration-300 ease-out overflow-y-auto overscroll-contain ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex-1">
            <div className="flex items-center justify-between gap-3 pb-5 border-b border-zinc-800">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src="/images/gym-01.jpg"
                  alt="FITNESS PARK GYM"
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-500 shadow-md flex-shrink-0"
                />
                <div className="min-w-0">
                  <span className="font-extrabold text-amber-400 text-sm tracking-wide block truncate">
                    FITNESS PARK GYM
                  </span>
                  <span className="text-[10px] text-zinc-400 font-semibold tracking-widest uppercase block truncate">
                    TONGI, GAZIPUR
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-between gap-2 text-xs">
              <span className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-zinc-300 font-medium truncate">
                  Open 7:00 AM – 11:00 PM
                </span>
              </span>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 flex-shrink-0">
                DAILY
              </span>
            </div>

            <nav className="mt-5 space-y-1.5">
              {NAV_ITEMS.map((item, i) => {
                const targetId = item.href.replace("#", "");
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{ transitionDelay: isMobileOpen ? `${i * 35}ms` : "0ms" }}
                    className={`drawer-link flex items-center justify-between gap-2 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all ${
                      isMobileOpen ? "is-open" : ""
                    } ${
                      isActive
                        ? "bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold"
                        : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                      )}
                      <span className="truncate">{item.name}</span>
                    </span>
                    <span className="flex items-center gap-2 flex-shrink-0">
                      {item.badge && (
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500 text-black">
                          {item.badge}
                        </span>
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform ${
                          isActive ? "text-amber-400 translate-x-1" : "text-zinc-600"
                        }`}
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-5 mt-5 border-t border-zinc-800 space-y-3">
            <a
              href="#membership"
              onClick={(e) => handleNavClick(e, "#membership")}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-black uppercase tracking-wider text-xs shadow-lg shadow-amber-500/30 ring-2 ring-amber-400/60 active:scale-95 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              JOIN NOW (ADMISSION TK 500)
            </a>

            <a
              href="tel:+8801922749473"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 font-bold uppercase tracking-wider text-xs hover:border-amber-500/60 hover:text-amber-400 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              +880 1922-749473
            </a>

            <p className="text-[11px] text-zinc-500 text-center leading-relaxed">
              Tongi - Kaliganj - Gorashal - Pachdona Rd, Tongi, Gazipur
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
