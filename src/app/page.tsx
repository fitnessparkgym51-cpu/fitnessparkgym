"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

const DESIGN_HTML = `
<!-- BEGIN: HeroSection -->
<section class="relative min-h-[88vh] flex items-center justify-center text-center px-4 overflow-hidden scroll-mt-24" data-purpose="hero-section" id="home">
<!-- Hero Background Image with Darkness Overlay -->
<div class="absolute inset-0 z-0">
<img alt="Members training on the gym floor at Fitness Park Gym in Tongi, Gazipur" fetchpriority="high" decoding="async" width="1600" height="900" class="w-full h-full object-cover object-center filter brightness-75 contrast-125 scale-105 transform" src="/images/gym-02.jpg">
<div class="absolute inset-0 hero-overlay"></div>
</div>
<!-- Hero Central Content -->
<div class="relative z-10 max-w-4xl mx-auto pt-12 pb-16">
<!-- Upper Badges -->
<div class="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-amber-500/40 text-[11px] font-medium text-amber-300 backdrop-blur-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-3 h-3 text-amber-400"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Tongi - Kaliganj - Gorashal - Pachdona Rd, Tongi, 1710</span>
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-zinc-700 text-[11px] font-medium text-gray-300 backdrop-blur-sm">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="clock" aria-hidden="true" class="lucide lucide-clock w-3 h-3 text-amber-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
          7:00 AM - 11:00 PM
        </span>
</div>
<!-- Main Headline -->
<h1 class="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-2 leading-none">FITNESS PARK <span class="text-amber-500">GYM</span></h1>
<p class="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide uppercase gold-gradient-text mb-6">"A PERFECT PLACE FOR BODYBUILDING AND FITNESS"</p>
<!-- Description Subtext -->
<p class="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow">Widely rated the best gym in Tongi, our Gazipur facility offers a combined training environment for men and women, commercial-grade equipment, and proven coach discipline.</p>
<!-- Call to Action Buttons -->
<div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
<a class="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase tracking-wider text-sm rounded shadow-lg shadow-amber-500/25 transition-all" href="#membership">
          JOIN NOW (ADMISSION TK 500)
        </a>
<a class="w-full sm:w-auto px-8 py-3.5 bg-zinc-900/90 hover:bg-zinc-800 text-gray-200 border border-zinc-700 font-bold uppercase tracking-wider text-sm rounded transition-all" href="#membership">
          EXPLORE PLANS
        </a>
</div>
<!-- Hero Credentials Strip -->
<div class="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 tracking-wide bg-black/50 px-4 py-2 rounded-full border border-zinc-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="award" aria-hidden="true" class="lucide lucide-award w-4 h-4 text-amber-400"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg><span class="">15+ YEARS EXPERIENCED COACH | EXPERIENCED TRAINER'S CHECK</span></div>
</div>
</section>
<!-- END: HeroSection -->
<!-- BEGIN: StatCounterStrip -->
<section class="bg-[#111111] border-y border-zinc-800 py-6" data-purpose="stat-counters">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
<div class="border-r border-zinc-800 last:border-none"><div class="text-3xl sm:text-4xl font-black text-amber-500">3</div>
<div class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Experienced Coaches</div></div>
<div class="border-r border-zinc-800 last:border-none"><div class="text-3xl sm:text-4xl font-black text-amber-500">15+</div><div class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Years Experience Coach</div></div>
<div class="border-r border-zinc-800 last:border-none"><div class="text-2xl sm:text-3xl font-extrabold text-white">COMBINED</div>
<div class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Men &amp; Women Section</div></div>
<div class="border-r border-zinc-800 last:border-none">
<div class="text-2xl sm:text-3xl font-extrabold text-white">DEDICATED</div>
<div class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Workout Environment</div>
</div>
<div class="col-span-2 md:col-span-1">
<div class="text-2xl sm:text-3xl font-extrabold text-amber-400">7 AM - 11 PM</div>
<div class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Standard Operating Hours</div>
</div>
</div>
</div>
</section>
<!-- END: StatCounterStrip -->
<!-- BEGIN: MembershipSection -->
<section class="py-20 bg-[#0a0a0a] scroll-mt-24" data-purpose="membership-plans" id="membership">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-xl mx-auto mb-12">
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">TRANSPARENT PRICING</span>
<h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">MEMBERSHIP TIERS</h2>
<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-400 mt-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="tag" aria-hidden="true" class="lucide lucide-tag w-3.5 h-3.5"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
          ADMISSION FEE: ৳1,000 (ONE-TIME REGISTRATION)
        </div>
</div>
<!-- Pricing Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
<!-- Plan 1: 1 Month -->
<div class="bg-zinc-900 border border-zinc-800 rounded-lg p-7 flex flex-col justify-between hover:border-zinc-700 transition-all">
<div>
<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold text-white uppercase">1 Month</h3>
<span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-zinc-800 text-gray-300 rounded">Standard</span>
</div>
<div class="flex items-baseline gap-1 mb-4">
<span class="text-4xl font-black text-amber-400">৳1,000</span>
<span class="text-xs text-gray-400 uppercase">/ Month</span>
</div>
<p class="text-xs text-gray-400 mb-6 pb-6 border-b border-zinc-800">
              Flexible month-to-month access complete for all lifters and starters.
            </p>
<ul class="space-y-3 text-xs text-gray-300 mb-8">
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Full gym access (7AM-11PM)
              </li>
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Floor trainers support
              </li>
<li class="flex items-center gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
Combined men &amp; women training floor</li>
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Free locker room access
              </li>
</ul>
</div>
<div>
<div class="text-[10px] text-center text-gray-500 mb-2 uppercase">+ ONE-TIME ADMISSION: ৳1,000</div>
<a class="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider text-center block rounded transition-colors" href="tel:01814088014">
              Join Monthly
            </a>
</div>
</div>
<!-- Plan 2: 3 Months (Highlighted) -->
<div class="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-500 rounded-lg p-7 flex flex-col justify-between relative shadow-xl shadow-amber-500/10 scale-105">
<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </div>
<div>
<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold text-white uppercase">3 Months</h3>
<span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded">Quarterly</span>
</div>
<div class="flex items-baseline gap-1 mb-4">
<span class="text-4xl font-black text-amber-400">৳2,500</span>
<span class="text-xs text-gray-400 uppercase">/ 3 Months</span>
</div>
<p class="text-xs text-gray-400 mb-6 pb-6 border-b border-zinc-800">
              Optimal commitment cycle for noticeable muscular and stamina transformation.
            </p>
<ul class="space-y-3 text-xs text-gray-200 mb-8">
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Full gym access (7AM-11PM)
              </li>
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Quarterly performance tracking
              </li>
<li class="flex items-center gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
Combined men &amp; women training floor</li>
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Dedicated on-floor routine review
              </li>
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Continuous trainer form supervision
              </li>
</ul>
</div>
<div>
<div class="text-[10px] text-center text-amber-400/80 mb-2 uppercase font-medium">+ ONE-TIME ADMISSION: ৳1,000</div>
<a class="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider text-center block rounded shadow transition-colors" href="tel:01814088014">
              Join 3 Months
            </a>
</div>
</div>
<!-- Plan 3: 6 Months -->
<div class="bg-zinc-900 border border-zinc-800 rounded-lg p-7 flex flex-col justify-between hover:border-zinc-700 transition-all">
<div>
<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold text-white uppercase">6 Months</h3>
<span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-zinc-800 text-gray-300 rounded">Best Value</span>
</div>
<div class="flex items-baseline gap-1 mb-4">
<span class="text-4xl font-black text-amber-400">৳4,500</span>
<span class="text-xs text-gray-400 uppercase">/ 6 Months</span>
</div>
<p class="text-xs text-gray-400 mb-6 pb-6 border-b border-zinc-800">
              Long-term commitment for monumental strength and physique progression.
            </p>
<ul class="space-y-3 text-xs text-gray-300 mb-8">
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Full gym access (7AM-11PM)
              </li>
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Maximum periodic saving
              </li>
<li class="flex items-center gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
Combined men &amp; women training floor</li>
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Dedicated bike &amp; car parking spot
              </li>
<li class="flex items-center gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" aria-hidden="true" class="lucide lucide-check w-4 h-4 text-amber-400 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                Senior coach progress review
              </li>
</ul>
</div>
<div>
<div class="text-[10px] text-center text-gray-500 mb-2 uppercase">+ ONE-TIME ADMISSION: ৳1,000</div>
<a class="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider text-center block rounded transition-colors" href="tel:01814088014">
              Join 6 Months
            </a>
</div>
</div>
</div>
</div>
</section>
<!-- END: MembershipSection -->
<section class="py-20 bg-[#0a0a0a] border-t border-zinc-800 relative overflow-hidden scroll-mt-24" data-purpose="student-transformations" id="transformations">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
<div>
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">PROVEN COACHING RESULTS</span>
<h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">REAL MEMBER PHYSIQUE TRANSFORMATIONS</h2>
</div>
<div class="flex gap-2 mt-4 sm:mt-0">
<span class="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trophy" aria-hidden="true" class="lucide lucide-trophy w-3.5 h-3.5 text-amber-400"><path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"></path><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"></path><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"></path></svg> STUDENT SUCCESS STORIES</span>
</div>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Student Physique Card 0 (New Featured Transformation) -->
<div class="bg-[#121212] rounded-lg border border-amber-500/50 overflow-hidden hover:border-amber-500 transition-all shadow-xl shadow-amber-500/15 group flex flex-col justify-between">
<div class="relative h-96 overflow-hidden bg-black flex items-center justify-center">
<img alt="Shredded Conditioning &amp; Aesthetic Symmetry" class="w-full h-full object-cover object-top filter contrast-110 group-hover:scale-105 transition-transform duration-500" src="/images/gym-09.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
<span class="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-[10px] px-2.5 py-1 rounded uppercase tracking-wider shadow-md">PEAK PHYSIQUE &amp; CONDITIONING</span>
<div class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">SHREDDED CORE &amp; SERRATUS</span>
<h4 class="text-lg font-black text-white uppercase">AESTHETIC SYMMETRY</h4>
</div>
</div>
<div class="p-5 border-t border-zinc-800">
<p class="text-xs text-gray-400 leading-relaxed mb-4">Intense conditioning protocols, single-digit body fat refinement, and strict dietary discipline mentored under Coach Md. Rajib.</p>
<div class="flex items-center justify-between text-[11px] pt-3 border-t border-zinc-800/80 font-semibold">
<span class="text-amber-400 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle" aria-hidden="true" class="lucide lucide-check-circle w-3.5 h-3.5 text-amber-400"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Coach Md. Rajib Mentorship</span>
<span class="text-gray-400 font-mono text-[10px]">TONGI ATHLETE</span>
</div>
</div>
</div>
<!-- Student Physique Card 1 -->
<div class="bg-[#121212] rounded-lg border border-zinc-800 overflow-hidden hover:border-amber-500/60 transition-all shadow-xl shadow-amber-500/10 group flex flex-col justify-between">
<div class="relative h-96 overflow-hidden bg-black flex items-center justify-center">
<img alt="Back &amp; V-Taper Development" class="w-full h-full object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-500" src="/images/gym-10.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
<span class="absolute top-3 left-3 bg-amber-500 text-black font-extrabold text-[10px] px-2.5 py-1 rounded uppercase tracking-wider shadow-md">BACK &amp; V-TAPER DEVELOPMENT</span>
<div class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">LAT SPREAD &amp; DENSITY</span>
<h4 class="text-lg font-black text-white uppercase">POSTERIOR CHAIN FOCUS</h4>
</div>
</div>
<div class="p-5 border-t border-zinc-800">
<p class="text-xs text-gray-400 leading-relaxed mb-4">Dedicated compound pulling mechanics, hyper-focused lats engagement, and strict progressive loading under head coach supervision.</p>
<div class="flex items-center justify-between text-[11px] pt-3 border-t border-zinc-800/80 font-semibold">
<span class="text-amber-400 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle" aria-hidden="true" class="lucide lucide-check-circle w-3.5 h-3.5 text-amber-400"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Coach Md. Rajib Mentorship</span>
<span class="text-gray-400 font-mono text-[10px]">TONGI ATHLETE</span>
</div>
</div>
</div>
<!-- Student Physique Card 2 -->
<div class="bg-[#121212] rounded-lg border border-amber-500/40 overflow-hidden hover:border-amber-500 transition-all shadow-xl shadow-amber-500/20 group flex flex-col justify-between">
<div class="relative h-96 overflow-hidden bg-black flex items-center justify-center">
<img alt="Hypertrophy &amp; Shredded 6-Pack Abs" class="w-full h-full object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-500" src="/images/gym-11.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
<span class="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-[10px] px-2.5 py-1 rounded uppercase tracking-wider shadow-md">HYPERTROPHY &amp; SHREDDED</span>
<div class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">ABS &amp; BICEP PEAK CONDITIONING</span>
<h4 class="text-lg font-black text-white uppercase">LEAN MASS TRANSFORMATION</h4>
</div>
</div>
<div class="p-5 border-t border-zinc-800">
<p class="text-xs text-gray-400 leading-relaxed mb-4">Targeted caloric deficit paired with peak hypertrophy lifting splits to expose vascularity, shredded core definition, and arm peak symmetry.</p>
<div class="flex items-center justify-between text-[11px] pt-3 border-t border-zinc-800/80 font-semibold">
<span class="text-amber-400 flex items-center gap-1"></span></div></div></div><div class="bg-[#121212] rounded-lg border border-amber-500/40 overflow-hidden hover:border-amber-500 transition-all shadow-xl shadow-amber-500/10 group flex flex-col justify-between"><div class="relative h-96 overflow-hidden bg-black flex items-center justify-center"><img alt="Back Muscularity &amp; Lat Development" class="w-full h-full object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-500" src="/images/gym-12.jpg"><div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div><span class="absolute top-3 left-3 bg-amber-500 text-black font-extrabold text-[10px] px-2.5 py-1 rounded uppercase tracking-wider shadow-md">BACK MUSCULARITY &amp; LATS</span><div class="absolute bottom-3 left-4 right-4"><span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">LAT SPREAD &amp; POSTERIOR DENSITY</span><h4 class="text-lg font-black text-white uppercase">V-TAPER PHYSIQUE</h4></div></div><div class="p-5 border-t border-zinc-800"><p class="text-xs text-gray-400 leading-relaxed mb-4">Deltoid cap development and upper-back thickness built on consistent progressive overload and specialized postural form execution.</p><div class="flex items-center justify-between text-[11px] pt-3 border-t border-zinc-800/80 font-semibold"><span class="text-amber-400 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle" aria-hidden="true" class="lucide lucide-check-circle w-3.5 h-3.5 text-amber-400"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Coach Md. Rajib Mentorship</span><span class="text-gray-400 font-mono text-[10px]">TONGI ATHLETE</span></div></div></div></div></div></section>

<!-- BEGIN: VerifiedFacilitiesSection -->
<section class="py-20 bg-[#0f0f0f] border-t border-zinc-800 scroll-mt-24" data-purpose="gym-facilities" id="facilities">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<!-- Section Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">OPTICAL ENVIRONMENT</span>
<h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">VERIFIED GYM FACILITIES</h2>
</div>
<p class="text-xs sm:text-sm text-gray-400 max-w-md mt-2 md:mt-0">
          Cleanliness, convenience, and spacious workout zones declared suitable for effective training without overcrowding.
        </p>
</div>
<!-- Facility Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Facility 1 -->
<div class="bg-zinc-900/90 rounded-lg border border-zinc-800 overflow-hidden flex flex-col justify-between p-5 hover:border-amber-500/50 transition-all"><div><div class="grid grid-cols-2 gap-2 mb-4 h-44"><div class="relative rounded overflow-hidden bg-zinc-950"><img alt="Gym Cricket Tournament" class="w-full h-full object-cover object-center filter brightness-90" src="/images/gym-04.jpg"><span class="absolute bottom-1 left-1 text-[9px] bg-black/80 text-amber-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Cricket Cup</span></div><div class="relative rounded overflow-hidden bg-zinc-950"><img alt="Annual Pool Day Outing" class="w-full h-full object-cover object-center filter brightness-90" src="/images/gym-05.jpg"><span class="absolute bottom-1 left-1 text-[9px] bg-black/80 text-amber-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Pool Day</span></div></div><div class="flex items-center gap-2 mb-1"><span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider">OUTDOORS &amp; COMMUNITY</span></div><h3 class="text-lg font-bold text-white uppercase mb-2">Gym Events</h3><p class="text-xs text-gray-400 leading-relaxed">Organized annual sports tournaments, cricket matches, swimming retreats, and team-building community events for active members.</p></div><div class="mt-4 pt-3 border-t border-zinc-800 flex items-center gap-2 text-[11px] text-amber-400 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trophy" aria-hidden="true" class="lucide lucide-trophy w-3.5 h-3.5"><path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"></path><path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"></path><path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"></path></svg><span class="">REGULAR COMMUNITY GATHERINGS &amp; TOURNAMENTS</span></div></div>
<!-- Facility 2 -->
<div class="bg-zinc-900/90 rounded-lg border border-zinc-800 overflow-hidden flex flex-col justify-between p-5 hover:border-amber-500/50 transition-all"><div>
<div class="h-44 bg-zinc-950 border border-zinc-800 rounded mb-4 flex flex-col items-center justify-center text-center p-4">
<div class="flex items-center gap-4 mb-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="user" aria-hidden="true" class="lucide lucide-user w-8 h-8 text-amber-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span class="text-amber-500 font-bold text-xl">&amp;</span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="user" aria-hidden="true" class="lucide lucide-user w-8 h-8 text-amber-300"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<span class="text-xs font-extrabold uppercase tracking-widest text-white">UNIFIED TRAINING ENVIRONMENT</span>
<span class="text-[10px] text-gray-500 uppercase mt-1">INCLUSIVE MEN &amp; WOMEN SPACE</span>
</div>
<h3 class="text-lg font-bold text-white uppercase mb-2">Combined Men &amp; Women Section</h3>
<p class="text-xs text-gray-400 leading-relaxed">
              A fully equipped, respectful, and motivating workout atmosphere open to both male and female fitness enthusiasts with professional trainer guidance throughout.
            </p>
</div>
<div class="mt-4 pt-3 border-t border-zinc-800 flex items-center gap-2 text-[11px] text-amber-400 font-semibold">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle" aria-hidden="true" class="lucide lucide-check-circle w-3.5 h-3.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span class="">INCLUSIVE &amp; RESPECTFUL ATMOSPHERE</span>
</div></div>
<!-- Facility 3 -->
<div class="bg-zinc-900/90 rounded-lg border border-zinc-800 overflow-hidden flex flex-col justify-between p-5 hover:border-amber-500/50 transition-all">
<div>
<div class="h-44 bg-zinc-950 border border-zinc-800 rounded mb-4 flex flex-col items-center justify-center text-center p-4">
<div class="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2">
<span class="text-xl font-black">P</span>
</div>
<span class="text-xs font-extrabold uppercase tracking-widest text-white">ROAD ACCESS &amp; COMPOUND</span>
<span class="text-[10px] text-gray-500 uppercase mt-1">SECURITY MONITORED ACCESS</span>
</div>
<h3 class="text-lg font-bold text-white uppercase mb-2">Dedicated Parking Facilities</h3>
<p class="text-xs text-gray-400 leading-relaxed">
              Seamless arrival and departure with designated on-site parking spots so that you don't have to worry about looking for parking spots before your workout.
            </p>
</div>
<div class="mt-4 pt-3 border-t border-zinc-800 flex items-center gap-2 text-[11px] text-amber-400 font-semibold">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle" aria-hidden="true" class="lucide lucide-check-circle w-3.5 h-3.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span class="">AVAILABLE TO ALL MEMBERS</span>
</div>
</div>
</div>
</div>
</section>
<!-- END: VerifiedFacilitiesSection -->
<!-- BEGIN: TrainingProgramsSection -->
<section class="py-20 bg-[#0a0a0a] scroll-mt-24" data-purpose="training-programs" id="programs">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-2xl mx-auto mb-14">
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">SPECIALIZED PATHWAYS</span>
<h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">TRAINING PROGRAMS</h2>
<p class="text-xs sm:text-sm text-gray-400">
          Engineered routines guided directly by our coaching team. Program enrollment and personalized schedule adjustments are handled step-by-step in the gym.
        </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Program 1 -->
<div class="bg-[#121212] border border-zinc-800 p-6 rounded-lg hover:border-amber-500 transition-all group">
<div class="w-10 h-10 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-black transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="dumbbell" aria-hidden="true" class="lucide lucide-dumbbell w-5 h-5"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<h3 class="text-base font-bold text-white uppercase mb-2">Strength &amp; Conditioning</h3>
<p class="text-xs text-gray-400 leading-relaxed mb-4">
            Compound mechanics, power development, and progressive density optimization with free weights and plate stacks.
          </p>
<span class="text-[11px] font-bold text-amber-500 flex items-center gap-1 uppercase tracking-wider">
            Inquire In Person <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-right" aria-hidden="true" class="lucide lucide-chevron-right w-3 h-3"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
<!-- Program 2 -->
<div class="bg-[#121212] border border-zinc-800 p-6 rounded-lg hover:border-amber-500 transition-all group">
<div class="w-10 h-10 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-black transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="flame" aria-hidden="true" class="lucide lucide-flame w-5 h-5"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<h3 class="text-base font-bold text-white uppercase mb-2">Body Transformation</h3>
<p class="text-xs text-gray-400 leading-relaxed mb-4">
            Targeted fat reduction and hyper-focused hypertrophy tracks tailored to individual metabolic starting points.
          </p>
<span class="text-[11px] font-bold text-amber-500 flex items-center gap-1 uppercase tracking-wider">
            Inquire In Person <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-right" aria-hidden="true" class="lucide lucide-chevron-right w-3 h-3"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
<!-- Program 3 -->
<div class="bg-[#121212] border border-zinc-800 p-6 rounded-lg hover:border-amber-500 transition-all group">
<div class="w-10 h-10 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-black transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="user-check" aria-hidden="true" class="lucide lucide-user-check w-5 h-5"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 class="text-base font-bold text-white uppercase mb-2">Personal Coaching</h3>
<p class="text-xs text-gray-400 leading-relaxed mb-4">
            1-on-1 private form supervision, biomechanic assessment, and continuous exercise execution scrutiny.
          </p>
<span class="text-[11px] font-bold text-amber-500 flex items-center gap-1 uppercase tracking-wider">
            Coaching On-Floor <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-right" aria-hidden="true" class="lucide lucide-chevron-right w-3 h-3"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
<!-- Program 4 -->
<div class="bg-[#121212] border border-zinc-800 p-6 rounded-lg hover:border-amber-500 transition-all group">
<div class="w-10 h-10 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-black transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="activity" aria-hidden="true" class="lucide lucide-activity w-5 h-5"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 class="text-base font-bold text-white uppercase mb-2">General Fitness</h3>
<p class="text-xs text-gray-400 leading-relaxed mb-4">
            Daily cardio-conditioning, core stamina, and functional movement circuits for sustained high energy and posture clarity.
          </p>
<span class="text-[11px] font-bold text-amber-500 flex items-center gap-1 uppercase tracking-wider">
            Daily Floor Access <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-right" aria-hidden="true" class="lucide lucide-chevron-right w-3 h-3"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
</div>
</div>
</section>
<!-- END: TrainingProgramsSection -->
<!-- BEGIN: CoachesSection -->
<section class="py-20 bg-[#0e0e0e] border-t border-zinc-800 scroll-mt-24" data-purpose="master-coaches" id="trainers">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<!-- Section Header -->
<div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
<div>
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">MEET THE FOUNDERS</span>
<h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">THE OWNERS BEHIND FITNESS PARK</h2>
</div>
<div class="flex gap-2 mt-4 sm:mt-0">
<span class="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded">15+ YEARS EXPERIENCE COACH</span>
<span class="px-3 py-1 bg-zinc-800 text-gray-300 text-xs font-bold rounded">2 OWNERS &amp; FOUNDERS</span>
</div>
</div>
<!-- Coach Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
<!-- Coach 1: Head Coach & National Champion -->
<div class="bg-zinc-900/80 rounded-lg border border-amber-500/40 p-6 flex flex-col justify-between hover:border-amber-500 transition-all shadow-lg shadow-amber-500/10 relative">
<div class="absolute -top-3 left-4 bg-amber-500 text-black font-extrabold text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider">OWNER &amp; HEAD COACH</div>
<div>
<div class="rounded overflow-hidden mb-4 border border-zinc-800 relative h-52">
<img alt="National Champion &amp; Head Coach" class="w-full h-full object-cover object-top" src="/images/gym-06.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div class="absolute bottom-2 left-2 bg-black/80 text-white font-extrabold text-xs px-2.5 py-1 rounded border border-zinc-700">15+ YEARS EXPERIENCE <span class="text-amber-400 text-[10px] font-normal">| MASTER COACH</span></div>
</div>
<h3 class="text-lg font-bold text-white uppercase mb-1">Coach Md. Rajib</h3>
<p class="text-xs font-bold text-amber-400 uppercase tracking-wide mb-3">Head Coach &amp; Master Trainer</p>
<p class="text-xs text-gray-400 leading-relaxed mb-4">Specializes in competitive bodybuilding, stage presentation, biomechanics, and championship-level hypertrophy protocols with 10+ years of pedigree.</p>
<div class="p-2.5 rounded bg-black/60 border border-zinc-800 text-[11px] space-y-1 mb-4">
<div class="flex justify-between"><span class="text-gray-400">Specialty:</span><span class="text-gray-200 font-semibold">Competition Prep &amp; Hypertrophy</span></div>
<div class="flex justify-between"><span class="text-gray-400">Floor Schedule:</span><span class="text-amber-400 font-semibold">Morning &amp; Evening Shifts</span></div>
</div>
</div>
<div class="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-gray-300 font-semibold">
<span class="flex items-center gap-1.5 text-amber-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="award" aria-hidden="true" class="lucide lucide-award w-4 h-4"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg> 15+ YEARS EXPERIENCE</span>
<span class="text-[10px] text-zinc-500 font-mono">14+ HRS ON-FLOOR</span>
</div>
</div>
<!-- Owner 2: Dr. Himel -->
<div class="bg-zinc-900/80 rounded-lg border border-amber-500/40 p-6 flex flex-col justify-between hover:border-amber-500 transition-all shadow-lg shadow-amber-500/10 relative">
<div class="absolute -top-3 left-4 bg-amber-500 text-black font-extrabold text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider">OWNER</div>
<div>
<div class="rounded overflow-hidden mb-4 border border-zinc-800 relative h-52">
<img alt="Fitness Park Gym Owner Dr. Himel" class="w-full h-full object-cover object-top" src="/images/Owner dr himel.jpeg">
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div class="absolute bottom-2 left-2 bg-black/80 text-white font-extrabold text-xs px-2.5 py-1 rounded border border-zinc-700">CO-OWNER &amp; HEALTH DIRECTOR <span class="text-amber-400 text-[10px] font-normal">| FITNESS PARK</span></div>
</div>
<h3 class="text-lg font-bold text-white uppercase mb-1">Dr. Himel</h3>
<p class="text-xs font-bold text-amber-400 uppercase tracking-wide mb-3">Co-Owner &amp; Health Director</p>
<p class="text-xs text-gray-400 leading-relaxed mb-4">Guides member health, injury prevention, and safe training practice across the men&rsquo;s and women&rsquo;s floors so every member can train hard without risking wellbeing.</p>
<div class="p-2.5 rounded bg-black/60 border border-zinc-800 text-[11px] space-y-1 mb-4">
<div class="flex justify-between"><span class="text-gray-400">Specialty:</span><span class="text-gray-200 font-semibold">Health &amp; Wellness</span></div>
<div class="flex justify-between"><span class="text-gray-400">Coverage:</span><span class="text-amber-400 font-semibold">Men&rsquo;s &amp; Women&rsquo;s Floors</span></div>
</div>
</div>
<div class="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-gray-300 font-semibold">
<span class="flex items-center gap-1.5 text-amber-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="activity" aria-hidden="true" class="lucide lucide-activity w-4 h-4"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> HEALTH &amp; WELLNESS</span>
<span class="text-[10px] text-zinc-500 font-mono uppercase">SAFE TRAINING</span>
</div>
</div>
</div>
<div class="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-900/60 p-4 rounded-lg border">
<div class="flex items-center gap-4 text-xs">
<div class="px-3 py-1.5 bg-black border border-zinc-800 rounded text-center">
<span class="text-gray-400 block text-[10px]">ON-FLOOR COACHING STAFF</span>
<span class="text-amber-400 font-bold uppercase">2 OWNER COACHES</span>
</div>
<div class="hidden sm:block text-gray-400 text-xs">
Direct hands-on supervision, custom workout splits, and posture correction daily.
</div>
</div>
<a class="w-full sm:w-auto px-5 py-2.5 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-extrabold uppercase rounded transition-colors" href="tel:+8801922749473">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="phone" aria-hidden="true" class="lucide lucide-phone w-3.5 h-3.5 text-black"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
Consult With Coaches: +880 1922-749473
</a>
</div></div>
</section>
<!-- END: CoachesSection -->
<!-- BEGIN: GymGallerySection -->
<section class="py-20 bg-[#0e0e0e] border-t border-zinc-800 scroll-mt-24 overflow-hidden" data-purpose="gym-gallery" id="gallery">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
<div>
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">REAL ATMOSPHERE</span>
<h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">GYM GALLERY &amp; ACTION</h2>
</div>
<p class="text-xs text-gray-400 mt-2 sm:mt-0 font-mono">Verified photography straight from FITNESS PARK GYM floor.</p>
</div>
</div>

<!-- Sliding Gallery Marquee (right to left) -->
<div class="gallery-marquee relative">
<div class="gallery-track">
<figure class="gallery-slide group">
<img alt="The Fitness Park Gym Collective" loading="lazy" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-13.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">COMMUNITY GROUP</span>
<h4 class="text-sm font-black text-white uppercase">THE FITNESS PARK GYM COLLECTIVE</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Championship Medal Reception" loading="lazy" decoding="async" class="w-full h-full object-cover object-top" src="/images/gym-14.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">TROPHY CEREMONY</span>
<h4 class="text-sm font-black text-white uppercase">CHAMPIONSHIP MEDAL RECEPTION</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Dedicated Trainer Workshop" loading="lazy" decoding="async" class="w-full h-full object-cover object-bottom" src="/images/gym-15.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">POSTURE SUPERVISION</span>
<h4 class="text-sm font-black text-white uppercase">DEDICATED TRAINER WORKSHOP</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Clean Spacious Workout Zones" loading="lazy" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-16.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">TRAINING FLOOR</span>
<h4 class="text-sm font-black text-white uppercase">CLEAN, SPACIOUS WORKOUT ZONES</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Official Workout Hub" loading="lazy" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-17.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">OFFICIAL WORKOUT HUB</span>
<h4 class="text-sm font-black text-white uppercase">FITNESS PARK GYM</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Gym Floor Equipment" loading="lazy" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-18.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">COMMERCIAL EQUIPMENT</span>
<h4 class="text-sm font-black text-white uppercase">FULL STRENGTH FLOOR</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Members Training Session" loading="lazy" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-05.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">DAILY SESSIONS</span>
<h4 class="text-sm font-black text-white uppercase">MEMBERS IN ACTION</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Cardio And Conditioning Zone" loading="lazy" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-06.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">CARDIO ZONE</span>
<h4 class="text-sm font-black text-white uppercase">CONDITIONING AREA</h4>
</figcaption>
</figure>

<figure class="gallery-slide group">
<img alt="The Fitness Park Gym Collective" loading="lazy" aria-hidden="true" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-13.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">COMMUNITY GROUP</span>
<h4 class="text-sm font-black text-white uppercase">THE FITNESS PARK GYM COLLECTIVE</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Championship Medal Reception" loading="lazy" aria-hidden="true" decoding="async" class="w-full h-full object-cover object-top" src="/images/gym-14.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">TROPHY CEREMONY</span>
<h4 class="text-sm font-black text-white uppercase">CHAMPIONSHIP MEDAL RECEPTION</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Dedicated Trainer Workshop" loading="lazy" aria-hidden="true" decoding="async" class="w-full h-full object-cover object-bottom" src="/images/gym-15.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">POSTURE SUPERVISION</span>
<h4 class="text-sm font-black text-white uppercase">DEDICATED TRAINER WORKSHOP</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Clean Spacious Workout Zones" loading="lazy" aria-hidden="true" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-16.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">TRAINING FLOOR</span>
<h4 class="text-sm font-black text-white uppercase">CLEAN, SPACIOUS WORKOUT ZONES</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Official Workout Hub" loading="lazy" aria-hidden="true" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-17.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">OFFICIAL WORKOUT HUB</span>
<h4 class="text-sm font-black text-white uppercase">FITNESS PARK GYM</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Gym Floor Equipment" loading="lazy" aria-hidden="true" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-18.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">COMMERCIAL EQUIPMENT</span>
<h4 class="text-sm font-black text-white uppercase">FULL STRENGTH FLOOR</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Members Training Session" loading="lazy" aria-hidden="true" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-05.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">DAILY SESSIONS</span>
<h4 class="text-sm font-black text-white uppercase">MEMBERS IN ACTION</h4>
</figcaption>
</figure>
<figure class="gallery-slide group">
<img alt="Cardio And Conditioning Zone" loading="lazy" aria-hidden="true" decoding="async" class="w-full h-full object-cover object-center" src="/images/gym-06.jpg">
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
<figcaption class="absolute bottom-3 left-4 right-4">
<span class="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">CARDIO ZONE</span>
<h4 class="text-sm font-black text-white uppercase">CONDITIONING AREA</h4>
</figcaption>
</figure>
</div>
<div class="gallery-fade gallery-fade-left"></div>
<div class="gallery-fade gallery-fade-right"></div>
</div>
</section>
<!-- END: GymGallerySection -->
<!-- BEGIN: TestimonialsSection -->
<section class="py-20 bg-[#0a0a0a]" data-purpose="trainee-reviews">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center max-w-xl mx-auto mb-14">
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">COMMUNITY VOICES</span>
<h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">TRAINEE PERSPECTIVES</h2>
<p class="text-xs text-gray-400">Authentic impressions from members training at Tongi - Kaliganj - Gorashal - Pachdona Rd, Tongi.</p>
</div>
<!-- Testimonials Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Review 1 -->
<div class="bg-[#121212] border border-zinc-800 rounded-lg p-6 flex flex-col justify-between">
<div>
<div class="flex text-amber-400 mb-3 text-xs gap-0.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p class="text-xs text-gray-300 italic leading-relaxed mb-6">"The best thing about FITNESS PARK GYM is the dedicated trainers. Having a 15-year experienced coach guide you on form makes all the difference in tone and hypertrophy."</p>
</div>
<div class="flex items-center gap-3 pt-4 border-t border-zinc-800">
<div class="w-8 h-8 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              T
            </div>
<div>
<h5 class="text-xs font-bold text-white">Tongi Resident Member</h5>
<span class="text-[10px] text-gray-500">Regular Trainee</span>
</div>
</div>
</div>
<!-- Review 2 -->
<div class="bg-[#121212] border border-zinc-800 rounded-lg p-6 flex flex-col justify-between"><div>
<div class="flex text-amber-400 mb-3 text-xs gap-0.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p class="text-xs text-gray-300 italic leading-relaxed mb-6">"The combined training floor provides a safe, highly motivating, and professional atmosphere for both men and women. The coaches ensure everyone trains with confidence and proper form."</p>
</div>
<div class="flex items-center gap-3 pt-4 border-t border-zinc-800">
<div class="w-8 h-8 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              F
            </div>
<div>
<h5 class="text-xs font-bold text-white">Fitness Member</h5>
<span class="text-[10px] text-gray-500">Active Member</span>
</div>
</div></div>
<!-- Review 3 -->
<div class="bg-[#121212] border border-zinc-800 rounded-lg p-6 flex flex-col justify-between">
<div>
<div class="flex text-amber-400 mb-3 text-xs gap-0.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" aria-hidden="true" class="lucide lucide-star w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p class="text-xs text-gray-300 italic leading-relaxed mb-6">
              "7AM to 11PM timing is great for working professionals in Gazipur. You never have to rush your sets, and the quarterly ৳2,500 rate is an affordable deal."
            </p>
</div>
<div class="flex items-center gap-3 pt-4 border-t border-zinc-800">
<div class="w-8 h-8 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              Q
            </div>
<div>
<h5 class="text-xs font-bold text-white">Quarterly Member</h5>
<span class="text-[10px] text-gray-500">Evening Shift</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- END: TestimonialsSection -->
<!-- BEGIN: LocationSection -->
<section class="py-20 bg-[#0d0d0d] border-t border-zinc-800 scroll-mt-24" data-purpose="location-contact" id="contact">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<!-- Contact Information Details -->
<div class="lg:col-span-6 space-y-6">
<div>
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">NAVIGATION</span>
<h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">FIND US IN TONGI, GAZIPUR</h2>
</div>
<!-- Info Blocks -->
<div class="space-y-4">
<div class="p-4 rounded-lg bg-zinc-900 border border-zinc-800 flex items-start gap-4">
<div class="w-9 h-9 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-5 h-5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div><span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">GYM LOCATION</span><p class="text-sm font-semibold text-white">Tongi - Kaliganj - Gorashal - Pachdona Rd, Tongi</p><p class="text-xs text-gray-400">Tongi, Bangladesh, 1710</p></div>
</div>
<div class="p-4 rounded-lg bg-zinc-900 border border-zinc-800 flex items-start gap-4">
<div class="w-9 h-9 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="phone-call" aria-hidden="true" class="lucide lucide-phone-call w-5 h-5"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">DIRECT CALL / INQUIRIES</span>
<a class="text-sm font-bold text-amber-400 hover:underline" href="tel:+8801922749473">+880 1922-749473</a>
<p class="text-xs text-gray-400">Instant answers during operating hours.</p>
</div>
</div>
<div class="p-4 rounded-lg bg-zinc-900 border border-zinc-800 flex items-start gap-4">
<div class="w-9 h-9 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="clock" aria-hidden="true" class="lucide lucide-clock w-5 h-5"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</div>
<div>
<span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">OPEN HOURS</span>
<p class="text-sm font-bold text-white">7:00 AM - 11:00 PM</p>
<p class="text-xs text-gray-400">Open daily Monday through Sunday.</p>
</div>
</div>
</div>
<a class="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded shadow transition-all" href="https://maps.google.com/?q=Tongi+-+Kaliganj+-+Gorashal+-+Pachdona+Rd,+Tongi,+Bangladesh,+1710" rel="noopener noreferrer" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="navigation" aria-hidden="true" class="lucide lucide-navigation w-4 h-4"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg> GET DIRECTIONS
          </a>
</div>
<!-- Stylized Map Container -->
<div class="lg:col-span-6">
<div class="h-96 w-full rounded-lg border border-zinc-800 bg-zinc-950 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-2xl">
<!-- Simulated grid map backdrop -->
<div class="absolute inset-0 opacity-15 bg-[radial-gradient(#amber_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div class="relative z-10">
<div class="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-7 h-7 text-amber-400"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h4 class="text-lg font-black text-white uppercase tracking-wider">FITNESS PARK GYM COMPOUND</h4>
<p class="text-xs text-amber-400 font-semibold mt-1">TONGI - KALIGANJ - GORASHAL - PACHDONA RD • TONGI, 1710</p>
<p class="text-xs text-gray-400 max-w-sm mx-auto mt-2 leading-relaxed">
                Dedicated on-site road access with available street parking for the convenience of all gym members and athletes.
              </p>
<div class="mt-6 inline-flex items-center gap-2 text-[10px] uppercase font-mono text-zinc-500 border border-zinc-800 px-3 py-1 rounded">
<span class="">GPS: TONGI, GAZIPUR</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- END: LocationSection -->
<!-- BEGIN: FAQSection -->
<section class="py-20 bg-[#0a0a0a] border-t border-zinc-800" data-purpose="faq-section">
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-12">
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">CLARIFICATIONS</span>
<h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">FREQUENTLY ASKED QUESTIONS</h2>
<p class="text-xs text-gray-400">Directly verified details for new and returning members.</p>
</div>
<!-- Accordion List -->
<div class="space-y-3">
<details class="group bg-zinc-900 border border-zinc-800 rounded-md p-4 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
<summary class="flex items-center justify-between font-bold text-sm text-white uppercase tracking-wide list-none">
<span class="">WHAT IS THE GYM ADMISSION FEE?</span>
<span class="transition-transform duration-300 group-open:rotate-180 text-amber-400">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" aria-hidden="true" class="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p class="mt-3 text-xs text-gray-400 leading-relaxed pt-2 border-t border-zinc-800">The admission fee at FITNESS PARK GYM is ৳1,000 (one-time fee), which covers official membership registration and induction.</p>
</details>
<details class="group bg-zinc-900 border border-zinc-800 rounded-md p-4 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
<summary class="flex items-center justify-between font-bold text-sm text-white uppercase tracking-wide list-none">
<span class="">WHAT ARE THE MEMBERSHIP PRICES?</span>
<span class="transition-transform duration-300 group-open:rotate-180 text-amber-400">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" aria-hidden="true" class="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p class="mt-3 text-xs text-gray-400 leading-relaxed pt-2 border-t border-zinc-800">
            Our membership packages are ৳1,000 per month, ৳2,500 for 3 months, and ৳4,500 for 6 months.
          </p>
</details>
<details class="group bg-zinc-900 border border-zinc-800 rounded-md p-4 [&amp;_summary::-webkit-details-marker]:none cursor-pointer"><summary class="flex items-center justify-between font-bold text-sm text-white uppercase tracking-wide list-none">
<span class="">IS FITNESS PARK GYM A COMBINED SECTION FOR MEN AND WOMEN?</span>
<span class="transition-transform duration-300 group-open:rotate-180 text-amber-400">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" aria-hidden="true" class="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p class="mt-3 text-xs text-gray-400 leading-relaxed pt-2 border-t border-zinc-800">
            Yes, Fitness Park Gym features a unified, combined training environment for both men and women, maintained with a safe, respectful atmosphere and full supervision from our professional coaching staff.
          </p></details>
<details class="group bg-zinc-900 border border-zinc-800 rounded-md p-4 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
<summary class="flex items-center justify-between font-bold text-sm text-white uppercase tracking-wide list-none">
<span class="">ARE THERE PARKING FACILITIES?</span>
<span class="transition-transform duration-300 group-open:rotate-180 text-amber-400">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" aria-hidden="true" class="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p class="mt-3 text-xs text-gray-400 leading-relaxed pt-2 border-t border-zinc-800">
            Yes, dedicated bike and vehicle parking is accessible directly outside the gym facility on Madhumita Road.
          </p>
</details>
<details class="group bg-zinc-900 border border-zinc-800 rounded-md p-4 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
<summary class="flex items-center justify-between font-bold text-sm text-white uppercase tracking-wide list-none">
<span class="">WHAT ARE THE GYM OPENING HOURS?</span>
<span class="transition-transform duration-300 group-open:rotate-180 text-amber-400">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" aria-hidden="true" class="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p class="mt-3 text-xs text-gray-400 leading-relaxed pt-2 border-t border-zinc-800">FITNESS PARK GYM is open daily from 7:00 AM until 11:00 PM at night.</p>
</details>
<details class="group bg-zinc-900 border border-zinc-800 rounded-md p-4 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
<summary class="flex items-center justify-between font-bold text-sm text-white uppercase tracking-wide list-none">
<span class="">HOW MANY TRAINERS ARE AVAILABLE ON-SITE?</span>
<span class="transition-transform duration-300 group-open:rotate-180 text-amber-400">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" aria-hidden="true" class="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p class="mt-3 text-xs text-gray-400 leading-relaxed pt-2 border-t border-zinc-800">We have 3 dedicated experienced coaches stationed on-site providing hands-on supervision throughout operational shifts, including our 15+ Years Experienced Head Coach for supreme form correction and bodybuilding guidance.</p>
</details>
<details class="group bg-zinc-900 border border-zinc-800 rounded-md p-4 [&amp;_summary::-webkit-details-marker]:none cursor-pointer">
<summary class="flex items-center justify-between font-bold text-sm text-white uppercase tracking-wide list-none">
<span class="">WHERE IS FITNESS PARK GYM LOCATED?</span>
<span class="transition-transform duration-300 group-open:rotate-180 text-amber-400">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" aria-hidden="true" class="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p class="mt-3 text-xs text-gray-400 leading-relaxed pt-2 border-t border-zinc-800">We are located on Tongi - Kaliganj - Gorashal - Pachdona Rd, Tongi, Tongi, Bangladesh, 1710. You can reach us quickly from any landmark in the Tongi region.</p>
</details>
</div>
</div>
</section>
<!-- END: FAQSection -->

<!-- BEGIN: BmiCalculatorSection -->
<section class="py-20 bg-[#0b0b0b] border-t border-zinc-800 scroll-mt-24" data-purpose="bmi-calculator" id="bmi">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="max-w-xl mx-auto text-center mb-10">
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">FREE HEALTH TOOL</span>
<h2 class="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">BMI CALCULATOR</h2>
<p class="text-sm text-gray-400 leading-relaxed">Find out your Body Mass Index in seconds. A quick, accurate check of where you stand, plus a free diet plan for your result.</p>
</div>

<div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

<!-- INPUT CARD -->
<div class="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 sm:p-7 shadow-2xl">
<div class="flex items-center gap-2 mb-6">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-amber-400"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
<span class="text-[11px] font-black text-white uppercase tracking-widest">Your Measurements</span>
</div>

<span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Gender</span>
<div class="grid grid-cols-2 gap-3 mb-6">
<button type="button" data-bmi-gender="male" class="bmi-toggle is-active px-3 py-2.5 rounded-md border text-xs font-bold uppercase tracking-wider transition-all">Male</button>
<button type="button" data-bmi-gender="female" class="bmi-toggle px-3 py-2.5 rounded-md border text-xs font-bold uppercase tracking-wider transition-all">Female</button>
</div>

<!-- Weight slider -->
<div class="mb-6">
<div class="flex items-end justify-between mb-2">
<span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Weight</span>
<span class="text-right leading-none"><span id="bmi-weight-out" class="text-2xl font-black text-amber-400">70</span><span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">kg</span></span>
</div>
<input id="bmi-weight" type="range" min="30" max="200" step="1" value="70" class="bmi-range w-full" aria-label="Weight in kilograms">
<div class="flex justify-between text-[9px] font-semibold text-gray-500 uppercase tracking-wider mt-1.5">
<span>30 kg</span>
<span id="bmi-weight-lb" class="text-gray-400 font-mono normal-case tracking-normal">154 lb</span>
<span>200 kg</span>
</div>
</div>

<!-- Height slider (feet + inches) -->
<div class="mb-6">
<div class="flex items-end justify-between mb-2">
<span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Height</span>
<span class="text-right leading-none"><span id="bmi-height-out" class="text-2xl font-black text-amber-400">5&#39; 7&quot;</span></span>
</div>
<input id="bmi-height" type="range" min="48" max="84" step="1" value="67" class="bmi-range w-full" aria-label="Height in feet and inches">
<div class="flex justify-between text-[9px] font-semibold text-gray-500 uppercase tracking-wider mt-1.5">
<span>4&#39; 0&quot;</span>
<span id="bmi-height-cm" class="text-gray-400 font-mono normal-case tracking-normal">170 cm</span>
<span>7&#39; 0&quot;</span>
</div>
</div>

<label class="block mb-6">
<span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-1.5">Age (years)</span>
<input id="bmi-age" type="number" inputmode="numeric" min="10" max="100" step="1" placeholder="e.g. 25" class="w-full bg-zinc-950 border border-zinc-700 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-amber-500 transition-all">
</label>

<div class="grid grid-cols-3 gap-3">
<button id="bmi-calc" type="button" class="col-span-2 px-5 py-3 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-black text-xs uppercase tracking-wider rounded-md shadow-lg shadow-amber-500/25 transition-all">Calculate BMI</button>
<button id="bmi-reset" type="button" class="px-4 py-3 bg-zinc-950 border border-zinc-700 hover:border-amber-500/60 text-gray-300 font-bold text-xs uppercase tracking-wider rounded-md transition-all">Reset</button>
</div>
<p class="text-[10px] text-gray-500 mt-3 leading-relaxed">BMI is a general guide only. It does not account for muscle mass, so consult our coaches for a full body composition check.</p>
</div>

<!-- RESULT CARD -->
<div class="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 sm:p-7 shadow-2xl flex flex-col">
<div id="bmi-empty" class="flex-1 flex flex-col items-center justify-center text-center py-10">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-zinc-700 mb-3"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
<span class="text-xs text-gray-500 leading-relaxed max-w-[16rem]">Enter your details and press Calculate BMI for an instant result.</span>
</div>

<div id="bmi-result" class="hidden flex-1">
<div class="flex items-center justify-between gap-4 p-4 rounded-lg bg-zinc-950 border border-zinc-800 mb-5">
<div>
<span class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Your BMI</span>
<div id="bmi-value" class="text-4xl sm:text-5xl font-black text-amber-400 leading-none mt-1">--</div>
</div>
<span id="bmi-category" class="inline-flex items-center px-3 py-1.5 rounded-full border text-[11px] font-extrabold uppercase tracking-wider bg-zinc-900 border-zinc-700 text-emerald-400">Normal</span>
</div>

<div class="relative h-2 rounded-full bg-zinc-800 overflow-hidden mb-2">
<div id="bmi-fill" class="absolute inset-y-0 left-0 w-0 rounded-full bg-emerald-400 transition-all duration-500"></div>
</div>
<div class="flex justify-between text-[9px] font-semibold text-gray-500 uppercase tracking-wider mb-5">
<span>Underweight</span>
<span>Normal</span>
<span>Overweight</span>
<span>Obese</span>
</div>

<div class="grid grid-cols-2 gap-3 mb-5">
<div class="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
<span class="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Healthy Weight Range</span>
<span id="bmi-ideal" class="text-sm font-black text-white">--</span>
</div>
<div class="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
<span class="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Daily Calorie Target</span>
<span id="bmi-calories" class="text-sm font-black text-white">--</span>
</div>
</div>

<p id="bmi-note" class="text-xs text-gray-400 leading-relaxed mb-5"></p>

<button id="bmi-diet-btn" type="button" class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 hover:border-amber-500 text-amber-400 font-black text-xs uppercase tracking-wider rounded-md transition-all">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-amber-400"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<span>See Diet Plan</span>
</button>
</div>
</div>
</div>

<!-- DIET PLAN PANEL -->
<div id="bmi-diet" class="hidden max-w-5xl mx-auto mt-6 bg-zinc-900/80 border border-amber-500/30 rounded-xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10">
<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-5 border-b border-zinc-800">
<div>
<span class="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">GENERIC NUTRITION GUIDE</span>
<h3 id="bmi-diet-title" class="text-2xl font-black text-white uppercase tracking-tight">Your Diet Plan</h3>
</div>
<span id="bmi-diet-goal" class="inline-flex items-center px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-extrabold uppercase tracking-wider self-start sm:self-auto">Maintain</span>
</div>
<div id="bmi-diet-meals" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"></div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div>
<span class="text-[11px] font-black text-emerald-400 uppercase tracking-widest block mb-3">Eat More Of</span>
<ul id="bmi-diet-eat" class="space-y-2"></ul>
</div>
<div>
<span class="text-[11px] font-black text-rose-400 uppercase tracking-widest block mb-3">Limit Or Avoid</span>
<ul id="bmi-diet-avoid" class="space-y-2"></ul>
</div>
</div>
<div class="mt-6 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
<p class="text-[11px] text-gray-500 leading-relaxed">This is a general plan only. For a personalised diet matched to your body, talk to our coaches at FITNESS PARK GYM.</p>
<a href="tel:+8801922749473" class="flex-shrink-0 px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-black text-xs uppercase tracking-wider rounded-md shadow-lg shadow-amber-500/25 transition-all hover:from-amber-300">Talk To A Coach</a>
</div>
</div>

</div>
</section>
<!-- END: BmiCalculatorSection -->

<!-- BEGIN: BottomCtaBanner -->
<section class="py-12 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black" data-purpose="bottom-cta">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex flex-col lg:flex-row items-center justify-between gap-6">
<div>
<span class="text-xs font-black uppercase tracking-widest text-black/80 block mb-1">PREMIUM ELITE ATHLETICS</span>
<h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight">"A PERFECT PLACE FOR BODYBUILDING AND FITNESS"</h2>
<p class="text-xs font-semibold text-black/90 mt-1 max-w-xl">Step into FITNESS PARK GYM in Tongi, Gazipur. Guided by 15+ years coaching expertise, combined men and women environment, and commercial fitness equipment.</p>
</div>
<div class="flex flex-col sm:flex-row items-center gap-3">
<a class="px-6 py-3 bg-black hover:bg-zinc-900 text-white font-bold text-xs uppercase tracking-wider rounded shadow transition-all inline-flex items-center gap-2" href="tel:+8801922749473"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="phone" aria-hidden="true" class="lucide lucide-phone w-4 h-4 text-amber-400"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> CALL: +880 1922-749473</a>
<a class="px-6 py-3 bg-white/90 hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded shadow transition-all" href="#membership">
            JOIN NOW (ADMISSION TK 500)
          </a>
</div>
</div>
</div>
</section>
<!-- END: BottomCtaBanner -->
<!-- BEGIN: MainFooter -->
<footer class="bg-black text-gray-400 py-16 border-t border-zinc-800" data-purpose="main-footer">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
<!-- Column 1: Identity -->
<div>
<div class="flex items-center gap-2 mb-3">
<img src="/logo.png" alt="Fitness Park Gym logo" class="w-8 h-8 rounded-full object-cover border border-amber-500 flex-shrink-0">
<div>
<span class="text-base font-black text-amber-400 uppercase tracking-wider block leading-tight">FITNESS PARK GYM</span>
<span class="text-[9px] text-gray-500 font-bold uppercase tracking-widest">TONGI, GAZIPUR</span>
</div>
</div>
<p class="text-xs text-gray-400 uppercase font-semibold mb-3">"A PERFECT PLACE FOR BODYBUILDING AND FITNESS"</p>
<p class="text-xs text-gray-500 leading-relaxed mb-4">
            Reputable athletic sanctuary engineered for hypertrophy, posture correction, fitness discipline, and serious performance.
          </p>
<div class="inline-flex items-center gap-1.5 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="shield-check" aria-hidden="true" class="lucide lucide-shield-check w-3 h-3"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span class="">COMMERCIAL FACILITY</span>
</div>
</div>
<!-- Column 2: Quick Links -->
<div>
<h4 class="text-xs font-extrabold text-white uppercase tracking-widest mb-4">QUICK LINKS</h4>
<ul class="space-y-2 text-xs">
<li class=""><a class="hover:text-amber-400 transition-colors" href="#home">Home</a></li>

<li class=""><a class="hover:text-amber-400 transition-colors" href="#facilities">Gym Facilities</a></li>
<li class=""><a class="hover:text-amber-400 transition-colors" href="#programs">Training Programs</a></li>
<li class=""><a class="hover:text-amber-400 transition-colors" href="#membership">Membership Fees</a></li>
<li class=""><a class="hover:text-amber-400 transition-colors" href="#trainers">Master Coaches</a></li>
<li class=""><a class="hover:text-amber-400 transition-colors" href="#gallery">Gym Gallery</a></li>
<li class=""><a class="hover:text-amber-400 transition-colors" href="#contact">Road Map</a></li>
</ul>
</div>
<!-- Column 3: Training Hours -->
<div>
<h4 class="text-xs font-extrabold text-white uppercase tracking-widest mb-4">TRAINING HOURS</h4>
<div class="p-3.5 rounded bg-zinc-900 border border-zinc-800 mb-3">
<div class="flex items-center justify-between text-xs font-bold text-white mb-1">
<span class="">MONDAY - SUNDAY</span>
<span class="text-amber-400 font-mono">ACTIVE</span>
</div>
<div class="text-lg font-black text-amber-400 font-mono">7:00 AM - 11:00 PM</div>
<p class="text-[11px] text-gray-400 mt-1">Full floor accessibility &amp; combined training environment for men and women.</p>
</div>
<div class="text-[11px] text-gray-500 flex items-center gap-1.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="clock" aria-hidden="true" class="lucide lucide-clock w-3.5 h-3.5 text-amber-500"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span class="">Open Daily Without Interruption</span>
</div>
</div>
<!-- Column 4: Contact & Location -->
<div>
<h4 class="text-xs font-extrabold text-white uppercase tracking-widest mb-4">LOCATION &amp; INQUIRIES</h4>
<ul class="space-y-3 text-xs">
<li class="flex items-start gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map-pin" aria-hidden="true" class="lucide lucide-map-pin w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg><span class="">VERIFIED FACILITY ADDRESS:<br><strong class="text-gray-200">Tongi - Kaliganj - Gorashal - Pachdona Rd, Tongi, Tongi, Bangladesh, 1710</strong></span></li>
<li class="flex items-start gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="phone" aria-hidden="true" class="lucide lucide-phone w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span class="">DIRECT DESK LINE:<br><strong class="text-amber-400 font-mono">+880 1922-749473</strong></span>
</li>
<li class="flex items-start gap-2.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle" aria-hidden="true" class="lucide lucide-check-circle w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span class="">FACILITY STANDARD:<br><span class="text-gray-400">Commercial Pro-Grade Equipment &amp; Certified Trainers</span></span>
</li>
</ul>
</div>
</div>
<!-- Copyright Subfooter -->
<div class="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
<p class="">© FITNESS PARK GYM. All Rights Reserved. Tongi, Gazipur.</p>
<div class="flex items-center space-x-6 text-[11px]">
<a class="hover:text-amber-400 transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-amber-400 transition-colors" href="#">Terms of Service</a>
<a class="hover:text-amber-400 transition-colors" href="#contact">Support &amp; Contact</a>
</div>
</div>
</div>
</footer>
<!-- END: MainFooter -->























`;

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // keep everything visible & static

    document.documentElement.classList.add("animations-on");

    // ---- 1. Playful hero entrance: each wrapper pops in with a bounce & stagger ----
    const heroContent = root.querySelector(
      '[data-purpose="hero-section"] .relative.z-10.max-w-4xl'
    );
    if (heroContent) {
      Array.from(heroContent.children).forEach((el, i) => {
        el.setAttribute("data-hero-item", "");
        (el as HTMLElement).style.setProperty("--hero-delay", `${i * 120}ms`);
      });
    }

    // ---- 1b. Sticker badges (HEAD COACH, MOST POPULAR, gallery chips…) float forever ----
    root.querySelectorAll<HTMLElement>('[class*="absolute"]').forEach((el) => {
      const cls = el.className;
      const isSticker =
        cls.includes("font-extrabold") ||
        (cls.includes("font-bold") && cls.includes("uppercase"));
      if (isSticker && /amber|from-amber|to-amber/.test(cls)) {
        el.setAttribute("data-sticker", "");
      }
    });

    // ---- 1c. Card roots get playful lift/tilt on hover ----
    root
      .querySelectorAll(
        '[data-purpose="training-programs"] .group, ' +
          '[data-purpose="gym-facilities"] .grid > div, ' +
          '[data-purpose="master-coaches"] .grid > div, ' +
          '[data-purpose="membership-plans"] .grid > div, ' +
          '[data-purpose="student-transformations"] .grid > div, ' +
          '[data-purpose="trainee-reviews"] .grid > div'
      )
      .forEach((el) => el.setAttribute("data-card", ""));

    // ---- 2. Scroll reveal: cards + section headings fade up as they enter ----
    const reveal = (el: Element, delay = 0) => {
      el.setAttribute("data-reveal", "");
      (el as HTMLElement).style.setProperty("--reveal-delay", `${delay}ms`);
      observer.observe(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    // Section headings (eyebrow + h2 + intro) per data-purpose section
    root
      .querySelectorAll("section[data-purpose]")
      .forEach((section) => {
        const h2 = section.querySelector("h2");
        if (!h2) return;
        const wrapper = h2.closest("[class*='max-w-']") || h2.parentElement;
        if (wrapper) reveal(wrapper);
      });

    // Card grids: reveal each direct child with a stagger (gallery uses <a>, grids use <div>)
    root
      .querySelectorAll("section[data-purpose] .grid")
      .forEach((grid) => {
        Array.from(grid.children).forEach((child, i) => {
          if (child.matches("[data-reveal]")) return;
          reveal(child, Math.min(i, 5) * 90);
        });
      });

    // Stat strip counters
    const stats = root.querySelector('[data-purpose="stat-counters"]');
    if (stats) {
      const io2 = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            io2.unobserve(entry.target);
            const section = entry.target;
            section.querySelectorAll(".grid > div").forEach((cell) => {
              const num = cell.querySelector(".text-3xl, .text-4xl");
              if (!num) return;
              const raw = num.textContent?.trim() ?? "";
              if (!/^\d+[+]?$/.test(raw)) return;
              const target = parseInt(raw, 10);
              const hasPlus = raw.endsWith("+");
              num.setAttribute("data-counter", "");
              num.setAttribute("data-target", String(target));
              if (hasPlus) num.setAttribute("data-suffix", "+");
            });
            countUp(section);
          }
        },
        { threshold: 0.4 }
      );
      io2.observe(stats);
    }

    function countUp(scope: Element) {
      const els = scope.querySelectorAll("[data-counter]");
      const dur = 1400;
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      els.forEach((el) => {
        const target = Number(el.getAttribute("data-target"));
        const suffix = el.getAttribute("data-suffix") ?? "";
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const val = Math.round(ease(p) * target);
          el.textContent = `${val}${suffix}`;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }
  }, []);

  // ---- BMI calculator (lightweight, live, no deps) ----
  // ---- BMI calculator + generic diet plan ----
  useEffect(() => {
    const $ = (id: string) => document.getElementById(id);
    const weight = $("bmi-weight") as HTMLInputElement | null;
    const height = $("bmi-height") as HTMLInputElement | null;
    const weightOut = $("bmi-weight-out");
    const weightLb = $("bmi-weight-lb");
    const heightOut = $("bmi-height-out");
    const heightCm = $("bmi-height-cm");
    const age = $("bmi-age") as HTMLInputElement | null;
    const empty = $("bmi-empty");
    const result = $("bmi-result");
    const valueEl = $("bmi-value");
    const categoryEl = $("bmi-category");
    const noteEl = $("bmi-note");
    const fillEl = $("bmi-fill");
    const idealEl = $("bmi-ideal");
    const caloriesEl = $("bmi-calories");
    const calcBtn = $("bmi-calc");
    const resetBtn = $("bmi-reset");
    const dietBtn = $("bmi-diet-btn");
    const diet = $("bmi-diet");
    const dietTitle = $("bmi-diet-title");
    const dietGoal = $("bmi-diet-goal");
    const dietMeals = $("bmi-diet-meals");
    const dietEat = $("bmi-diet-eat");
    const dietAvoid = $("bmi-diet-avoid");
    if (!weight || !height || !result || !categoryEl || !calcBtn) return;

    const genderBtns = Array.from(
      document.querySelectorAll<HTMLButtonElement>("[data-bmi-gender]")
    );
    let gender: "male" | "female" = "male";

    type Band = {
      max: number;
      label: string;
      color: string;
      fill: string;
      note: string;
      goal: string;
      adjust: number;
      meals: [string, string][];
      eat: string[];
      avoid: string[];
    };

    const BANDS: Band[] = [
      {
        max: 18.5,
        label: "Underweight",
        color: "text-sky-400 border-sky-400/40",
        fill: "bg-sky-400",
        note: "You are below the healthy range. A controlled calorie surplus with heavy strength training will help you build a stronger frame.",
        goal: "Lean Weight Gain",
        adjust: 400,
        meals: [
          ["Breakfast", "4 eggs (2 whole + 2 white), 3 slices brown bread with peanut butter, 1 banana, 1 glass full-cream milk."],
          ["Lunch", "1.5 cups rice, 150g chicken or fish curry, dal, mixed vegetables, salad with olive oil."],
          ["Snack", "Handful of nuts and dates, 1 glass banana-milk shake, or a protein shake after training."],
          ["Dinner", "2 roti, 150g beef or chicken, vegetables, 1 cup yoghurt before bed."],
        ],
        eat: ["Rice, roti, oats and potatoes for clean carbs", "Eggs, chicken, fish, beef and dal for protein", "Nuts, peanut butter, ghee and olive oil", "Full-cream milk, yoghurt, banana and dates", "5-6 smaller meals spread across the day"],
        avoid: ["Skipping meals or long fasting gaps", "Filling up on tea, coffee and soft drinks", "Excess cardio that burns your surplus", "Junk food as your main calorie source", "Late-night sleep that blocks recovery"],
      },
      {
        max: 25,
        label: "Normal",
        color: "text-emerald-400 border-emerald-400/40",
        fill: "bg-emerald-400",
        note: "You are in the healthy range for your height. Keep training consistently and hold the line with balanced nutrition.",
        goal: "Maintain & Build",
        adjust: 0,
        meals: [
          ["Breakfast", "3 eggs, 1 cup oats with milk, 1 fruit, black coffee or green tea."],
          ["Lunch", "1 cup rice, 150g chicken or fish, dal, a large bowl of vegetables, salad."],
          ["Snack", "1 apple with a few almonds, or yoghurt; protein shake on training days."],
          ["Dinner", "2 roti or 1 cup rice, grilled chicken or fish, stir-fried vegetables."],
        ],
        eat: ["Lean protein at every meal", "Brown rice, oats, roti and sweet potato", "Plenty of green vegetables and fruit", "3-4 litres of water daily", "Yoghurt, nuts and seeds in moderation"],
        avoid: ["Regular fried and oily street food", "Sugary drinks, packet juice and energy drinks", "Overeating sweets and desserts", "Long gaps between meals", "Training without proper sleep"],
      },
      {
        max: 30,
        label: "Overweight",
        color: "text-amber-400 border-amber-400/40",
        fill: "bg-amber-400",
        note: "Slightly above the healthy range. A moderate calorie deficit with strength plus cardio training will get you back on track.",
        goal: "Fat Loss",
        adjust: -400,
        meals: [
          ["Breakfast", "3 egg whites + 1 whole egg, 1 cup oats, green tea, 1 fruit."],
          ["Lunch", "0.75 cup rice or 2 roti, 150g grilled chicken or fish, dal, large vegetable bowl."],
          ["Snack", "1 cucumber or apple, 1 cup plain yoghurt, or roasted chickpeas."],
          ["Dinner", "Grilled chicken or fish with salad and vegetables, light soup, no rice after 8 PM."],
        ],
        eat: ["High-protein, high-fibre meals that keep you full", "Vegetables, salad and clear soup before meals", "Brown rice, oats and roti in measured portions", "Green tea, lemon water and plenty of plain water", "30-40 minutes of cardio after weight training"],
        avoid: ["Fried snacks, samosa, singara and fast food", "Sugar in tea, soft drinks and packet juice", "White rice in large portions", "Late-night heavy dinners", "Sitting all day without movement"],
      },
      {
        max: Infinity,
        label: "Obese",
        color: "text-rose-400 border-rose-400/40",
        fill: "bg-rose-400",
        note: "Above the healthy range. It is never too late, and our coaches will build you a sustainable plan to transform your body.",
        goal: "Serious Fat Loss",
        adjust: -500,
        meals: [
          ["Breakfast", "3 egg whites, 1 bowl vegetable soup or 1 cup oats, green tea, no sugar."],
          ["Lunch", "2 roti or 0.5 cup rice, 150g grilled chicken or fish, dal, a very large vegetable bowl."],
          ["Snack", "Cucumber, carrot or 1 fruit; plain yoghurt without sugar."],
          ["Dinner", "Grilled fish or chicken with salad and steamed vegetables, finished before 8 PM."],
        ],
        eat: ["Protein and vegetables in every meal", "Slow-digesting carbs in small, measured portions", "4-5 litres of water spread across the day", "A 30-minute walk daily on top of gym training", "7-8 hours of sleep for hormonal balance"],
        avoid: ["All fried food, fast food and bakery items", "Sugar, sweets, soft drinks and packet juice", "Refined white rice, white bread and maida", "Eating after 9 PM", "Crash dieting that destroys muscle"],
      },
    ];

    let current: Band = BANDS[1];
    let calculated = false;

    const setGender = (g: "male" | "female") => {
      gender = g;
      genderBtns.forEach((b) =>
        b.classList.toggle("is-active", b.dataset.bmiGender === g)
      );
      if (calculated) calculate();
    };
    genderBtns.forEach((b) =>
      b.addEventListener("click", () =>
        setGender((b.dataset.bmiGender as "male" | "female") || "male")
      )
    );

    // Keep the slider read-outs and the amber track fill in sync.
    function syncSliders() {
      const w = parseFloat(weight!.value);
      const inches = parseFloat(height!.value);
      if (weightOut) weightOut.textContent = String(Math.round(w));
      if (weightLb) weightLb.textContent = Math.round(w * 2.20462) + " lb";
      if (heightOut)
        heightOut.textContent =
          Math.floor(inches / 12) + "' " + (inches % 12) + '"';
      if (heightCm) heightCm.textContent = Math.round(inches * 2.54) + " cm";
      [weight!, height!].forEach((el) => {
        const min = parseFloat(el.min);
        const max = parseFloat(el.max);
        const pct = ((parseFloat(el.value) - min) / (max - min)) * 100;
        el.style.setProperty("--bmi-fill", pct + "%");
      });
    }

    const renderDiet = (band: Band) => {
      if (dietTitle) dietTitle.textContent = band.label + " Diet Plan";
      if (dietGoal) dietGoal.textContent = band.goal;
      if (dietMeals)
        dietMeals.innerHTML = band.meals
          .map(
            ([name, text]) =>
              '<div class="p-4 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 transition-all"><span class="text-[10px] font-black text-amber-400 uppercase tracking-widest block mb-2">' +
              name +
              '</span><p class="text-xs text-gray-400 leading-relaxed">' +
              text +
              "</p></div>"
          )
          .join("");
      const li = (t: string, ok: boolean) =>
        '<li class="flex items-start gap-2 text-xs text-gray-400 leading-relaxed"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ' +
        (ok ? "bg-emerald-400" : "bg-rose-400") +
        '"></span><span>' +
        t +
        "</span></li>";
      if (dietEat) dietEat.innerHTML = band.eat.map((t) => li(t, true)).join("");
      if (dietAvoid)
        dietAvoid.innerHTML = band.avoid.map((t) => li(t, false)).join("");
      (window as unknown as { __applyLang?: () => void }).__applyLang?.();
    };

    function calculate() {
      const w = parseFloat(weight!.value); // kg
      const inches = parseFloat(height!.value); // total inches
      const h = inches * 2.54; // cm
      if (!isFinite(w) || !isFinite(h) || w <= 0 || h <= 0) {
        calculated = false;
        result!.classList.add("hidden");
        empty?.classList.remove("hidden");
        diet?.classList.add("hidden");
        return;
      }
      calculated = true;
      empty?.classList.add("hidden");
      result!.classList.remove("hidden");

      const m = h / 100;
      const bmi = w / (m * m);
      const band = BANDS.find((b) => bmi < b.max) ?? BANDS[BANDS.length - 1];
      current = band;

      if (valueEl) {
        valueEl.textContent = bmi.toFixed(1);
        valueEl.classList.remove("is-pop");
        void (valueEl as HTMLElement).offsetWidth;
        valueEl.classList.add("is-pop");
      }
      categoryEl!.textContent = band.label;
      categoryEl!.className =
        "inline-flex items-center px-3 py-1.5 rounded-full border text-[11px] font-extrabold uppercase tracking-wider bg-zinc-900 " +
        band.color;
      if (noteEl) noteEl.textContent = band.note;

      const pct = Math.min(Math.max(((bmi - 15) / 25) * 100, 3), 97);
      if (fillEl) {
        fillEl.style.width = pct + "%";
        fillEl.className =
          "absolute inset-y-0 left-0 rounded-full transition-all duration-500 " +
          band.fill;
      }

      if (idealEl)
        idealEl.textContent =
          (18.5 * m * m).toFixed(1) + " - " + (24.9 * m * m).toFixed(1) + " kg";

      const a = Math.min(Math.max(parseFloat(age?.value || "") || 25, 10), 100);
      const bmr =
        10 * w + 6.25 * h - 5 * a + (gender === "male" ? 5 : -161);
      const target = Math.round((bmr * 1.4 + band.adjust) / 10) * 10;
      if (caloriesEl) caloriesEl.textContent = target + " kcal";

      if (!diet?.classList.contains("hidden")) renderDiet(band);
    }

    const reset = () => {
      weight.value = "70";
      height.value = "67";
      if (age) age.value = "";
      syncSliders();
      calculated = false;
      result.classList.add("hidden");
      diet?.classList.add("hidden");
      empty?.classList.remove("hidden");
    };

    const toggleDiet = () => {
      if (!diet) return;
      const hidden = diet.classList.contains("hidden");
      if (hidden) {
        renderDiet(current);
        diet.classList.remove("hidden");
        diet.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        diet.classList.add("hidden");
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") calculate();
    };

    const onSlide = () => {
      syncSliders();
      if (calculated) calculate();
    };

    syncSliders();

    calcBtn.addEventListener("click", calculate);
    resetBtn?.addEventListener("click", reset);
    dietBtn?.addEventListener("click", toggleDiet);
    weight.addEventListener("input", onSlide);
    height.addEventListener("input", onSlide);
    age?.addEventListener("keydown", onKey);
    age?.addEventListener("input", () => calculated && calculate());

    return () => {
      calcBtn.removeEventListener("click", calculate);
      resetBtn?.removeEventListener("click", reset);
      dietBtn?.removeEventListener("click", toggleDiet);
      weight.removeEventListener("input", onSlide);
      height.removeEventListener("input", onSlide);
      age?.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div ref={rootRef} dangerouslySetInnerHTML={{ __html: DESIGN_HTML }} />
      <BackToTop />
    </>
  );
}
