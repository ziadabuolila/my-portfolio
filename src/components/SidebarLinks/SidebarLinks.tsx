"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineProject, AiOutlineAppstore, AiOutlineMail } from "react-icons/ai";

const sidebarLinks = [
  { href: "#services", label: "Services", Icon: AiOutlineAppstore },
  { href: "#projects", label: "Projects", Icon: AiOutlineProject },
  { href: "#contact", label: "Contact", Icon: AiOutlineMail },
];

const SidebarLinks: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Observe sections to keep the active link in sync while scrolling
    const visibleSections = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionHash = `#${entry.target.id}`;
          if (entry.isIntersecting) {
            visibleSections.add(sectionHash);
          } else {
            visibleSections.delete(sectionHash);
          }
        });

        if (visibleSections.size === 0) {
          setActive(null);
        } else {
          setActive(visibleSections.values().next().value ?? null);
        }
      },
      { root: null, rootMargin: "-30% 0px -30% 0px", threshold: 0.25 }
    );

    sidebarLinks.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
      try {
        history.replaceState(null, "", href);
      } catch {}
    } else {
      // fallback: update hash if section not found
      window.location.hash = href;
    }
  };

  return (
    <aside className="fixed left-0 bottom-8 z-50 hidden flex-col gap-3 px-4 sm:flex">
      {sidebarLinks.map(({ href, label, Icon }) => {
        const isActive = active === href;
        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            onClick={(e) => handleClick(e, href)}
            className={`group relative flex h-12 w-12 min-w-[3rem] items-center overflow-hidden rounded-full border shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a2a4d5] dark:border-white/15 dark:text-white hover:w-44
              ${isActive ? "w-44 border-[#a2a4d5] bg-[#f2f2f8] text-[#4d508f] dark:bg-slate-800" : "border-slate-300 bg-white/90 text-slate-900 dark:bg-[oklch(12.9%_0.042_264.695)]/80"}`}
          >
            <span className={`flex w-full items-center justify-center px-3 transition-all duration-300 ${isActive ? "gap-2" : "gap-0 group-hover:gap-2"}`}>
              <Icon
                className={`text-lg transition-transform transition-colors duration-300 ${isActive ? "translate-x-1 text-[#6366a8]" : "group-hover:text-[#6366a8] dark:group-hover:text-[#6366a8]"}`}
              />
              <span
                className={`max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 ${isActive ? "max-w-[8rem] opacity-100" : "group-hover:max-w-[8rem] group-hover:opacity-100"} dark:text-white`}
              >
                {label}
              </span>
            </span>
          </Link>
        );
      })}
    </aside>
  );
};

export default SidebarLinks;
