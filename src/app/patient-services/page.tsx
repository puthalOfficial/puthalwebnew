import Image from "next/image";
import FloatingFocusCard from "./FloatingFocusCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DoctorMatching from "./DoctorMatching";
import Stress from "./Stress";
import Activities from "./Activities";
import Journey from "./Journey";

export default function PatientServices() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar/>

      {/* Hero Section */}
      

{/* Decorative Blur */}

<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 px-2 py-10 md:px-20 lg:gap-16">

  {/* Left */}
  <div className="space-y-6 text-center lg:text-left">


    <h1 className="font-[Manrope] text-[34px] font-bold leading-[42px] tracking-[-0.02em] text-[#023E8A] sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px]">
      Coastal Serenity for Your Mental Wellness
    </h1>

    <p className="mx-auto max-w-lg font-[Inter] text-[16px] font-normal leading-[26px] text-[#404850] sm:text-[18px] sm:leading-[28px] lg:mx-0">
      Mann ki Uthal, Solve on Puthal. Navigate your emotional journey
      with professional tools and guided support in a digital sanctuary.
    </p>

    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-start justify-center">

      <button className="w-full rounded-lg bg-[#0077b6] px-6 py-3 font-bold text-[#f3f7ff] transition-shadow hover:shadow-lg sm:w-auto sm:px-8">
        Start Your Assessment
      </button>

      <button className="w-full rounded-lg border border-[#005d90] px-6 py-3 font-bold text-[#005d90] transition-colors hover:bg-[#005d90]/5 sm:w-auto sm:px-8">
        Explore Modules
      </button>

    </div>

  </div>


  {/* Right */}
  <div className="relative mx-auto w-full max-w-[400px] lg:max-w-none">

    <div className="aspect-square  rotate-2 overflow-hidden rounded-3xl border border-white/20 bg-white/30 p-3 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:rotate-0 sm:p-4">

      <div className="relative h-full  w-full overflow-hidden rounded-2xl">

        <img
          className="h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK3ckphQdQ0D_taWzaA8HUf1qcqTTVEb4uAdgm_AHn93G0JaX1WmrozHoV3zqrxOvNPAh7g_m73tTMKv0Qpe03htggVGtCPNn8V7yG90iQ7oweB7wGw4wK97UgiKGhC2ZEPNRhnIW7aSj8pHdtXRWdXewuETeL819T5AM6Rhj4hAwHgM8NQbEj4QuKEyUBSCSO-SAdZCX2zCEb24qcdbmVdOLx3_avX9JNw6HPCGqM77DrLZ7PO-d8sQtODPzOu-UJuLy1Pqea0xY"
          alt="Hero"
          width={300}
          height={300}
        />

      </div>

    </div>

    <FloatingFocusCard />

  </div>

</div>

<Activities/>
<Stress/>
<DoctorMatching/>

<Journey/>

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
     <section id="page" className="px-4 py-24 md:px-12">
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
        className="flex items-center justify-center gap-2 rounded-xl bg-[#9cecfb] px-10 py-4 font-bold text-[#016d7a] transition hover:opacity-90"
      >
        
        Download the App 
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <Footer/>  
        </>
  );
}
