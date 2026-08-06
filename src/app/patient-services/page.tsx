import Image from "next/image";
import FloatingFocusCard from "./FloatingFocusCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PatientServices() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-32 pb-20">

  {/* Background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-100"></div>

  {/* Decorative Blur */}
  <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-cyan-300/40 to-transparent opacity-30 blur-3xl"></div>

  <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-12">

    {/* Left */}
    <div className="space-y-6">

      <div className="inline-flex items-center gap-2 rounded-full bg-[#9cecfb] px-4 py-1 font-[Inter] text-[12px] font-semibold leading-[16px] tracking-[0.05em] text-[#016d7a]">
        <span className="material-symbols-outlined text-[16px]">
          verified
        </span>
        Trusted by 12K+ Users Globally
      </div>

      <h1 className="font-[Manrope] text-[48px] font-bold leading-[56px] tracking-[-0.02em] text-[#023E8A]">
        Coastal Serenity for Your Mental Wellness
      </h1>

      <p className="max-w-lg font-[Inter] text-[18px] font-normal leading-[28px] text-[#404850]">
        Mann ki Uthal, Solve on Puthal. Navigate your emotional journey
        with professional tools and guided support in a digital sanctuary.
      </p>

      <div className="flex flex-wrap gap-4">

        <button className="rounded-lg bg-[#0077b6] px-8 py-3 font-bold text-[#f3f7ff] transition-shadow hover:shadow-lg">
          Start Your Assessment
        </button>

        <button className="rounded-lg border border-[#005d90] px-8 py-3 font-bold text-[#005d90] transition-colors hover:bg-[#005d90]/5">
          Explore Modules
        </button>

      </div>

    </div>

    {/* Right */}
    <div className="relative">

      <div className="aspect-square rotate-3 overflow-hidden rounded-3xl border border-white/20 bg-white/30 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:rotate-0">

        <div className="relative h-full w-full overflow-hidden rounded-2xl">

          <img
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK3ckphQdQ0D_taWzaA8HUf1qcqTTVEb4uAdgm_AHn93G0JaX1WmrozHoV3zqrxOvNPAh7g_m73tTMKv0Qpe03htggVGtCPNn8V7yG90iQ7oweB7wGw4wK97UgiKGhC2ZEPNRhnIW7aSj8pHdtXRWdXewuETeL819T5AM6Rhj4hAwHgM8NQbEj4QuKEyUBSCSO-SAdZCX2zCEb24qcdbmVdOLx3_avX9JNw6HPCGqM77DrLZ7PO-d8sQtODPzOu-UJuLy1Pqea0xY"
            alt="Hero"
            width={500}
            height={500}
          />

        </div>

      </div>

      <FloatingFocusCard />

    </div>

  </div>

