"use client"

const logos = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
];
import { useEffect, useRef } from "react";

export default function TrustedSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let animationId: number;

  const autoScroll = () => {
    container.scrollLeft += 0.5;

    // End par pahunchne ke baad wapas beginning
    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth
    ) {
      container.scrollLeft = 0;
    }

    animationId = requestAnimationFrame(autoScroll);
  };

  animationId = requestAnimationFrame(autoScroll);

  return () => cancelAnimationFrame(animationId);
}, []);
  return (
    <section className="relative overflow-hidden py-4 bg-white">

      {/* Blur Background */}

      <div className="absolute left-0 top-10 w-72 h-72 bg-cyan-200/30 blur-[120px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-200/30 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="inline-flex rounded-full bg-cyan-50 px-5 py-2 text-cyan-600 font-semibold">
            Trusted Worldwide
          </p>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trusted by Modern
            <span className="text-[#005d90]"> Healthcare Clinics</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-500">
            Helping healthcare professionals automate operations,
            improve patient care and grow faster with an intelligent
            clinic management platform.
          </p>

        </div>

        {/* Logo Cards */}

       <div
  ref={scrollRef}
  className="
    mt-16
    flex
    gap-5
    overflow-x-auto
    pb-4
    px-2
    md:justify-around
    md:overflow-x-visible
    md:pb-0
    scrollbar-hide
  "
>
  {logos.map((logo, index) => (
    <div
      key={index}
      className="
        group
        shrink-0
        w-[220px]
        h-[140px]
        rounded-3xl
        border
        border-slate-200
        bg-white/70
        backdrop-blur-xl
        shadow-lg
        hover:shadow-2xl
        transition
        duration-300
        p-8
        flex
        items-center
        justify-center
        hover:-translate-y-2
        md:w-auto
        md:h-auto
      "
    >
      <img
        src={logo}
        width={180}
        height={100}
        alt="Clinic Logo"
        className="
          max-w-full
          object-contain
          opacity-70
          grayscale
          group-hover:grayscale-0
          group-hover:opacity-100
          transition
        "
      />
    </div>
  ))}
</div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-3xl bg-slate-50 p-8 text-center">

            <h3 className="text-4xl font-bold text-[#005d90]">
              500+
            </h3>

            <p className="mt-2 text-slate-500">
              Clinics
            </p>

          </div>

          <div className="rounded-3xl bg-slate-50 p-8 text-center">

            <h3 className="text-4xl font-bold text-[#005d90]">
              1M+
            </h3>

            <p className="mt-2 text-slate-500">
              Patients Managed
            </p>

          </div>

          <div className="rounded-3xl bg-slate-50 p-8 text-center">

            <h3 className="text-4xl font-bold text-[#005d90]">
              5M+
            </h3>

            <p className="mt-2 text-[#005d90]">
              Appointments
            </p>

          </div>

          <div className="rounded-3xl bg-slate-50 p-8 text-center">

            <h3 className="text-4xl font-bold text-[#005d90]">
              4.9★
            </h3>

            <p className="mt-2 text-slate-500">
              Customer Rating
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}