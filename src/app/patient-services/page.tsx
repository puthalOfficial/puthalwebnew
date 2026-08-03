import Image from "next/image";
import FloatingFocusCard from "@/patient-services/FloatingFocusCard";

export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <nav className="bg-surface/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto">
        <div className="text-headline-lg font-headline-lg font-bold text-primary tracking-tight">
          Puthal
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="text-primary border-b-2 border-primary font-bold pb-1 text-label-md font-label-md"
            href="#"
          >
            Mental Wellness
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md"
            href="#"
          >
            Specialists
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md"
            href="#"
          >
            For Clinics
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md"
            href="#"
          >
            Our Story
          </a>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md hover:opacity-90 active:scale-95 duration-150 ease-in-out transition-all">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-wave-gradient" />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none" />
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px]">
                verified
              </span>
              Trusted by 12K+ Users Globally
            </div>
            <h1 className="text-display-lg font-display-lg text-deep-ocean leading-tight">
              Coastal Serenity for Your Mental Wellness
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
              Mann ki Uthal, Solve on Puthal. Navigate your emotional journey
              with professional tools and guided support in a digital
              sanctuary.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
                Start Your Assessment
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/5 transition-colors">
                Explore Modules
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass-panel p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  className="object-cover"
                  alt="A serene coastal landscape with soft rolling waves onto a white sand beach under a pastel sunrise. The style is minimalist and high-key, emphasizing tranquility and breathing room. Soft seafoam greens and pale blues dominate the palette, creating an airy wellness-focused aesthetic that feels professional and calm."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK3ckphQdQ0D_taWzaA8HUf1qcqTTVEb4uAdgm_AHn93G0JaX1WmrozHoV3zqrxOvNPAh7g_m73tTMKv0Qpe03htggVGtCPNn8V7yG90iQ7oweB7wGw4wK97UgiKGhC2ZEPNRhnIW7aSj8pHdtXRWdXewuETeL819T5AM6Rhj4hAwHgM8NQbEj4QuKEyUBSCSO-SAdZCX2zCEb24qcdbmVdOLx3_avX9JNw6HPCGqM77DrLZ7PO-d8sQtODPzOu-UJuLy1Pqea0xY"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <FloatingFocusCard />
          </div>
        </div>
      </header>

      {/* Services Bento Grid */}
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
              <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden shadow-inner" />
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
                  &quot;Identify your triggers and track your progress over
                  time with clinical-grade insights.&quot;
                </p>
              </div>
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3">
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
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 order-2 md:order-1">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-deep-ocean mb-2">
                      Register &amp; Chat
                    </h4>
                    <p className="text-body-md text-on-surface-variant">
                      Log in and provide accurate responses to our chatbot for
                      a personalized wellness plan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-deep-ocean mb-2">
                      Engage with Tools
                    </h4>
                    <p className="text-body-md text-on-surface-variant">
                      Access breathing, journaling, and tunes. Earn points as
                      you complete daily exercises.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-deep-ocean mb-2">
                      Professional Support
                    </h4>
                    <p className="text-body-md text-on-surface-variant">
                      If stress levels remain high, we&apos;ll connect you
                      directly with clinical experts near you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h2 className="text-headline-lg font-headline-lg text-deep-ocean mb-8">
                How Our Journey Works
              </h2>
              <div className="rounded-3xl overflow-hidden aspect-video relative group">
                <Image
                  className="object-cover"
                  alt="A modern, high-end wellness clinic interior with large windows overlooking a calm sea. The design is minimalist, featuring soft curved wooden furniture, lush indoor plants, and a palette of warm whites and seafoam blues. The lighting is natural and soft, creating an atmosphere of safety and professional care."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCieggxm2-5TyGDTwCLPH2Ul9uO26FS5cGGpav0UPm26Vpna6UUMdbYICsEDOeKlcxjRU1eGnOELT0UIkmcwlJtcxtaB3bpPs7Bt3gXNSfzWS67oMLn809VrRdhGiOgnBI1a2oU1HcC_DG2OTttTIeDHWsKzUCwL4UESFwTP1-NYJt-aGmmCI41uraMKaXxE0DLdShBoO_rVPVJ8PONuQ7bbv4iQ3xwDlZ9O1sADBdCs0sjzEAziNfgUWH4yIPICPk8YCv4VJ0DAek"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Support CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto glass-panel rounded-[2rem] p-12 text-center border-2 border-dashed border-primary/30">
          <h2 className="text-headline-lg font-headline-lg text-deep-ocean mb-6">
            Need Immediate Guidance?
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-10">
            Our network of 50+ mental health specialists is here to support
            you when things feel overwhelming. Professional care is just a
            click away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              href="#"
            >
              <span className="material-symbols-outlined">call</span>
              Talk to an Expert
            </a>
            <a
              className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              href="#"
            >
              <span className="material-symbols-outlined">mail</span>
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container border-t border-outline-variant/20 py-12">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="space-y-4">
            <div className="text-headline-md font-headline-md font-bold text-deep-ocean">
              PuthalWeb
            </div>
            <p className="text-body-md text-on-surface-variant">
              Empowering the next generation of digital wellness through
              innovative technology and human-centric design.
            </p>
            <div className="flex gap-4">
              <a
                className="text-primary hover:scale-110 transition-transform"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
              <a
                className="text-primary hover:scale-110 transition-transform"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-deep-ocean mb-6 font-label-md">
              Company
            </h5>
            <ul className="space-y-3 text-label-sm">
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-deep-ocean mb-6 font-label-md">
              Support
            </h5>
            <ul className="space-y-3 text-label-sm">
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-deep-ocean mb-6 font-label-md">
              Connect
            </h5>
            <p className="text-label-sm text-on-surface-variant mb-4">
              hello@puthal.com
            </p>
            <p className="text-label-sm text-on-surface-variant">
              +91 7724816439
            </p>
            <div className="mt-6">
              <p className="text-label-sm font-bold text-deep-ocean">
                Newsletter
              </p>
              <div className="mt-2 flex gap-2">
                <input
                  className="bg-surface rounded-lg border-none text-label-sm w-full"
                  placeholder="Email"
                  type="email"
                />
                <button className="bg-primary text-on-primary px-4 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-[18px]">
                    send
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm text-on-surface-variant">
            © 2024 Puthal. Coastal Wellness for All.
          </p>
          <div className="flex gap-6 text-label-sm text-on-surface-variant">
            <a className="hover:underline" href="#">
              Privacy
            </a>
            <a className="hover:underline" href="#">
              Terms
            </a>
            <a className="hover:underline" href="#">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
