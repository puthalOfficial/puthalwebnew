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
      className={`bg-[#f7f9fb]/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-md" : "py-4 shadow-sm"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-[16px] md:px-[48px] py-4 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#0077b6] rounded-lg flex items-center justify-center text-[#f3f7ff] transform group-hover:rotate-6 transition-transform">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
          </div>

          <span className="text-[32px] leading-[40px] font-[Manrope] font-bold text-[#005d90] tracking-tight">
            Puthal
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[24px]">
          <a
            className="text-[#404850] hover:text-[#005d90] transition-colors text-[14px] leading-[20px] tracking-[0.01em] font-[Inter] font-medium"
            href="#"
          >
            Mental Wellness
          </a>

          <a
            className="text-[#404850] hover:text-[#005d90] transition-colors text-[14px] leading-[20px] tracking-[0.01em] font-[Inter] font-medium"
            href="#"
          >
            Specialists
          </a>

          <a
            className="text-[#404850] hover:text-[#005d90] transition-colors text-[14px] leading-[20px] tracking-[0.01em] font-[Inter] font-medium"
            href="#"
          >
            For Clinics
          </a>

          <a
            className="text-[#005d90] border-b-2 border-[#005d90] font-bold pb-1 text-[14px] leading-[20px] tracking-[0.01em] font-[Inter] font-medium"
            href="#"
          >
            Our Story
          </a>
        </div>

        <button className="bg-[#005d90] hover:opacity-90 active:scale-95 text-white px-6 py-2.5 rounded-lg text-[14px] leading-[20px] tracking-[0.01em] font-[Inter] font-bold transition-all shadow-md">
          Get Started
        </button>
      </nav>
    </header>
  );
}