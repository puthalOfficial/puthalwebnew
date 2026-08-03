"use client"
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-label-sm mb-6 uppercase tracking-wider">
            Our Vision
          </span>
          <h1 className="text-display-lg font-display-lg text-on-surface mb-6 leading-tight">
            Empowering the next generation of{" "}
            <span className="text-gradient">digital wellness.</span>
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 max-w-xl">
            At Puthal, we bridge the gap between human empathy and
            technological precision. Our sanctuary is designed to help you
            navigate emotional landscapes with clarity and peace.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/30">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="text-label-md font-label-md">
                12K+ Users Globally
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/30">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-label-md font-label-md">
                50+ Specialists
              </span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-primary-container/10 rounded-[2rem] blur-2xl group-hover:bg-primary-container/20 transition-all" />
          <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl glass-card aspect-[4/3] border border-white/40">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A serene, high-end modern medical office interior with floor-to-ceiling windows overlooking a calm blue ocean at sunset. Two professional mental health specialists engaged in a warm conversation, with soft, warm, cinematic coastal lighting."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFYfkx3CFF15AafczIV2mpuC6c1m4Ds6m70_I3ziQTc-rbHZE-MlCJRPjGIvLlhRLpRR7IPR2_Tww6PKTVOaKJ_C5nsjQrxJOK4xfGsDHzbEJWoZjzUBjAv0QHokcRRxu9KKR1cLR3FqIdxUy9AYgwWsd8bu4kUuItrs_zzrI02sAHwSj9cWAWMyyI_ZJWdiUfwc_3MZPV0HyG__oO0ZrNh2QMgLHS61UUmnCz-UULOQHD8nKa5eRme-MAUQ0-S3dfUX9AREY-408"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
            
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-xl border border-white/20 shadow-lg">
              <p className="text-primary font-headline-md text-headline-md italic">
                &ldquo;Peace of mind, redefined.&rdquo;
              </p>
              <p className="text-on-surface-variant text-label-sm font-label-sm mt-1 uppercase tracking-widest">
                Our Core Philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