</header>
      {/* Services Bento Grid */}
      <section className="mx-auto max-w-[1200px] px-4 py-24 md:px-12">
  {/* Heading */}
  <div className="mb-16 text-center">
    <h2 className="mb-4 font-[Manrope] text-[32px] font-semibold leading-[40px] text-[#023E8A]">
      Comprehensive Wellness Tools
    </h2>

    <p className="mx-auto max-w-2xl font-[Inter] text-[16px] leading-[24px] text-[#404850]">
      Designed to support your unique mental health journey through integrated
      science and nature-inspired techniques.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-12">

    {/* Breathing Exercises */}
    <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/30 p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-2xl md:col-span-8">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="flex-1 space-y-4">

          <span className="material-symbols-outlined text-4xl text-[#005d90]">
            air
          </span>

          <h3 className="font-[Manrope] text-[24px] font-semibold leading-[32px] text-[#023E8A]">
            Breathing Exercises
          </h3>

          <p className="font-[Inter] text-[16px] leading-[24px] text-[#404850]">
            Guided breathing techniques to calm your mind and reduce stress
            instantly. Sync your breath with the visual flow of coastal waves.
          </p>

          <ul className="space-y-2 font-[Inter] text-[14px] font-medium leading-[20px] text-[#191c1e]">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#005d90]">
                check_circle
              </span>
              Box Breathing (4-4-4-4)
            </li>

            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#005d90]">
                check_circle
              </span>
              Deep Belly Release
            </li>
          </ul>

          <button className="mt-4 flex items-center gap-2 rounded-full bg-[#005d90] px-6 py-2 font-[Inter] text-[14px] font-medium text-white transition-all group-hover:gap-4">
            Start Session
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </button>

        </div>

        <div className="h-64 w-full overflow-hidden rounded-2xl shadow-inner md:w-64"></div>
      </div>
    </div>

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
          <span className="font-[Inter] text-[14px] font-medium">
            Ocean Mist
          </span>

          <span className="material-symbols-outlined cursor-pointer text-[#005d90]">
            play_circle
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-[#eceef0] p-3">
          <span className="font-[Inter] text-[14px] font-medium">
            Forest Whisper
          </span>

          <span className="material-symbols-outlined cursor-pointer text-[#005d90]">
            play_circle
          </span>
        </div>
      </div>
    </div>

    {/* Meditation */}
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

    {/* Mental Health */}
    <div className="relative rounded-3xl border-2 border-[#005d90]/20 bg-white/30 p-10 shadow-2xl backdrop-blur-xl md:col-span-8">
      <div className="absolute right-8 top-8">
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

        <button className="flex items-center gap-3 rounded-xl bg-[#005d90] px-8 py-4 font-bold text-white transition hover:opacity-90">
          Take Assessment Now
          <span className="material-symbols-outlined">
            trending_up
          </span>
        </button>
      </div>
    </div>

  </div>
</section>

      {/* Recovery Journey Section */}
 <section className="bg-[#f2f4f6] py-24">
  <div className="mx-auto max-w-[1200px] px-4 md:px-12">
    <div className="flex flex-col items-center gap-16 md:flex-row">
      
      {/* Left */}
      <div className="order-2 flex-1 md:order-1">
        <div className="grid grid-cols-1 gap-6">

          <div className="flex items-start gap-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#005d90] font-bold text-white">
              01
            </div>

            <div>
              <h4 className="mb-2 font-[Manrope] text-[24px] font-semibold leading-[32px] text-[#023E8A]">
                Register &amp; Chat
              </h4>

              <p className="font-[Inter] text-[16px] leading-[24px] text-[#404850]">
                Log in and provide accurate responses to our chatbot for a
                personalized wellness plan.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#005d90] font-bold text-white">
              02
            </div>

            <div>
              <h4 className="mb-2 font-[Manrope] text-[24px] font-semibold leading-[32px] text-[#023E8A]">
                Engage with Tools
              </h4>

              <p className="font-[Inter] text-[16px] leading-[24px] text-[#404850]">
                Access breathing, journaling, and tunes. Earn points as you
                complete daily exercises.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#005d90] font-bold text-white">
              03
            </div>

            <div>
              <h4 className="mb-2 font-[Manrope] text-[24px] font-semibold leading-[32px] text-[#023E8A]">
                Professional Support
              </h4>

              <p className="font-[Inter] text-[16px] leading-[24px] text-[#404850]">
                If stress levels remain high, we'll connect you directly with
                clinical experts near you.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right */}
      <div className="order-1 flex-1 md:order-2">
        <h2 className="mb-8 font-[Manrope] text-[32px] font-semibold leading-[40px] text-[#023E8A]">
          How Our Journey Works
        </h2>

        <div className="group relative aspect-video overflow-hidden rounded-3xl">
          <img
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCieggxm2-5TyGDTwCLPH2Ul9uO26FS5cGGpav0UPm26Vpna6UUMdbYICsEDOeKlcxjRU1eGnOELT0UIkmcwlJtcxtaB3bpPs7Bt3gXNSfzWS67oMLn809VrRdhGiOgnBI1a2oU1HcC_DG2OTttTIeDHWsKzUCwL4UESFwTP1-NYJt-aGmmCI41uraMKaXxE0DLdShBoO_rVPVJ8PONuQ7bbv4iQ3xwDlZ9O1sADBdCs0sjzEAziNfgUWH4yIPICPk8YCv4VJ0DAek"
            alt="Wellness Clinic"
            width={800}
            height={450}
          />

          <div className="absolute inset-0 bg-[#005d90]/20 transition-colors duration-500 group-hover:bg-transparent"></div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Professional Support CTA */}
     <section className="px-4 py-24 md:px-12">
  <div className="mx-auto max-w-4xl rounded-[2rem] border-2 border-dashed border-[#005d90]/30 bg-white/30 p-12 text-center shadow-2xl backdrop-blur-xl">
    <h2 className="mb-6 font-[Manrope] text-[32px] font-semibold leading-[40px] text-[#023E8A]">
      Need Immediate Guidance?
    </h2>

    <p className="mb-10 font-[Inter] text-[18px] font-normal leading-[28px] text-[#404850]">
      Our network of 50+ mental health specialists is here to support
      you when things feel overwhelming. Professional care is just a
      click away.
    </p>

    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      <a
        href="#"
        className="flex items-center justify-center gap-2 rounded-xl bg-[#005d90] px-10 py-4 font-bold text-white transition hover:opacity-90"
      >
        <span className="material-symbols-outlined">
          call
        </span>
        Talk to an Expert
      </a>

      <a
        href="#"
        className="flex items-center justify-center gap-2 rounded-xl bg-[#9cecfb] px-10 py-4 font-bold text-[#016d7a] transition hover:opacity-90"
      >
        <span className="material-symbols-outlined">
          mail
        </span>
        Contact Support
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer/>  
        </>
  );
}
