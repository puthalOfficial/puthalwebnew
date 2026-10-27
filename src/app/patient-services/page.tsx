import Image from "next/image";
import FloatingFocusCard from "./FloatingFocusCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DoctorMatching from "./DoctorMatching";
import Stress from "./Stress";
import Activities from "./Activities";
import Journey from "./Journey";
import StepDownload from "./StepDownload";

export default function PatientServices() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar/>

      {/* Hero Section */}
      

{/* Decorative Blur */}

<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 px-10 py-10 md:px-20 lg:gap-16">

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
 <StepDownload/>

      {/* Professional Support CTA */}
     <section id="page" className="px-4 py-24 md:px-12">
  <div className="mx-auto max-w-4xl rounded-[2rem]  border-[#005d90]/30 bg-white/30 p-12 text-center shadow-2xl backdrop-blur-xl">
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
