export default function SupportCTA() {
  return (
    <section className="px-4 py-24 md:px-12">
      <div className="mx-auto max-w-4xl rounded-[2rem] border-2 border-dashed border-[#005d90]/30 bg-white/30 p-12 text-center shadow-2xl backdrop-blur-xl">
        <h2 className="mb-6 font-[Manrope] text-[32px] font-semibold leading-[40px] text-[#023E8A]">
          Need Immediate Guidance?
        </h2>

        <p className="mb-10 font-[Inter] text-[18px] font-normal leading-[28px] text-[#404850]">
          Our network of 50+ mental health specialists is here to support you
          when things feel overwhelming. Professional care is just a click
          away.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#005d90] px-10 py-4 font-bold text-white transition hover:opacity-90"
          >
            <span className="material-symbols-outlined">call</span>
            Talk to an Expert
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#9cecfb] px-10 py-4 font-bold text-[#016d7a] transition hover:opacity-90"
          >
            <span className="material-symbols-outlined">mail</span>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}