export default function CTA() {
  return (
    <section className="py-24 px-4 md:px-12">
      <div className="max-w-300 mx-auto rounded-[3rem] overflow-hidden relative shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#005d90] via-[#005d90] to-[#006875]" />

        

        <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center">
          <h2 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold font-[Manrope] text-white mb-6">
            Ready to find your calm?
          </h2>

          <p className="text-[18px] leading-[28px] font-normal font-[Inter] text-white/90 mb-10 max-w-2xl">
            Join thousands of others who have redefined their mental wellness
            journey with Puthal. Download our app today and start with a free
            guided breathing session.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-white text-[#005d90] px-10 py-4 rounded-xl font-bold text-[14px] leading-[20px] tracking-[0.01em] font-[Inter] flex items-center gap-3 hover:bg-[#f7f9fb] transition-colors shadow-lg active:scale-95">
              Download App
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-[14px] leading-[20px] tracking-[0.01em] font-[Inter] hover:bg-white/20 transition-colors active:scale-95">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}