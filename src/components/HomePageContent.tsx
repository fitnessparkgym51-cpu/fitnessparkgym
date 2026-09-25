"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { formatPrice, imageUrl, localized, safeHref } from "@/sanity/helpers";
import type {
  CmsData,
  BmiData,
  FeatureData,
  GalleryImageData,
  ImageData,
  MembershipPlanData,
  ProgramData,
  TestimonialData,
  TrainerData,
} from "@/sanity/types";

function Icon({ name, className = "h-6 w-6" }: { name?: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    dumbbell: (
      <>
        <path d="M6 9v6M3 10v4M18 9v6M21 10v4M6 12h12" />
      </>
    ),
    heart: <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.8 2.5Z" />,
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3-1.4 3.6L7 8l3.6 1.4L12 13l1.4-3.6L17 8l-3.6-1.4L12 3Z" />
        <path d="m19 14-.8 2.2L16 17l2.2.8L19 20l.8-2.2L22 17l-2.2-.8L19 14ZM5 14l-.7 1.8L2.5 16.5l1.8.7L5 19l.7-1.8 1.8-.7-1.8-.7L5 14Z" />
      </>
    ),
    shield: <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z" />,
    chart: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 3-4 3 2 5-7" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: <path d="M13.8 16.6a1.7 1.7 0 0 0 1.2-.3l.4-.5A1.7 1.7 0 0 1 17 15h3a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2A18 18 0 0 1 1 3a2 2 0 0 1 2-2h3a1 1 0 0 1 1 1v3a1.7 1.7 0 0 1-.8 1.5l-.5.4a1.7 1.7 0 0 0-.3 1.2 14 14 0 0 0 6.4 6.4Z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    quote: <path d="M6 17H3v-4a4 4 0 0 1 4-4h1v3H7a1 1 0 0 0-1 1v1h2v3H6Zm11 0h-3v-4a4 4 0 0 1 4-4h1v3h-1a1 1 0 0 0-1 1v1h2v3h-2Z" />,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name || "sparkles"] || paths.sparkles}
    </svg>
  );
}

