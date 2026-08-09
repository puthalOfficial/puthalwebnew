"use client"
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-margin-mobile md:px-10 max-w-container-max-width mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       <div className="z-10 px-5">
  <span className="mb-6 inline-block rounded-full bg-[#9cecfb] px-4 py-1.5 font-[Inter] text-[12px] font-semibold uppercase tracking-[0.08em] text-[#016d7a]">
    Our Vision
  </span>

  <h1 className="mb-6 font-[Manrope] text-[48px] font-bold leading-[56px] tracking-[-0.02em] text-[#191c1e]">
    Empowering the next generation of{" "}
    <span className="bg-gradient-to-r from-[#005d90] to-[#00b4d8] bg-clip-text text-transparent">
      digital wellness.
    </span>
  </h1>

  <p className="mb-8 max-w-xl font-[Inter] text-[18px] leading-[28px] text-[#404850]">
    At Puthal, we bridge the gap between human empathy and technological
    precision. Our sanctuary is designed to help you navigate emotional
    landscapes with clarity and peace.
  </p>

  <div className="flex flex-wrap gap-4">
    {/* Badge 1 */}
    <div className="flex items-center gap-2 rounded-full border border-[#bfc7d1]/30 bg-[#e6e8ea] px-4 py-2">
      <span
        className="material-symbols-outlined text-[#005d90]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        verified
      </span>

      <span className="font-[Inter] text-[14px] font-medium leading-[20px] text-[#191c1e]">
        12K+ Users Globally
      </span>
    </div>

    {/* Badge 2 */}
    <div className="flex items-center gap-2 rounded-full border border-[#bfc7d1]/30 bg-[#e6e8ea] px-4 py-2">
      <span
        className="material-symbols-outlined text-[#006875]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>

      <span className="font-[Inter] text-[14px] font-medium leading-[20px] text-[#191c1e]">
        50+ Specialists
      </span>
    </div>
  </div>
</div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-primary-container/10 rounded-[2rem] blur-2xl group-hover:bg-primary-container/20 transition-all" />
          <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl glass-card aspect-[4/3] border border-white/40">
            <img
              className="w-full h-full object-cover "
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
