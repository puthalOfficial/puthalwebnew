
export default function Services() {
  return (
    <section className="mx-auto w-full max-w-8xl px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
      {/* Heading */}
      <div className="mb-12 flex flex-col items-center justify-center gap-4 text-center lg:mb-16">
        <h2 className="text-3xl font-bold text-[#023E8A] sm:text-4xl">
          Patient Services
        </h2>

        <p className="max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Comprehensive mental wellness tools designed to support your
          journey with the rhythmic calm of the ocean.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        {/* Breathing */}
        <div className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 transition-all hover:shadow-2xl sm:min-h-[400px] md:col-span-2 lg:col-span-8">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCstGK369RHXRL-zYR0-6o3LxRODZW2WCKulbIvgjMUdamEkDJzGOGXE_duR6AV8NLqGrag3w5sx3-h70mUJ2KGL9RQbcBPU-pYwfpRPmqP1Oqf2ltffvaQVxenfTj4TyW15mtUTGSzeS-CC4YFtBelak8TbiL0iMxkyUN47_PnfmlKoV1Uf6fyAVVRcB6uUszc4NvMJug16nyzXyXrRUVD_obPatdROwOW47agWZeWndTDZiEdVhBzfGMQws1hpj8quMaPkwjGg9I"
            alt="Breathing Exercise"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8">

            <h3 className="mb-2 text-xl font-semibold text-white sm:text-2xl">
              Breathing Exercises
            </h3>

            <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              Guided breathing techniques inspired by tide patterns to calm
              your mind and reduce stress instantly.
            </p>
          </div>
        </div>

        {/* Meditation */}
        <div className="flex min-h-[300px] flex-col justify-between rounded-3xl border border-gray-200 bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all hover:border-[#005d90]/30 sm:p-8 md:col-span-1 lg:col-span-4">
          <div className="flex flex-col gap-2">
            <div className="mb-5 flex h-12 w-full items-center justify-center rounded-xl bg-[#9cecfb]/20">
              <span className="material-symbols-outlined text-[#006875]">
                Self Improvement
              </span>
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#023E8A] sm:text-2xl">
              Meditation & Recovery
            </h3>

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Life can sometimes feel overwhelming, leaving us stressed, tired, or disconnected from ourselves. Our guided sessions offer a peaceful space to slow down, clear your mind, and take care of your emotional well-being. Learn simple ways to manage stress, improve focus, and build healthier habits for a calmer, happier, and more balanced life
            </p>
          </div>

          
        </div>

        {/* Nature Tunes */}
        <div className="group min-h-[280px] rounded-3xl bg-gray-100 p-6 transition-all hover:bg-[#9cecfb] sm:p-8 md:col-span-1 lg:col-span-4">
          <div className="mb-5 flex h-12 w-full items-center justify-center rounded-xl bg-white shadow">
            <span className="material-symbols-outlined text-[#005d90] group-hover:animate-pulse">
              Music Note
            </span>
          </div>

          <h3 className="mb-3 text-xl font-semibold text-[#023E8A] sm:text-2xl">
            Nature Tunes
          </h3>

          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            Calming wellness experiences created to help you slow down, clear your mind, and reconnect with yourself. Discover simple practices that support better focus, reduce everyday stress, and encourage deep relaxation and more restful sleep.
          </p>
        </div>

        {/* Journaling */}
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-gray-200 p-6 sm:p-8 md:col-span-2 lg:col-span-8">
          <div className="relative z-10 grid h-full gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 ">
              <div className=" flex h-12 w-full items-center justify-center rounded-xl bg-white shadow">
                <span className="material-symbols-outlined text-gray-600">
                  Edit Note
                </span>
              </div>
              <div className="mb-3 text-xl font-semibold text-[#023E8A] sm:text-2xl">

              <h3 className="mb-3 text-xl font-semibold text-[#023E8A] sm:text-2xl">
                Reflective Journaling
              </h3>

              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
               A simple and thoughtful journaling experience that helps you put your feelings into words, understand your emotional patterns, and reflect on what matters most. With AI-powered insights, discover helpful patterns in your thoughts and build greater self-awareness over time
              </p>
              </div>
            </div>

            {/* Image */}
            <div className="hidden items-center justify-center md:flex md:justify-end">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/60 bg-white/40 p-3 lg:h-48 lg:w-48">
                <img
                  src="/images/hero.png"
                  alt="Reflective journaling"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