function Media({
  source,
  fallback,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  source?: ImageData;
  fallback: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const sourceUrl = imageUrl(source, fallback);
  return (
    <Image
      src={sourceUrl}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      data-reveal
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <Reveal className={centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-white">{title}</h2>
      {description ? <p className="mt-4 text-base sm:text-lg leading-8 text-zinc-400">{description}</p> : null}
    </Reveal>
  );
}

function ActionLink({
  label,
  href,
  secondary = false,
  className = "",
}: {
  label: string;
  href?: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a
      href={safeHref(href)}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none ${
        secondary
          ? "border border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-amber-400 hover:text-amber-300"
          : "bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40"
      } ${className}`}
    >
      {label}
      <Icon name="arrow" className="h-4 w-4" />
    </a>
  );
}

function FeatureIcon({ name }: { name?: string }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400">
      <Icon name={name} className="h-5 w-5" />
    </span>
  );
}

function FeatureCard({ item, language }: { item: FeatureData; language: "en" | "bn" }) {
  return (
    <Reveal className="h-full" delay={40}>
      <article data-card className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-amber-500/50">
        <FeatureIcon name={item.icon} />
        <h3 className="mt-5 text-lg font-bold text-white">{localized(item.title, language)}</h3>
        <p className="mt-3 text-sm leading-7 text-zinc-400">{localized(item.description, language)}</p>
      </article>
    </Reveal>
  );
}

function ProgramCard({ item, language }: { item: ProgramData; language: "en" | "bn" }) {
  return (
    <Reveal className="h-full" delay={50}>
      <article data-card data-purpose="program-card" className="group h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
        <div className="relative h-48 overflow-hidden">
          <Media source={item.image} fallback="/images/gym-03.jpg" alt={localized(item.title, language)} sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/30 bg-black/40 text-amber-300 backdrop-blur-sm">
            <Icon name={item.icon} className="h-5 w-5" />
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white">{localized(item.title, language)}</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">{localized(item.description, language)}</p>
          <ul className="mt-5 space-y-2 text-sm text-zinc-300">
            {(item.highlights || []).slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-amber-400" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

function TrainerCard({ item, language }: { item: TrainerData; language: "en" | "bn" }) {
  return (
    <Reveal className="h-full" delay={50}>
      <article data-card className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Media source={item.image} fallback="/images/gym-12.jpg" alt={item.name || "Fitness Park Gym trainer"} sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent p-5 pt-20">
            <h3 className="text-xl font-bold text-white">{item.name}</h3>
            <p className="mt-1 text-sm font-semibold text-amber-400">{localized(item.role, language)}</p>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm leading-7 text-zinc-400">{localized(item.bio, language)}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(item.specialties || []).map((specialty) => (
              <span key={specialty} className="rounded-full border border-zinc-700 px-3 py-1 text-[11px] font-semibold text-zinc-300">{specialty}</span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function TestimonialCard({ item, language }: { item: TestimonialData; language: "en" | "bn" }) {
  return (
    <Reveal className="h-full" delay={40}>
      <article data-card className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
        <div className="flex gap-1 text-amber-400" aria-label={`${item.rating || 5} out of 5 stars`}>
          {Array.from({ length: item.rating || 5 }, (_, index) => (
            <span key={index} aria-hidden="true">★</span>
          ))}
        </div>
        <Icon name="quote" className="mt-5 h-8 w-8 text-amber-500/50" />
        <p className="mt-4 flex-1 text-sm leading-7 text-zinc-300">“{localized(item.quote, language)}”</p>
        <div className="mt-6 border-t border-zinc-800 pt-4">
          <p className="font-bold text-white">{item.name}</p>
          <p className="mt-1 text-xs text-zinc-500">{item.role}</p>
        </div>
      </article>
    </Reveal>
  );
}

function GallerySlide({ item, language }: { item: GalleryImageData; language: "en" | "bn" }) {
  return (
    <div className="gallery-slide" data-card>
      <Media source={item.image} fallback="/images/gym-01.jpg" alt={localized(item.alt, language, "Fitness Park Gym")} sizes="22rem" className="object-cover" />
      {item.caption ? <span className="absolute bottom-3 left-3 rounded bg-black/70 px-2 py-1 text-xs text-white">{item.caption}</span> : null}
    </div>
  );
}

function BmiCalculator({ language, content }: { language: "en" | "bn"; content?: BmiData }) {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const bmi = height > 0 ? weight / ((height / 100) ** 2) : 0;
  const roundedBmi = Number(bmi.toFixed(1));
  const category = roundedBmi < 18.5 ? "underweight" : roundedBmi < 25 ? "healthy" : roundedBmi < 30 ? "overweight" : "obese";
  const categoryLabel = localized(
    category === "underweight" ? content?.underweightLabel : category === "healthy" ? content?.healthyLabel : category === "overweight" ? content?.overweightLabel : content?.obeseLabel,
    language,
    category === "underweight" ? "Underweight" : category === "healthy" ? "Healthy" : category === "overweight" ? "Overweight" : "Obese"
  );
  const diet = localized(
    category === "underweight" ? content?.underweightDiet : category === "healthy" ? content?.healthyDiet : content?.overweightDiet,
    language,
    category === "underweight" ? "Add nutrient-dense meals and strength training with coach guidance." : category === "healthy" ? "Keep your balanced routine and stay consistent." : "Focus on steady cardio, movement, and a sustainable nutrition plan."
  );

  return (
    <section id="bmi" data-purpose="bmi-calculator" className="border-y border-zinc-800 bg-zinc-950/60 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-500">{localized(content?.eyebrow, language, "BMI calculator")}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{localized(content?.title, language, "A simple starting point")}</h2>
          <p className="mt-4 text-base leading-8 text-zinc-400">{localized(content?.description, language, "Use this estimate as a conversation starter with one of our coaches, not a medical diagnosis.")}</p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-zinc-400">
            <span className="rounded-full border border-zinc-700 px-3 py-1.5">{localized(content?.metricLabel, language, "Metric units")}</span>
            <span className="rounded-full border border-zinc-700 px-3 py-1.5">{localized(content?.privacyLabel, language, "Private in your browser")}</span>
          </div>
        </Reveal>
        <Reveal delay={80} className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 sm:p-8">
          <div className="flex gap-2">
            {(["male", "female"] as const).map((option) => (
              <button key={option} type="button" onClick={() => setGender(option)} className={`bmi-toggle flex-1 rounded-lg border px-4 py-3 text-sm font-bold uppercase tracking-wider ${gender === option ? "is-active" : ""}`}>
                {localized(option === "male" ? content?.maleLabel : content?.femaleLabel, language, option === "male" ? "Male" : "Female")}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-7 sm:grid-cols-2">
            <label className="block">
              <span className="flex items-center justify-between text-sm font-semibold text-zinc-300"><span>{localized(content?.heightLabel, language, "Height")}</span><span className="text-amber-400">{height} cm</span></span>
              <input className="bmi-range mt-4 w-full" type="range" min="120" max="220" value={height} onChange={(event) => setHeight(Number(event.target.value))} />
            </label>
            <label className="block">
              <span className="flex items-center justify-between text-sm font-semibold text-zinc-300"><span>{localized(content?.weightLabel, language, "Weight")}</span><span className="text-amber-400">{weight} kg</span></span>
              <input className="bmi-range mt-4 w-full" type="range" min="35" max="180" value={weight} onChange={(event) => setWeight(Number(event.target.value))} />
            </label>
          </div>
          <div id="bmi-diet" className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
            <div className="flex items-end justify-between gap-4">
              <div><p className="text-xs font-bold uppercase tracking-wider text-zinc-500">{localized(content?.estimateLabel, language, "Your estimate")}</p><p className="mt-1 text-4xl font-black text-white">{roundedBmi || "—"}</p></div>
              <span className="rounded-full bg-amber-500/15 px-3 py-1.5 text-xs font-bold text-amber-300">{categoryLabel}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{diet} {localized(content?.coachNote, language, "Talk to one of our coaches for a plan that fits you.")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePageContent({ data }: { data: CmsData }) {
  const { language } = useLanguage();
  const { homepage, siteSettings } = data;
  const hero = homepage.hero || {};
  const about = homepage.about || {};
  const features = homepage.features || {};
  const programs = homepage.programs || {};
  const memberships = homepage.memberships || {};
  const trainers = homepage.trainers || {};
  const testimonials = homepage.testimonials || {};
  const gallery = homepage.gallery || {};
  const contact = homepage.contact || {};
  const faq = homepage.faq || {};
  const bottomCta = homepage.bottomCta || {};
  const galleryTrack = useMemo(() => {
    const galleryItems = gallery.images || [];
    return [...galleryItems, ...galleryItems];
  }, [gallery.images]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("animations-on");
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("in-view"));
      return () => root.classList.remove("animations-on");
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      root.classList.remove("animations-on");
    };
  }, []);

  const heroTitle = localized(hero.title, language, "FITNESS PARK GYM");
  const heroAccent = localized(hero.accent, language, "Stronger Every Day");
  const heroDescription = localized(hero.description, language, "A modern fitness space in Tongi for strength, cardio, wellness, and a community that keeps you moving.");

  return (
    <>
      <Navbar data={siteSettings} />
      <main>
        <section id="home" data-purpose="hero-section" className="relative isolate flex min-h-[760px] items-center overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <Media source={hero.backgroundImage} fallback="/images/gym-18.jpg" alt="Fitness Park Gym interior" priority sizes="100vw" className="object-cover" />
          </div>
          <div className="hero-overlay absolute inset-0 -z-10" />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
            <div className="max-w-3xl">
              <p data-hero-item style={{ "--hero-delay": "0ms" } as CSSProperties} className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-amber-300 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {localized(hero.eyebrow, language, "Your fitness journey starts here")}
              </p>
              <h1 data-hero-item style={{ "--hero-delay": "100ms" } as CSSProperties} className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-7xl">{heroTitle}<span className="gold-gradient-text block">{heroAccent}</span></h1>
              <p data-hero-item style={{ "--hero-delay": "200ms" } as CSSProperties} className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">{heroDescription}</p>
              <div data-hero-item style={{ "--hero-delay": "300ms" } as CSSProperties} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ActionLink label={localized(hero.primaryCta?.label, language, "Join Now")} href={hero.primaryCta?.href || "#membership"} />
                <ActionLink label={localized(hero.secondaryCta?.label, language, "Explore Programs")} href={hero.secondaryCta?.href || "#programs"} secondary />
              </div>
              <div data-hero-item style={{ "--hero-delay": "400ms" } as CSSProperties} className="mt-12 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/20 pt-6">
                {(homepage.stats || []).map((stat) => (
                  <div key={stat._key || stat.value}><p className="text-2xl font-black text-amber-400 sm:text-3xl">{stat.value}</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-300">{localized(stat.label, language)}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section data-purpose="about-section" className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/30">
                <Media source={about.image} fallback="/images/Owner dr himel.jpeg" alt="Fitness Park Gym coach" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/45 p-4 backdrop-blur-md"><p className="text-xs font-black uppercase tracking-[0.24em] text-amber-400">{localized(about.badge, language, "Since 2010")}</p><p className="mt-1 text-sm text-zinc-200">{localized(about.badgeCaption, language, "A local gym built around real progress.")}</p></div>
              </div>
            </Reveal>
            <div>
               <SectionHeading eyebrow={localized(about.eyebrow, language, "About Fitness Park Gym")} title={localized(about.title, language, "Built for progress, not pressure")} description={localized(about.description, language)} />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {(about.highlights || []).map((item, index) => <FeatureCard key={item._key || index} item={item} language={language} />)}
              </div>
            </div>
          </div>
        </section>

        <section data-purpose="why-choose-us" className="border-y border-zinc-800 bg-zinc-950/60 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading centered eyebrow={localized(features.eyebrow, language, "Why Fitness Park")} title={localized(features.title, language, "Everything you need to feel your best")} description={localized(features.description, language)} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{(features.items || []).map((item, index) => <FeatureCard key={item._key || index} item={item} language={language} />)}</div>
          </div>
        </section>

        <section id="programs" data-purpose="training-programs" className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow={localized(programs.eyebrow, language, "Training programs")} title={localized(programs.title, language, "Choose a path that fits your goals")} description={localized(programs.description, language)} />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{(programs.items || []).map((item, index) => <ProgramCard key={item._id || index} item={item} language={language} />)}</div>
          </div>
        </section>

        <section data-purpose="gym-gallery" className="overflow-hidden border-y border-zinc-800 bg-zinc-950/60 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading centered eyebrow={localized(gallery.eyebrow, language, "Inside the gym")} title={localized(gallery.title, language, "A space made for your best work")} /></div>
          <div className="gallery-marquee mt-12"><div className="gallery-track">{galleryTrack.map((item, index) => <GallerySlide key={`${item._key || "gallery"}-${index}`} item={item} language={language} />)}</div></div>
        </section>

        <section id="membership" data-purpose="membership-plans" className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading centered eyebrow={localized(memberships.eyebrow, language, "Membership")} title={localized(memberships.title, language, "Simple plans. Real momentum.")} description={localized(memberships.description, language)} />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">{(memberships.plans || []).map((plan, index) => <MembershipCard key={plan._key || index} plan={plan} language={language} />)}</div>
          </div>
        </section>

        <section id="trainers" data-purpose="trainers-section" className="border-y border-zinc-800 bg-zinc-950/60 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow={localized(trainers.eyebrow, language, "Meet the team")} title={localized(trainers.title, language, "Coaches who care about your progress")} description={localized(trainers.description, language)} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{(trainers.items || []).map((item, index) => <TrainerCard key={item._id || index} item={item} language={language} />)}</div>
          </div>
        </section>

        <section data-purpose="trainee-reviews" className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading centered eyebrow={localized(testimonials.eyebrow, language, "Member stories")} title={localized(testimonials.title, language, "Progress worth celebrating")} />
            <div className="mt-12 grid gap-6 md:grid-cols-3">{(testimonials.items || []).map((item, index) => <TestimonialCard key={item._id || index} item={item} language={language} />)}</div>
          </div>
        </section>

        <BmiCalculator language={language} content={homepage.bmi} />

        <section id="contact" data-purpose="location-contact" className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <SectionHeading eyebrow={localized(contact.eyebrow, language, "Contact")} title={localized(contact.title, language, "Ready to take the next step?")} description={localized(contact.description, language)} />
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard icon="map" label={language === "bn" ? "ঠিকানা" : "Address"} value={localized(contact.contact?.address, language, "Tongi, Gazipur")} href={contact.contact?.mapUrl} />
                <ContactCard icon="clock" label={language === "bn" ? "সময়" : "Hours"} value={localized(contact.contact?.hours, language, "Open daily 7:00 AM – 11:00 PM")} />
                <ContactCard icon="phone" label={language === "bn" ? "ফোন" : "Phone"} value={contact.contact?.phoneDisplay || contact.contact?.phone || "+880 1922-749473"} href={contact.contact?.phone ? `tel:${contact.contact.phone}` : undefined} />
                <ContactCard icon="mail" label={language === "bn" ? "ইমেইল" : "Email"} value={contact.contact?.email || "hello@fitnessparkgym.com"} href={contact.contact?.email ? `mailto:${contact.contact.email}` : undefined} />
              </div>
            </div>
          </div>
        </section>

        <section data-purpose="faq" className="border-y border-zinc-800 bg-zinc-950/60 py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <SectionHeading centered eyebrow={localized(faq.eyebrow, language, "FAQ")} title={localized(faq.title, language, "Questions, answered")} />
            <div className="mt-10 space-y-3">{(faq.items || []).map((item, index) => <Reveal key={item._key || index} delay={index * 30}><details className="group rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 open:border-amber-500/40"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white"><span>{localized(item.question, language)}</span><span className="text-amber-400 transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 text-sm leading-7 text-zinc-400">{localized(item.answer, language)}</p></details></Reveal>)}</div>
          </div>
        </section>

        <section data-purpose="bottom-cta" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <Reveal className="rounded-3xl border border-amber-400/25 bg-zinc-900 px-6 py-12 text-center shadow-2xl shadow-amber-500/10 sm:px-12"><h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{localized(bottomCta.title, language, "Your stronger self is waiting")}</h2><p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-zinc-400">{localized(bottomCta.description, language, "Join Fitness Park Gym and make your next step today.")}</p><ActionLink className="mt-8" label={localized(bottomCta.primaryCta?.label, language, "Join Now")} href={bottomCta.primaryCta?.href || "#membership"} /></Reveal>
        </section>
      </main>
      <Footer data={siteSettings} language={language} />
      <BackToTop />
    </>
  );
}

function MembershipCard({ plan, language }: { plan: MembershipPlanData; language: "en" | "bn" }) {
  return (
    <Reveal className="h-full" delay={plan.featured ? 50 : 0}>
      <article data-card className={`relative flex h-full flex-col rounded-2xl border p-7 ${plan.featured ? "border-amber-400/70 bg-gradient-to-b from-amber-500/15 to-zinc-900 shadow-xl shadow-amber-500/10" : "border-zinc-800 bg-zinc-900/60"}`}>
        {plan.featured ? <span data-sticker className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black">{language === "bn" ? "সবচেয়ে জনপ্রিয়" : "Most popular"}</span> : null}
        <h3 className="text-2xl font-black text-white">{localized(plan.name, language)}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{localized(plan.description, language)}</p>
        <div className="mt-7"><span className="text-4xl font-black text-amber-400">{formatPrice(plan.price, language)}</span><span className="ml-2 text-xs font-semibold text-zinc-500">{plan.period}</span></div>
        <ul className="mt-7 flex-1 space-y-3 text-sm text-zinc-300">{(plan.features || []).map((feature) => <li key={feature} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-amber-400" />{feature}</li>)}</ul>
        <ActionLink className="mt-8 w-full" label={localized(plan.ctaLabel, language, "Join Now")} href={plan.ctaHref || "#contact"} />
      </article>
    </Reveal>
  );
}

function ContactCard({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const content = <><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400"><Icon name={icon} className="h-5 w-5" /></span><span className="mt-4 block text-xs font-black uppercase tracking-wider text-zinc-500">{label}</span><span className="mt-2 block text-sm font-semibold leading-6 text-zinc-200">{value}</span></>;
  return href ? <a href={safeHref(href)} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors hover:border-amber-500/50">{content}</a> : <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">{content}</div>;
}

function Footer({ data, language }: { data: CmsData["siteSettings"]; language: "en" | "bn" }) {
  const footer = data.footer || {};
  const contactData = data.contact || {};
  return (
    <footer className="border-t border-zinc-800 bg-[#080808]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div><p className="text-xl font-black tracking-wider text-amber-400">{localized(data.siteName, language, "FITNESS PARK GYM")}</p><p className="mt-3 max-w-md text-sm leading-7 text-zinc-500">{localized(footer.tagline, language, "Train stronger, feel better, and build a routine that lasts.")}</p>{(footer.links || []).length ? <nav aria-label="Footer navigation" className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{(footer.links || []).map((link, index) => <a key={link._key || index} href={safeHref(link.href)} className="text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors hover:text-amber-400">{localized(link.label, language, "Section")}</a>)}</nav> : null}</div>
        <div className="text-sm text-zinc-500 sm:text-right"><p>{localized(contactData.address, language, "Tongi, Gazipur")}</p><p className="mt-2">{contactData.phoneDisplay || contactData.phone}</p><div className="mt-4 flex flex-wrap gap-3 sm:justify-end">{(data.socialLinks || []).map((social, index) => <a key={social._key || index} href={safeHref(social.url)} className="text-xs font-semibold text-zinc-400 transition-colors hover:text-amber-400">{localized(social.label, language, social.platform || "Social")}</a>)}</div><p className="mt-4 text-xs">{localized(footer.copyright, language, "© 2026 Fitness Park Gym. All rights reserved.")}</p></div>
      </div>
    </footer>
  );
}
