import Image from "next/image";
import ChartBars from "./ChartBars";

export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto">
          <div className="text-headline-lg font-headline-lg font-bold text-primary tracking-tight">
            Puthal
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md"
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
              className="text-primary border-b-2 border-primary font-bold pb-1 text-label-md font-label-md"
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
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all duration-150">
            Get Started
          </button>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section className="wave-bg pt-16 md:pt-24 pb-32">
          <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-label-sm mb-6">
                  <span className="material-symbols-outlined mr-2 text-[18px]">
                    verified
                  </span>
                  Clinic Solutions Architecture
                </span>
                <h1 className="text-display-lg font-display-lg text-primary mb-6 leading-tight">
                  Elevate Your Clinic&apos;s{" "}
                  <span className="text-deep-ocean">Digital Identity.</span>
                </h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-lg">
                  Empower your practice with high-precision healthcare
                  marketing, real-time business analytics, and cohesive
                  branding solutions designed for the mental wellness era.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline-md text-label-md hover:shadow-lg transition-all active:scale-95">
                    Book a Demo
                  </button>
                  <button className="bg-surface border border-outline-variant text-primary px-8 py-4 rounded-lg font-headline-md text-label-md hover:bg-surface-container-low transition-all">
                    View Portfolios
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="glass-card rounded-xl p-8 shadow-sm animate-float">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-headline-md font-headline-md text-primary">
                      Patient Acquisition Growth
                    </h3>
                    <span className="material-symbols-outlined text-secondary">
                      trending_up
                    </span>
                  </div>
                  {/* Mock Data Visualization */}
                  <ChartBars />
                  <div className="flex justify-between text-label-sm font-label-sm text-outline">
                    <span>JAN</span>
                    <span>FEB</span>
                    <span>MAR</span>
                    <span>APR</span>
                    <span>MAY</span>
                    <span>JUN</span>
                  </div>
                </div>
                {/* Secondary Card Overlay */}
                <div className="absolute -bottom-10 -left-10 glass-card p-4 rounded-xl shadow-md hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-seafoam-accent flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface">
                        insights
                      </span>
                    </div>
                    <div>
                      <div className="text-label-md font-label-md font-bold">
                        +28% ROI
                      </div>
                      <div className="text-label-sm font-label-sm text-outline">
                        Marketing Efficiency
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Solutions */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="text-headline-lg font-headline-lg text-primary mb-4">
                Precision-Engineered Clinic Solutions
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto font-body-md">
                Data-driven strategies meets empathetic design to transform
                how patients perceive and interact with your clinic.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
              {/* Bento Item 1: Marketing */}
              <div className="md:col-span-2 glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
                <div className="z-10">
                  <h3 className="text-headline-md font-headline-md text-primary mb-2">
                    Healthcare Marketing
                  </h3>
                  <p className="text-on-surface-variant max-w-sm">
                    Strategic SEO, targeted social campaigns, and
                    patient-centric funnel optimization.
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Image
                    className="w-full h-full object-cover rounded-tl-3xl"
                    alt="A sophisticated minimalist digital workspace with clinical clean aesthetics, featuring soft blue and white colors, high-end medical marketing materials on screens, soft morning light hitting a marble desk, serene and professional atmosphere."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7jm7KIlq6PpQof8WDV8Iwi8-kPPdCeZ0BTqwjYES72c8wCs0Do4CITZFxXKvc91nPLBoAp7Vt61ZSL4Dzqht4Dy4694beezPb3bWAeRRJnfh-u8IRjRW0v4rJ0xz_TxGR4ZwJfoBr1gxp-2mnoPdbuJcqrPFlsMb2jhvFnWHdCuP3rGgzhZ_AYVjD81ZFKmdDe1sM7c2kSlHDdQ7kuCZ2ZY2OULzuZDQVGKloffFK-J_quDEa99ujpIFHlReL1p59zKyw5s8fwOg"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-8 z-10">
                  <button className="text-primary font-bold flex items-center hover:gap-2 transition-all">
                    Learn More{" "}
                    <span className="material-symbols-outlined ml-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>

              {/* Bento Item 2: Analytics */}
              <div className="md:row-span-2 bg-primary-container text-on-primary-container rounded-xl p-8 flex flex-col items-center text-center justify-center">
                <div className="mb-6 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">
                    analytics
                  </span>
                </div>
                <h3 className="text-headline-md font-headline-md mb-4">
                  Business Analytics
                </h3>
                <p className="text-on-primary-container/80 mb-8">
                  Real-time dashboards tracking patient lifetime value, churn
                  rates, and appointment density.
                </p>
                <div className="w-full space-y-3">
                  <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-seafoam-accent w-[82%]" />
                  </div>
                  <div className="flex justify-between text-label-sm font-label-sm">
                    <span>Revenue Growth</span>
                    <span>82%</span>
                  </div>
                </div>
              </div>

              {/* Bento Item 3: Branding */}
              <div className="glass-card rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <div className="text-secondary mb-4">
                    <span className="material-symbols-outlined text-[28px]">
                      palette
                    </span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-primary mb-2">
                    Branding Solutions
                  </h3>
                  <p className="text-on-surface-variant text-label-md font-label-md">
                    Consistent visual identities that build trust and patient
                    loyalty.
                  </p>
                </div>
              </div>

              {/* Bento Item 4: Success Case */}
              <div className="glass-card rounded-xl p-8 flex items-center justify-between bg-gradient-to-r from-secondary-container/30 to-transparent">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">
                      psychology
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-primary">
                      MindSet Clinic
                    </div>
                    <div className="text-label-sm font-label-sm text-outline">
                      Partner since 2024
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-headline-md font-headline-md text-secondary">
                    +150%
                  </div>
                  <div className="text-label-sm font-label-sm text-outline">
                    Engagement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section (Coastal Style) */}
        <section className="py-20 bg-surface-container">
          <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
              <div>
                <div className="text-display-lg font-display-lg text-primary mb-1">
                  500+
                </div>
                <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">
                  Clinics Onboarded
                </div>
              </div>
              <div>
                <div className="text-display-lg font-display-lg text-secondary mb-1">
                  45%
                </div>
                <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">
                  Avg. ROI Boost
                </div>
              </div>
              <div>
                <div className="text-display-lg font-display-lg text-deep-ocean mb-1">
                  12k+
                </div>
                <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">
                  Patients Reached
                </div>
              </div>
              <div>
                <div className="text-display-lg font-display-lg text-tertiary mb-1">
                  24/7
                </div>
                <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">
                  Expert Support
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24">
          <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    className="object-cover"
                    alt="A high-end, bright clinic interior with large windows overlooking a serene coastal horizon. The furniture is minimalist and warm, featuring soft natural wood and seafoam blue textiles. A digital display on the wall shows clean medical analytics. Professional, calm, and expensive wellness atmosphere."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxmfkKYkZfTI1ZCQJjjD7vg7UdOxQpNrZBLzyFM5jtJh3ajLakfwRh-9DkLKbEU-A9qLq68pnj4Ahf5vxualuRRwdeXRf6HR6bX1UuRS3LVSCvl3-b9i5GR9VSvAFVXr9MtugFW-XbVMY3hznsTHLClgG4LPKfE58j-KeDXwf_BbGXULg8OYmQpu7xZpTHL6R5aj0GH51lXqPJGF7ZpryHHyzdT1J5aWC4ewZEOxHa3uzxCxiXUBLybxjaEXVfeQOCdv57WYeLViI"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-headline-lg font-headline-lg text-primary mb-8">
                  A simple three-step process to start your clinic&apos;s
                  wellness journey
                </h2>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary-fixed-dim flex items-center justify-center font-bold text-primary">
                      01
                    </div>
                    <div>
                      <h4 className="text-headline-md font-headline-md text-on-surface mb-2">
                        Connect &amp; Audit
                      </h4>
                      <p className="text-on-surface-variant font-body-md">
                        We begin with a deep dive into your clinic&apos;s
                        current digital footprint and business performance
                        metrics.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary-fixed-dim flex items-center justify-center font-bold text-primary">
                      02
                    </div>
                    <div>
                      <h4 className="text-headline-md font-headline-md text-on-surface mb-2">
                        Strategy Deployment
                      </h4>
                      <p className="text-on-surface-variant font-body-md">
                        Launch personalized branding and marketing campaigns
                        designed to resonate with your target patient
                        demographic.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary-fixed-dim flex items-center justify-center font-bold text-primary">
                      03
                    </div>
                    <div>
                      <h4 className="text-headline-md font-headline-md text-on-surface mb-2">
                        Analytics &amp; Growth
                      </h4>
                      <p className="text-on-surface-variant font-body-md">
                        Access your real-time clinic portal to track
                        improvement and refine strategies for sustainable
                        growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary-container overflow-hidden relative">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary rounded-full opacity-10" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-deep-ocean rounded-full opacity-20" />
          <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="text-center">
              <h2 className="text-display-lg font-display-lg text-on-primary-container mb-6">
                Ready to redefine your clinic&apos;s future?
              </h2>
              <p className="text-body-lg font-body-lg text-on-primary-container/80 mb-10 max-w-xl mx-auto">
                Join the leading network of coastal-inspired clinics
                prioritizing mental wellness excellence.
              </p>
              <button className="bg-white text-primary px-10 py-5 rounded-lg font-headline-md text-label-md hover:bg-secondary-container transition-all shadow-lg active:scale-95">
                Book a Live Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-container-max-width mx-auto">
          <div className="space-y-4">
            <div className="text-headline-md font-headline-md font-bold text-deep-ocean">
              Puthal
            </div>
            <p className="text-on-surface-variant text-body-md">
              Coastal Wellness for All.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary">
                public
              </span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary">
                share
              </span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary">
                mail
              </span>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-on-surface mb-4">
              Patient Services
            </h5>
            <ul className="space-y-2 text-label-sm font-label-sm text-on-surface-variant">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Wellness Hub
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                AI Assistant
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Nature Tunes
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Guided Meditation
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-on-surface mb-4">
              Clinic Portals
            </h5>
            <ul className="space-y-2 text-label-sm font-label-sm text-on-surface-variant">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Marketing Dashboard
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Analytics Engine
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Brand Assets
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Specialist Support
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-on-surface mb-4">Resources</h5>
            <ul className="space-y-2 text-label-sm font-label-sm text-on-surface-variant">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Careers
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop border-t border-outline-variant/20 pt-8 text-center text-label-sm font-label-sm text-on-surface-variant">
          © 2024 Puthal. Coastal Wellness for All.
        </div>
      </footer>

      {/* FAB for Booking (Contextual) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="relative bg-primary text-on-primary w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all group">
          <span className="material-symbols-outlined text-[28px]">
            event
          </span>
          <span className="absolute right-full mr-4 bg-primary text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-label-md font-label-md shadow-md">
            Book Demo Now
          </span>
        </button>
      </div>
    </>
  );
}
