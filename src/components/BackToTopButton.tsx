"use client";

import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function BackToTopButton() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleBackToTop = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    toggleBackToTop();
    window.addEventListener("scroll", toggleBackToTop, { passive: true });

    return () => window.removeEventListener("scroll", toggleBackToTop);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8e8f2] hover:text-[#4d508f] dark:border-[#a2a4d5]/30 dark:bg-slate-900/90 dark:text-sky-200 dark:shadow-[#6366a8]/20 dark:hover:bg-[#6366a8]/20 dark:hover:text-sky-100 ${showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <AiOutlineArrowUp className="text-xl" />
    </button>
  );
}
