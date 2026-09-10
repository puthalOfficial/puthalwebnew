const CLINIC_BENEFITS = [
  {
    number: "01",
    title: "Reach More Patients",
    description:
      "Expand your clinic's reach and connect with patients beyond traditional appointments.",
    icon: "↗",
    accent: "sea",
  },
  {
    number: "02",
    title: "Save Valuable Time",
    description:
      "Reduce repetitive administrative work so your team can spend more time caring for patients.",
    icon: "◷",
    accent: "ocean",
  },
  {
    number: "03",
    title: "Engage Patients Better",
    description:
      "Keep patients connected between visits with personalized digital wellness experiences.",
    icon: "♡",
    accent: "teal",
  },
  {
    number: "04",
    title: "Grow Your Practice",
    description:
      "Strengthen patient relationships, improve retention, and create sustainable growth.",
    icon: "↗",
    accent: "sand",
  },
] as const;

const ACCENTS = {
  sea: {
    icon: "bg-[#E2F3F1] text-[#167C78] group-hover:bg-[#167C78]",
    glow: "bg-[#8DD8D0]/30",
    line: "bg-[#167C78]",
  },
  ocean: {
    icon: "bg-[#E5F0F8] text-[#24739A] group-hover:bg-[#24739A]",
    glow: "bg-[#9CCBE3]/30",
    line: "bg-[#24739A]",
  },
  teal: {
    icon: "bg-[#E0F2F0] text-[#116B72] group-hover:bg-[#116B72]",
    glow: "bg-[#82CEC8]/30",
    line: "bg-[#116B72]",
  },
  sand: {
    icon: "bg-[#F4EFE4] text-[#8A7755] group-hover:bg-[#8A7755]",
    glow: "bg-[#DCCDAE]/30",
    line: "bg-[#8A7755]",
  },
};

export default function ClinicBenefits() {
  return (
    <section className="relative overflow-hidden bg-[#F3F9FC] py-24 px-margin-mobile md:px-margin-desktop">
      {/* Coastal blue background */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#9CCFE3]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#B8DDF0]/40 blur-3xl" />

      <div className="relative mx-auto max-w-container-max-width">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A8D1E4] bg-[#E6F3F9] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#3186A8]" />

            <span className="text-label-sm uppercase tracking-[0.18em] text-[#286B89]">
              Built for Modern Clinics
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-headline-lg text-headline-lg leading-[1.1] text-[#123B4A]">
            Better care for patients.
            <br />

            <span className="text-[#247DA3]">
              Better growth for your clinic.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-body-lg leading-7 text-[#607D8A]">
            Give your team simple digital wellness tools that make patient
            engagement easier, operations smoother, and growth more sustainable.
          </p>
        </div>


        {/* Benefit Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CLINIC_BENEFITS.map((benefit) => {
            const styles = ACCENTS[benefit.accent];

            return (
              <div
                key={benefit.number}
                className="group relative overflow-hidden rounded-[30px]
                  border border-[#D8E8E6] bg-white p-7
                  shadow-[0_8px_30px_rgba(18,59,74,0.05)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#A9D3CF]
                  hover:shadow-[0_24px_55px_rgba(18,59,74,0.10)]"
              >
                {/* Soft coastal glow */}
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full
                    blur-3xl opacity-0 transition-opacity duration-500
                    group-hover:opacity-100 ${styles.glow}`}
                />

                {/* Number */}
                <div className="absolute right-7 top-7 text-xs font-semibold tracking-[0.2em] text-[#B4C9CD]">
                  {benefit.number}
                </div>

                {/* Icon */}
                <div
                  className={`relative flex h-14 w-14 items-center justify-center
                    rounded-2xl text-xl transition-all duration-500
                    group-hover:scale-105 group-hover:text-white
                    ${styles.icon}`}
                >
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="font-headline-md text-headline-md leading-tight text-[#123B4A]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-body-md leading-6 text-[#668087]">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom coastal accent */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-[3px]
                    origin-left scale-x-0 rounded-full
                    transition-transform duration-500
                    group-hover:scale-x-100 ${styles.line}`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex items-center justify-center gap-4 text-sm text-[#769096]">
          <span className="h-px w-12 bg-[#D3E3E1]" />

          <span>
            Better tools. Better experiences. Better outcomes.
          </span>

          <span className="h-px w-12 bg-[#D3E3E1]" />
        </div>
      </div>
    </section>
  );
}
