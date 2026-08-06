export default function ServicesBento() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-24 md:px-12">
      <div className="mb-16 text-center">
  <h2 className="mb-4 font-[Manrope] text-[32px] font-semibold leading-[40px] text-[#023E8A]">
    Comprehensive Wellness Tools
  </h2>

  <p className="mx-auto max-w-2xl font-[Inter] text-[16px] font-normal leading-[24px] text-[#404850]">
    Designed to support your unique mental health journey through
    integrated science and nature-inspired techniques.
  </p>
</div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Breathing Exercises */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/30 p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-2xl md:col-span-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1 space-y-4">
              <span className="material-symbols-outlined text-4xl text-primary">
                air
              </span>
              <h3 className="font-[Manrope] text-[24px] font-semibold leading-[32px] text-[#023E8A]">
                Breathing Exercises
              </h3>
             <p className="font-[Inter] text-[16px] leading-[24px] text-[#404850]">
                Guided breathing techniques to calm your mind and reduce
                stress instantly. Sync your breath with the visual flow of
                coastal waves.
              </p>
              <ul className="space-y-2 font-[Inter] text-[14px] font-medium leading-[20px] text-[#191c1e]">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#005d90]">
                    check_circle
                  </span>{" "}
                  Box Breathing (4-4-4-4)
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>{" "}
                  Deep Belly Release
                </li>
              </ul>
              <button className="mt-4 flex items-center gap-2 rounded-full bg-[#005d90] px-6 py-2 font-[Inter] text-[14px] font-medium text-white transition-all group-hover:gap-4">
                Start Session{" "}
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>
            </div>
            <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden shadow-inner"></div>
          </div>
        </div>

        {/* Nature Tunes */}
       {/* Nature Tunes */}
<div className="md:col-span-4 flex flex-col justify-between rounded-3xl border border-white/20 bg-white/30 p-8 shadow-2xl backdrop-blur-xl transition-colors duration-300 hover:bg-[#9cecfb]">
  <div className="space-y-4">
    <span className="material-symbols-outlined text-3xl text-[#006875]">
      music_note
    </span>

    <h3 className="font-[Manrope] text-[24px] font-semibold leading-[32px] text-[#023E8A]">
      Nature Tunes
    </h3>

    <p className="font-[Inter] text-[16px] leading-[24px] text-[#404850]">
      Soothing natural sounds to help you relax and find your inner peace.
    </p>
  </div>

  <div className="mt-8 space-y-3">
    <div className="flex items-center justify-between rounded-xl bg-[#eceef0] p-3">
      <span className="font-[Inter] text-[14px] font-medium leading-[20px] text-[#191c1e]">
        Ocean Mist
      </span>

      <span className="material-symbols-outlined cursor-pointer text-[#005d90] transition hover:scale-110">
        play_circle
      </span>
    </div>

    <div className="flex items-center justify-between rounded-xl bg-[#eceef0] p-3">
      <span className="font-[Inter] text-[14px] font-medium leading-[20px] text-[#191c1e]">
        Forest Whisper
      </span>

      <span className="material-symbols-outlined cursor-pointer text-[#005d90] transition hover:scale-110">
        play_circle
      </span>
    </div>
  </div>
</div>

        {/* Meditation & Recovery */}
       {/* Meditation & Recovery */}
<div className="md:col-span-4 flex flex-col gap-6 rounded-3xl bg-[#023E8A] p-8 text-white shadow-xl transition-transform duration-300 hover:-translate-y-2">
  <span className="material-symbols-outlined text-4xl text-[#9feffe]">
    self_improvement
  </span>

  <h3 className="font-[Manrope] text-[24px] font-semibold leading-[32px]">
    Meditation &amp; Recovery
  </h3>

  <p className="font-[Inter] text-[16px] leading-[24px] text-[#cde5ff] opacity-90">
    Professional sessions led by wellness experts to accelerate your
    mental health recovery.
  </p>

  <div className="mt-auto flex items-center gap-2 font-[Inter] text-[12px] font-bold uppercase tracking-[0.08em]">
    View Programs
    <span className="material-symbols-outlined">
      north_east
    </span>
  </div>
</div>

        {/* Mental Health Assessment */}
       {/* Mental Health Assessment */}
<div className="relative rounded-3xl border-2 border-[#005d90]/20 bg-white/30 p-10 shadow-2xl backdrop-blur-xl md:col-span-8">
  <div className="absolute top-8 right-8">
    <span className="material-symbols-outlined text-6xl text-[#005d90]/10">
      assignment_turned_in
    </span>
  </div>

  <div className="max-w-md space-y-6">
    <h3 className="font-[Manrope] text-[24px] font-semibold leading-[32px] text-[#023E8A]">
      Mental Health Assessment
    </h3>

    <p className="font-[Inter] text-[16px] leading-[24px] text-[#404850]">
      Our AI-driven chatbot generates a personalized checklist based on
      your current emotional state.
    </p>

    <div className="rounded-xl border border-[#005d90]/10 bg-[#cde5ff]/20 p-4">
      <p className="font-[Inter] text-[14px] italic leading-[20px] text-[#404850]">
        &quot;Identify your triggers and track your progress over time with
        clinical-grade insights.&quot;
      </p>
    </div>

    <button className="flex items-center gap-3 rounded-xl bg-[#005d90] px-8 py-4 font-bold text-white transition duration-300 hover:opacity-90">
      Take Assessment Now
      <span className="material-symbols-outlined">
        trending_up
      </span>
    </button>
  </div>
</div>
      </div>
    </section>
  );
}
