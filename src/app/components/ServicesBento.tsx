export default function ServicesBento() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-headline-lg font-headline-lg text-deep-ocean mb-4">
          Comprehensive Wellness Tools
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">
          Designed to support your unique mental health journey through
          integrated science and nature-inspired techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Breathing Exercises */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-3xl glass-panel p-10 hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <span className="material-symbols-outlined text-4xl text-primary">
                air
              </span>
              <h3 className="text-headline-md font-headline-md text-deep-ocean">
                Breathing Exercises
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Guided breathing techniques to calm your mind and reduce
                stress instantly. Sync your breath with the visual flow of
                coastal waves.
              </p>
              <ul className="space-y-2 text-label-md text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
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
              <button className="mt-4 bg-primary text-on-primary px-6 py-2 rounded-full font-label-md flex items-center gap-2 group-hover:gap-4 transition-all">
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
        <div className="md:col-span-4 glass-panel rounded-3xl p-8 flex flex-col justify-between hover:bg-secondary-container transition-colors duration-300">
          <div className="space-y-4">
            <span className="material-symbols-outlined text-3xl text-secondary">
              music_note
            </span>
            <h3 className="text-headline-md font-headline-md text-deep-ocean">
              Nature Tunes
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Soothing natural sounds to help you relax and find your inner
              peace.
            </p>
          </div>
          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between p-3 bg-surface-container rounded-xl">
              <span className="text-label-md">Ocean Mist</span>
              <span className="material-symbols-outlined text-primary cursor-pointer">
                play_circle
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-container rounded-xl">
              <span className="text-label-md">Forest Whisper</span>
              <span className="material-symbols-outlined text-primary cursor-pointer">
                play_circle
              </span>
            </div>
          </div>
        </div>

        {/* Meditation & Recovery */}
        <div className="md:col-span-4 bg-deep-ocean text-on-primary rounded-3xl p-8 flex flex-col gap-6 hover:-translate-y-2 transition-transform shadow-xl">
          <span className="material-symbols-outlined text-4xl text-secondary-fixed">
            self_improvement
          </span>
          <h3 className="text-headline-md font-headline-md">
            Meditation &amp; Recovery
          </h3>
          <p className="text-body-md text-primary-fixed opacity-90">
            Professional sessions led by wellness experts to accelerate your
            mental health recovery.
          </p>
          <div className="mt-auto flex items-center gap-2 text-label-sm font-bold uppercase tracking-wider">
            View Programs{" "}
            <span className="material-symbols-outlined">north_east</span>
          </div>
        </div>

        {/* Mental Health Assessment */}
        <div className="md:col-span-8 glass-panel rounded-3xl p-10 border-2 border-primary/20 relative">
          <div className="absolute top-8 right-8">
            <span className="material-symbols-outlined text-6xl text-primary/10">
              assignment_turned_in
            </span>
          </div>
          <div className="max-w-md space-y-6">
            <h3 className="text-headline-md font-headline-md text-deep-ocean">
              Mental Health Assessment
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Our AI-driven chatbot generates a personalized checklist based
              on your current emotional state.
            </p>
            <div className="p-4 bg-primary-fixed/20 rounded-xl border border-primary/10">
              <p className="text-label-md italic text-on-surface-variant">
                &quot;Identify your triggers and track your progress over time
                with clinical-grade insights.&quot;
              </p>
            </div>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3">
              Take Assessment Now
              <span className="material-symbols-outlined">trending_up</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
