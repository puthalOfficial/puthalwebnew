import FloatingFocusCard from "./FloatingFocusCard";

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-100" />

      {/* Decorative Blur */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-cyan-300/40 to-transparent opacity-30 blur-3xl" />

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-12">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#9cecfb] px-4 py-1 text-[12px] font-semibold leading-4 tracking-[0.05em] text-[#016d7a]">
            <span className="material-symbols-outlined text-base">
              verified
            </span>
            Trusted by 12K+ Users Globally
          </div>

          <h1 className="font-[Manrope] text-[48px] font-bold leading-[56px] tracking-[-0.02em] text-[#023E8A]">
            Coastal Serenity for Your Mental Wellness
          </h1>

          <p className="max-w-lg font-[Inter] text-[18px] font-normal leading-[28px] text-[#404850]">
            Mann ki Uthal, Solve on Puthal. Navigate your emotional journey
            with professional tools and guided support in a digital sanctuary.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-lg bg-[#0077b6] px-8 py-3 font-semibold text-[#f3f7ff] transition hover:shadow-lg">
              Start Your Assessment
            </button>

            <button className="rounded-lg border border-[#005d90] px-8 py-3 font-semibold text-[#005d90] transition hover:bg-[#005d90]/5">
              Explore Modules
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="aspect-square rotate-3 rounded-3xl border border-white/20 bg-white/30 p-4 shadow-2xl backdrop-blur-xl transition duration-500 hover:rotate-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK3ckphQdQ0D_taWzaA8HUf1qcqTTVEb4uAdgm_AHn93G0JaX1WmrozHoV3zqrxOvNPAh7g_m73tTMKv0Qpe03htggVGtCPNn8V7yG90iQ7oweB7wGw4wK97UgiKGhC2ZEPNRhnIW7aSj8pHdtXRWdXewuETeL819T5AM6Rhj4hAwHgM8NQbEj4QuKEyUBSCSO-SAdZCX2zCEb24qcdbmVdOLx3_avX9JNw6HPCGqM77DrLZ7PO-d8sQtODPzOu-UJuLy1Pqea0xY"
              alt="Hero"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          <FloatingFocusCard />
        </div>
      </div>
    </header>
  );
}