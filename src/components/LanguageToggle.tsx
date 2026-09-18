"use client";

import { useCallback, useEffect, useState } from "react";
import { BN } from "@/lib/translations";

type Lang = "en" | "bn";

// Cache of each text node's original English text, so switching back is exact.
const ORIGINAL = new WeakMap<Text, string>();

function walk(root: Node, lang: Lang) {
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = (node as Text).parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (
        tag === "SCRIPT" ||
        tag === "STYLE" ||
        parent.closest("[data-no-translate]")
      )
        return NodeFilter.FILTER_REJECT;
      return (node as Text).nodeValue && (node as Text).nodeValue!.trim()
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  let node = tw.nextNode() as Text | null;
  while (node) {
    let original = ORIGINAL.get(node);
    if (original === undefined) {
      original = node.nodeValue ?? "";
      ORIGINAL.set(node, original);
    }
    if (lang === "en") {
      if (node.nodeValue !== original) node.nodeValue = original;
    } else {
      const key = original.replace(/\s+/g, " ").trim();
      const bn = BN[key];
      if (bn) {
        const lead = original.match(/^\s*/)?.[0] ?? "";
        const tail = original.match(/\s*$/)?.[0] ?? "";
        node.nodeValue = lead + bn + tail;
      }
    }
    node = tw.nextNode() as Text | null;
  }
}

export default function LanguageToggle() {
  const [lang, setLang] = useState<Lang>("en");

  const apply = useCallback((next: Lang) => {
    walk(document.body, next);
    document.documentElement.lang = next;
    document.documentElement.dataset.lang = next;
  }, []);

  // Restore the saved choice on first paint.
  useEffect(() => {
    let saved: Lang = "en";
    try {
      saved = (localStorage.getItem("fpg-lang") as Lang) || "en";
    } catch {}
    if (saved === "bn") {
      setLang("bn");
      // Let the page finish rendering before rewriting text nodes.
      requestAnimationFrame(() => apply("bn"));
    }
  }, [apply]);

  // Expose a re-apply hook so dynamically injected content (BMI diet plan)
  // can be translated right after it is rendered.
  useEffect(() => {
    const w = window as unknown as { __applyLang?: () => void };
    w.__applyLang = () => apply(lang);
    return () => {
      delete w.__applyLang;
    };
  }, [apply, lang]);

  const toggle = () => {
    const next: Lang = lang === "en" ? "bn" : "en";
    setLang(next);
    apply(next);
    try {
      localStorage.setItem("fpg-lang", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      data-no-translate="true"
      aria-label={lang === "en" ? "Switch to Bangla" : "Switch to English"}
      title={lang === "en" ? "বাংলায় দেখুন" : "View in English"}
      className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-full border border-amber-500/40 bg-zinc-900/90 hover:bg-zinc-800 hover:border-amber-500 text-amber-400 transition-all flex-shrink-0 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3.5 h-3.5 flex-shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
        <span className={lang === "en" ? "text-amber-400" : "text-zinc-500"}>
          EN
        </span>
        <span className="text-zinc-600 mx-1">|</span>
        <span className={lang === "bn" ? "text-amber-400" : "text-zinc-500"}>
          বাং
        </span>
      </span>
    </button>
  );
}
