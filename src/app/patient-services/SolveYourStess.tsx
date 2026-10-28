
import {
  PhoneCall,
  MapPinned,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect With Us",
    description:
      "Tell us what you're going through. Our team will listen to your concerns and understand what kind of support you need.",
    icon: PhoneCall,
    color: "bg-teal-500",
  },
  {
    number: "02",
    title: "Find the Right Clinic",
    description:
      "We'll help you find a suitable mental wellness clinic and connect you with a qualified doctor or mental health professional.",
    icon: MapPinned,
    color: "bg-blue-500",
  },
  {
    number: "03",
    title: "Begin Your Healing Journey",
    description:
      "Meet your doctor, discuss your concerns, and get professional guidance tailored to your needs.",
    icon: HeartHandshake,
    color: "bg-violet-500",
  },
];

export default function SolveYourStress() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-10 lg:px-8 lg:py-4">
      <div className="mx-auto w-full max-w-8xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How We Help <span className="text-sky-600">You</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Getting support should feel simple. We guide you through every
            step, from your first conversation to connecting with the right
            professional.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Journey map */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl  sm:min-h-[500px] sm:p-8 lg:min-h-5xl">
              {/* Map grid */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(#94a3b8 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />

              <div className="relative z-10 flex min-h-[680px] flex-col justify-between sm:min-h-8xl">

                {/* Map route */}
              
<div className="relative mx-auto my-5 min-h-[560px] w-full max-w-[360px] flex-1 sm:min-h-[650px] lg:min-h-[500px]">
  <svg
    viewBox="0 0 270 600"
    className="absolute inset-0 h-full w-full"
    fill="none"
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <path
      d="M75 35 C75 100 255 80 255 180 S75 230 75 330 S245 390 245 480 S75 510 75 570"
      stroke="#0EA5E9"
      strokeWidth="12"
      strokeLinecap="round"
      strokeDasharray="2 18"
    />
    <path
      d="M75 35 C75 100 255 80 255 180 S75 230 75 330 S245 390 245 480 S75 510 75 570"
      stroke="#0D9488"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="5 8"
    />
  </svg>

  {/* Step 1 */}
  <div className="absolute left-[8%] top-[3%] flex items-center gap-2 sm:gap-3">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl  border-4 border-white bg-teal-500 text-white shadow-lg sm:h-14 sm:w-14">
      <PhoneCall size={21} />
    </div>
    <span className="rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-slate-800 shadow-sm sm:text-sm">
      Start here
    </span>
  </div>

  {/* Step 2 */}
  <div className="absolute right-[2%] top-[39%] flex items-center gap-2 sm:gap-3">
    <span className="rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-slate-800 shadow-sm sm:text-sm">
      Find support
    </span>
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-blue-500 text-white shadow-lg sm:h-14 sm:w-14">
      <MapPinned size={21} />
    </div>
  </div>

  {/* Step 3 */}
  <div className="absolute bottom-[3%] left-[8%] flex items-center gap-2 sm:gap-3">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-violet-500 text-white shadow-lg sm:h-14 sm:w-14">
      <HeartHandshake size={21} />
    </div>
    <span className="rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-slate-800 shadow-sm sm:text-sm">
      Feel supported
    </span>
  </div>
</div>

              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="min-w-0 space-y-5 sm:space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group flex min-w-0 rounded-2xl  p-4 transition-all duration-300 "
                >
                 
<div className="flex min-w-0 gap-3 sm:gap-5">
  {/* Icon + vertical line */}
  <div className="flex shrink-0 flex-col items-center">
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl text-black`}
    >
      <Icon size={20} className="sm:hidden" />
      <Icon size={23} className="hidden sm:block" />
    </div>
  </div>

  {/* Text content */}
  <div className="min-w-0 flex-1 pb-5 sm:pb-6">
    <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-xl">
      {step.title}
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
      {step.description}
    </p>
  </div>
</div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
