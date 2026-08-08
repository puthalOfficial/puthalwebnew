const BRANDS = ["TECHMIND", "ELVATE", "COREWELL", "SENTIEN", "MINDSET"];

export default function TrustedBy() {
  return (
    <section className=" w-full px-4 py-20 md:px-12">
      <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
        Empowering Digital Wellness with Industry Leaders
      </p>

      <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 md:gap-34">
        {BRANDS.map((brand) => (
          <span
            key={brand}
            className="text-2xl font-semibold tracking-wide text-slate-500 transition-colors duration-300 hover:text-slate-800"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}