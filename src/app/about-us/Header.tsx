"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`bg-surface/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-md" : "py-4 shadow-sm"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto">
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container transform group-hover:rotate-6 transition-transform">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
          </div>
          <span className="text-headline-lg font-headline-lg font-bold text-primary tracking-tight">
            Puthal
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-gutter">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md"
            href="#"
          >
            Mental Wellness
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md"
            href="#"
          >
            Specialists
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md"
            href="#"
          >
            For Clinics
          </a>
          <a
            className="text-primary border-b-2 border-primary font-bold pb-1 text-label-md font-label-md"
            href="#"
          >
            Our Story
          </a>
        </div>

        <button className="bg-primary hover:opacity-90 active:scale-95 text-on-primary px-6 py-2.5 rounded-lg text-label-md font-label-md font-bold transition-all shadow-md">
          Get Started
        </button>
      </nav>
    </header>
  );
}
