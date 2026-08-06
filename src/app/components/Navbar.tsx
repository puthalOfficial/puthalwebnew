"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Mental Wellness", href: "/patient-services" },
  { name: "Specialists", href: "/specialists" },
  { name: "For Clinics", href: "/Clinic" },
  { name: "Our Story", href: "/about-us" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-[32px] font-bold tracking-tight text-[#005d90]"
        >
          Puthal
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-2 text-[15px] font-medium transition-all duration-300
                  ${
                    active
                      ? "text-[#005d90]"
                      : "text-gray-600 hover:text-[#005d90]"
                  }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-[2px] h-[2px] rounded-full bg-[#005d90] transition-all duration-300
                    ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Button */}
        <button className="rounded-xl bg-[#005d90] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004a73] hover:shadow-lg active:scale-95">
          Get Started
        </button>
      </div>
    </header>
  );
}