import Image from "next/image";

export default function Services() {
  return (
    <section className="mx-auto max-w-8xl px-20  py-24 ">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="mb-4 text-4xl font-bold text-[#023E8A]">
            Patient Services
          </h2>

          <p className="max-w-4xl text-lg  text-gray-600">
            Comprehensive mental wellness tools designed to support your
            journey with the rhythmic calm of the ocean.
          </p>
        </div>

       
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        {/* Breathing */}
        <div className="group relative h-[500px] overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 transition-all hover:shadow-2xl md:col-span-8">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCstGK369RHXRL-zYR0-6o3LxRODZW2WCKulbIvgjMUdamEkDJzGOGXE_duR6AV8NLqGrag3w5sx3-h70mUJ2KGL9RQbcBPU-pYwfpRPmqP1Oqf2ltffvaQVxenfTj4TyW15mtUTGSzeS-CC4YFtBelak8TbiL0iMxkyUN47_PnfmlKoV1Uf6fyAVVRcB6uUszc4NvMJug16nyzXyXrRUVD_obPatdROwOW47agWZeWndTDZiEdVhBzfGMQws1hpj8quMaPkwjGg9I"
            alt="Breathing Exercise"
            height={400}
            width={740}
            className="absolute inset-0 h-full w-full object-cover"
          />
            
          

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 p-8 text-white">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#005d90]/40 backdrop-blur">
              <span className="material-symbols-outlined">
                air
              </span>
            </div>

            <h3 className="mb-2 text-2xl font-semibold">
              Breathing Exercises
            </h3>

            <p className="max-w-md text-white/80">
              Guided breathing techniques inspired by tide patterns to calm
              your mind and reduce stress instantly.
            </p>
          </div>
        </div>

        {/* Meditation */}
        <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white/70 p-8 shadow-lg backdrop-blur-md transition-all hover:border-[#005d90]/30 md:col-span-4">
          <div>
            <div className="mb-6 flex h-12  items-center justify-center rounded-xl bg-[#9cecfb]/20">
              <span className="material-symbols-outlined  text-[#006875]">
                self improvement
              </span>
            </div>

            <h3 className="mb-3 text-2xl font-semibold text-[#023E8A]">
              Meditation & Recovery
            </h3>

            <p className="text-gray-600">
              Professional sessions designed to reset your neurological
              pathways and foster long-term recovery.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-wider text-[#006875]">
                NEW SESSION AVAILABLE
              </span>

              <span className="h-2 w-2 rounded-full bg-[#006875]" />
            </div>
          </div>
        </div>

        {/* Nature Tunes */}
        <div className="group rounded-3xl bg-gray-100 p-8 transition-all hover:bg-[#9cecfb] md:col-span-4">
          <div className="mb-6 flex h-12 items-center justify-center rounded-xl bg-white shadow">
            <span className="material-symbols-outlined text-[#005d90] group-hover:animate-pulse">
              music note
            </span>
          </div>

          <h3 className="mb-3 text-2xl font-semibold text-[#023E8A]">
            Nature Tunes
          </h3>

          <p className="text-gray-600">
            Spatial audio recordings of coastal environments to enhance deep
            focus and natural sleep cycles.
          </p>
        </div>

        {/* Journaling */}
        <div className="relative overflow-hidden rounded-3xl bg-gray-200 p-8 md:col-span-8">
          <div className="relative z-10 grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-6 flex h-12  items-center justify-center rounded-xl bg-white shadow">
                <span className="material-symbols-outlined text-gray-600">
                  Edit note
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-[#023E8A]">
                Reflective Journaling
              </h3>

              <p className="text-gray-600">
                AI-assisted journaling that maps your emotional tides and
                provides personalized insights.
              </p>
            </div>

            <div className="hidden items-center justify-end md:flex">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border border-white/60 bg-white/40">
                <span className="material-symbols-outlined text-7xl text-[#005d90]/30">
                  <img src="/images/hero.png" className="rounded-full"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}