const steps = [
  {
    number: "01",
    title: "Register & Chat",
    description:
      "Log in and provide accurate responses to our chatbot for a personalized wellness plan.",
  },
  {
    number: "02",
    title: "Engage with Tools",
    description:
      "Access breathing, journaling, and tunes. Earn points as you complete daily exercises.",
  },
  {
    number: "03",
    title: "Professional Support",
    description:
      "If stress levels remain high, we'll connect you directly with clinical experts near you.",
  },
];

export default function RecoveryJourney() {
  return (
    <section className="bg-[#f2f4f6] py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-12">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          {/* Steps */}
          <div className="order-2 flex-1 md:order-1">
            <div className="grid gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#005d90] font-bold text-white">
                    {step.number}
                  </div>

                  <div>
                    <h4 className="mb-2 font-[Manrope] text-[24px] font-semibold leading-[32px] text-[#023E8A]">
                      {step.title}
                    </h4>

                    <p className="font-[Inter] text-[16px] leading-[24px] text-[#404850]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex-1 md:order-2">
            <h2 className="mb-8 font-[Manrope] text-[32px] font-semibold leading-[40px] text-[#023E8A]">
              How Our Journey Works
            </h2>

            <div className="group relative aspect-video overflow-hidden rounded-3xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCieggxm2-5TyGDTwCLPH2Ul9uO26FS5cGGpav0UPm26Vpna6UUMdbYICsEDOeKlcxjRU1eGnOELT0UIkmcwlJtcxtaB3bpPs7Bt3gXNSfzWS67oMLn809VrRdhGiOgnBI1a2oU1HcC_DG2OTttTIeDHWsKzUCwL4UESFwTP1-NYJt-aGmmCI41uraMKaXxE0DLdShBoO_rVPVJ8PONuQ7bbv4iQ3xwDlZ9O1sADBdCs0sjzEAziNfgUWH4yIPICPk8YCv4VJ0DAek"
                alt="Wellness Clinic"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#005d90]/20 transition-colors duration-500 group-hover:bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}