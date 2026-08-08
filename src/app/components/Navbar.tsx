
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Mental Wellness", href: "/patient-services" },
  { name: "For Clinics", href: "/Clinic" },
  { name: "Our Story", href: "/about-us" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-white">
      {/* Navbar */}
      <div className="relative z-[60] mx-auto flex h-20 items-center justify-between border-b border-gray-100 bg-white px-4 sm:px-6 lg:px-16">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
         

          <span className="text-lg font-bold text-[#023E8A] sm:text-xl">
            <img src="/image.png" alt="Puthal Logo" className="h-8 w-auto sm:h-10" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative pb-2 text-[15px] font-medium transition-all duration-300 ${
                  active
                    ? "text-[#005d90]"
                    : "text-gray-600 hover:text-[#005d90]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#005d90] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden rounded-xl bg-[#005d90] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004a73] hover:shadow-lg active:scale-95 md:block"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-[#005d90] transition-all hover:bg-gray-50 md:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0"
        }`}
      >
        {/* Space for Navbar */}
        <div className="h-20" />

        {/* Menu Content */}
        <nav className="flex h-[calc(100vh-5rem)] flex-col px-6 pb-8 pt-6 sm:px-10">

          {/* Navigation Links */}
          <div className="flex flex-col">
            {navLinks.map((link, index) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: menuOpen
                      ? `${index * 70}ms`
                      : "0ms",
                  }}
                  className={`group flex items-center justify-between border-b border-gray-100 py-5 text-xl font-medium transition-all duration-500 ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  } ${
                    active
                      ? "text-[#005d90]"
                      : "text-gray-700 hover:text-[#005d90]"
                  }`}
                >
                  <span>{link.name}</span>

                </Link>
              );
            })}
          </div>

          {/* Bottom Area */}
          <div
            className={`mt-auto transition-all duration-500 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-2xl bg-[#005d90] px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#004a73] active:scale-[0.98]"
            >
              Get Started
            </Link>

            <p className="mt-5 text-center text-sm text-gray-400">
              Your journey towards better wellness starts here.
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
