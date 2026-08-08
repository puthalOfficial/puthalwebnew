export default function CTA() {
  return (
    <section className="mx-auto max-w-[1200px] pl-2 py-24 text-center md:px-12">
      <div className="relative overflow-hidden rounded-[40px] bg-[#023E8A] p-12 md:p-24">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            Ready to find your calm?
          </h2>

          <p className="mb-12 text-lg leading-8 text-white/80">
            Join thousands of others who have redefined their peace of mind
            with Puthal&apos;s coastal wellness tools.
          </p>

          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <button className="rounded-xl bg-white px-10 py-5 text-lg font-semibold text-[#023E8A] transition hover:bg-lime-300">
              Get Started Now
            </button>

            <button className="rounded-xl border border-white/20 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}