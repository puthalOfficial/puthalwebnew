import Image from "next/image";

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
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="grid grid-cols-1 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-headline-md font-headline-md text-deep-ocean mb-2">
                      {step.title}
                    </h4>
                    <p className="text-body-md text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-headline-lg font-headline-lg text-deep-ocean mb-8">
              How Our Journey Works
            </h2>
            <div className="rounded-3xl overflow-hidden aspect-video relative group">
              <Image
                className="w-full h-full object-cover"
                alt="A modern, high-end wellness clinic interior with large windows overlooking a calm sea. The design is minimalist, featuring soft curved wooden furniture, lush indoor plants, and a palette of warm whites and seafoam blues. The lighting is natural and soft, creating an atmosphere of safety and professional care."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCieggxm2-5TyGDTwCLPH2Ul9uO26FS5cGGpav0UPm26Vpna6UUMdbYICsEDOeKlcxjRU1eGnOELT0UIkmcwlJtcxtaB3bpPs7Bt3gXNSfzWS67oMLn809VrRdhGiOgnBI1a2oU1HcC_DG2OTttTIeDHWsKzUCwL4UESFwTP1-NYJt-aGmmCI41uraMKaXxE0DLdShBoO_rVPVJ8PONuQ7bbv4iQ3xwDlZ9O1sADBdCs0sjzEAziNfgUWH4yIPICPk8YCv4VJ0DAek"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
