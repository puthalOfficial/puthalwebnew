import Image from "next/image";
import FloatingFocusCard from "./FloatingFocusCard";

export default function Hero() {
  return (
    <header className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-wave-gradient"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none"></div>

      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-label-sm font-label-sm">
            <span className="material-symbols-outlined text-[16px]">
              verified
            </span>
            Trusted by 12K+ Users Globally
          </div>
          <h1 className="text-display-lg font-display-lg text-deep-ocean leading-tight">
            Coastal Serenity for Your Mental Wellness
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
            Mann ki Uthal, Solve on Puthal. Navigate your emotional journey
            with professional tools and guided support in a digital
            sanctuary.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
              Start Your Assessment
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/5 transition-colors">
              Explore Modules
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden glass-panel p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              className="w-full h-full object-cover rounded-2xl"
              alt="A serene coastal landscape with soft rolling waves onto a white sand beach under a pastel sunrise. The style is minimalist and high-key, emphasizing tranquility and breathing room. Soft seafoam greens and pale blues dominate the palette, creating an airy wellness-focused aesthetic that feels professional and calm."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK3ckphQdQ0D_taWzaA8HUf1qcqTTVEb4uAdgm_AHn93G0JaX1WmrozHoV3zqrxOvNPAh7g_m73tTMKv0Qpe03htggVGtCPNn8V7yG90iQ7oweB7wGw4wK97UgiKGhC2ZEPNRhnIW7aSj8pHdtXRWdXewuETeL819T5AM6Rhj4hAwHgM8NQbEj4QuKEyUBSCSO-SAdZCX2zCEb24qcdbmVdOLx3_avX9JNw6HPCGqM77DrLZ7PO-d8sQtODPzOu-UJuLy1Pqea0xY"
              width={800}
              height={800}
              priority
            />
          </div>
          <FloatingFocusCard />
        </div>
      </div>
    </header>
  );
}
