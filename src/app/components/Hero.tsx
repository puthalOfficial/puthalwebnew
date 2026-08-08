
"use client";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-24">

        {/* Left Content */}
        <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#9cecfb]/60 bg-[#9cecfb]/30 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#006875]" />

            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#016d7a] sm:text-xs">
              Puthal Wellness
            </span>
          </div>

          {/* Heading */}
          <h1 className="flex w-full flex-col items-center text-4xl font-bold leading-[1.08] tracking-tight text-[#023E8A] sm:text-5xl md:text-6xl lg:items-start lg:text-7xl">
            <span className="block whitespace-nowrap">
              Mann ki Uthal
            </span>

            <span className="mt-1 block whitespace-nowrap text-[#005d90]">
              Solve on Puthal
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-7 text-[#404850] sm:text-lg sm:leading-8">
            Your comprehensive sanctuary for mental wellness. Navigate your
            emotional journey with professional tools and guided support.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <button className="w-full rounded-xl bg-[#005d90] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#004a73] hover:shadow-lg hover:shadow-[#005d90]/30 active:scale-95 sm:w-auto sm:px-8 sm:py-4">
              Get Started Free
            </button>

            <a href="/about-us" className="w-full sm:w-auto">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 px-7 py-3.5 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 active:scale-95 sm:w-auto sm:px-8 sm:py-4">
                Watch Our Story
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">

          {/* Background Glow */}
          <div className="absolute inset-0 translate-x-4 -translate-y-4 rounded-full bg-[#006875]/10 blur-3xl sm:translate-x-8 sm:-translate-y-8 lg:translate-x-10 lg:-translate-y-10" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-[24px] border-4 border-white/50 bg-gray-100 shadow-2xl sm:rounded-[32px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcwQseehbSoTaIwweXQ4q9RmlDpZKaE46UNxZZ09YxfMt-RdPO0iuCkXdQ60gmwNnsLcV6HhyXH5GY73pJvPiIvh2Xf1baDL5JsbGxwyhUSO4zjtqxOeU6LiiYL-jB-ZlmyqUm0rHcxNJaSkDAZwVhcEM9nzNuQMF-r3bFP5TKVPP6b90J3MNT4d4QHXnQ8TegAqXCL08rrxUmtLrlDileGcEyQ7vNW37IOvHUcHVacObvtBWVlRTkQzngUZtMtS5FmpPg0Wsvnsc"
              alt="Puthal Wellness"
              width={640}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-5 left-2 max-w-[calc(100%-1rem)] rounded-2xl border border-white/40 bg-white/90 p-3 shadow-xl backdrop-blur-md sm:-bottom-7 sm:left-4 sm:p-5 lg:-bottom-8 lg:-left-8 lg:p-6">
            <div className="flex items-center gap-3 sm:gap-4">

              {/* Icon */}
              <div className="flex-shrink-0 rounded-lg bg-lime-200 p-2 sm:p-3">
                <span className="material-symbols-outlined text-[#006875]">
                  waves
                </span>
              </div>

              {/* Text */}
              <div>
                <p className="text-xs font-semibold text-[#006875] sm:text-sm">
                  Real-time Zen
                </p>

                <p className="text-sm font-bold text-gray-900 sm:text-base">
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
