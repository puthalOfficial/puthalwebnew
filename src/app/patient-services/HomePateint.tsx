"use client"

export default function HomePateint () {
  return (
    <section className=" sm:px-1 lg:px-1">
      <div className="relative isolate mx-auto min-h-[420px] max-w-8xl overflow-hidden rounded-3xl sm:min-h-[500px] lg:min-h-[560px]">
        {/* Background image */}
        <img
          src="/stressimage.png"
          alt="A person experiencing mental stress"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />

        {/* Content */}
        <div className="flex min-h-[420px] items-center px-6 py-12 sm:min-h-[500px] sm:px-10 lg:min-h-4xl lg:px-16 ">
          <div className="max-w-2xl text-white space-y-10">

            <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Feeling overwhelmed
              <span className="mt-2 block text-sky-700">
                You don't have to face it alone.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8 lg:text-lg">
              Stress, anxiety, and constant pressure can feel exhausting.
              Take a breath, give yourself some space, and take the first
              step towards feeling better.
            </p>

            <a
              href="/Clinic"
              className="mt-30 inline-flex items-center justify-center gap-3 rounded-full bg-sky-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-900 sm:text-base"
            >
              Find Your Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
