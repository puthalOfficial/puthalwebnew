import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen w-full justify-center items-center px-4 pt-24 md:px-12 lg:pt-0">
      <div className="grid grid-cols-1 items-center gap-44 lg:grid-cols-2">
        {/* Left Content */}
        <div className="z-10 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#9cecfb]/60 bg-[#9cecfb]/30 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#006875]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#016d7a]">
              Puthal Wellness
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-[#023E8A] md:text-7xl">
            Mann ki Uthal
            <br />
            <span className="text-[#005d90]">Solve on Puthal</span>
          </h1>

          <p className="max-w-lg text-lg leading-8 text-[#404850]">
            Your comprehensive sanctuary for
            mental wellness. Navigate your emotional journey with professional
            tools and guided support.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-[#005d90] px-8 py-4 font-semibold text-white transition  hover:shadow-[#005d90]/30">
              Get Started Free
            </button>

            <a href="/about-us">
              <button  className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-8 py-4 font-medium transition hover:bg-gray-100">
                
                Watch Our Story
              </button>
            </a>
          </div>

          
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 translate-x-10 -translate-y-10 rounded-full bg-[#006875]/10 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-[32px] border-4 border-white/40 shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcwQseehbSoTaIwweXQ4q9RmlDpZKaE46UNxZZ09YxfMt-RdPO0iuCkXdQ60gmwNnsLcV6HhyXH5GY73pJvPiIvh2Xf1baDL5JsbGxwyhUSO4zjtqxOeU6LiiYL-jB-ZlmyqUm0rHcxNJaSkDAZwVhcEM9nzNuQMF-r3bFP5TKVPP6b90J3MNT4d4QHXnQ8TegAqXCL08rrxUmtLrlDileGcEyQ7vNW37IOvHUcHVacObvtBWVlRTkQzngUZtMtS5FmpPg0Wsvnsc"
              alt="Hero Image"
              width={640}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 rounded-2xl border border-white/30 bg-white/80 p-6 shadow-xl ">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-lime-200 p-3">
                <span className="material-symbols-outlined text-[#006875]">
                  waves
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#006875]">
                  Real-time Zen
                </p>

                <p className="font-bold text-gray-900">
                  50+ Experts Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}