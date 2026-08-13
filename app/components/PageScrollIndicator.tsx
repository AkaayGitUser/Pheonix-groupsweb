"use client";

import React, { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Stories" },
  { id: "social-media", label: "Social Media" },
  { id: "heritage", label: "Heritage" },
  { id: "careers", label: "Careers" },
  { id: "brands", label: "Our Brands" },
];

export default function PageScrollIndicator() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Detect section in the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeIds = [...sections.map((s) => s.id), "footer"];

    observeIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observeIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`fixed right-6 sm:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-5 max-md:hidden select-none transition-all duration-500 ${(activeSection === "home" || activeSection === "footer") ? "opacity-0 pointer-events-none translate-x-4" : "opacity-100 translate-x-0"}`}>
      {/* Vertical Track Line */}
      <div className="absolute top-2 bottom-2 w-[1px] bg-white/20 dark:bg-black/10" />

      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <div
            key={sec.id}
            className="relative flex items-center justify-center w-6 h-8 cursor-pointer group"
            onClick={() => handleNavClick(sec.id)}
          >
            {/* Connecting Horizontal Line (active or hovered) */}
            <div
              className={`
                absolute right-5 w-4 h-[1px] transition-all duration-300
                ${isActive
                  ? "bg-[#e1a91a] opacity-100"
                  : "bg-white/40 dark:bg-black/20 opacity-0 group-hover:opacity-100 group-hover:bg-[#e1a91a]"
                }
              `}
            />

            {/* Tooltip Label Card */}
            <div
              className={`
                absolute right-9 transition-all duration-300 whitespace-nowrap px-2 py-0.5 shadow-lg text-[10px] sm:text-xs font-semibold
                bg-[#005a9c]/30 backdrop-blur-xs border border-white/20 text-white rounded-none
                ${isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none"
                }
              `}
            >
              {sec.label}
            </div>

            {/* Capsule Indicator Button */}
            <button
              type="button"
              className={`
                w-[3px] rounded-full transition-all duration-300 pointer-events-none focus:outline-none z-10
                ${isActive
                  ? "h-7 bg-[#e1a91a] shadow-[0_0_8px_#e1a91a]"
                  : "h-4 bg-white/40 dark:bg-black/20 group-hover:h-7 group-hover:bg-[#e1a91a]"
                }
              `}
              aria-label={`Go to section ${sec.label}`}
            />
          </div>
        );
      })}
    </div>
  );
}
