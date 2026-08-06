import {
  CalendarDays,
  ClipboardCheck,
  Stethoscope,
  FileText,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    title: "Patient Books",
    icon: CalendarDays,
    desc: "Patients book appointments online anytime with instant confirmation.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Clinic Confirms",
    icon: ClipboardCheck,
    desc: "The clinic verifies the appointment and schedules the visit.",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Doctor Consultation",
    icon: Stethoscope,
    desc: "Doctors access patient history and provide efficient treatment.",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Digital Records",
    icon: FileText,
    desc: "Medical records are stored securely and remain easily accessible.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Reports & Analytics",
    icon: BarChart3,
    desc: "Generate insights on appointments, revenue, and clinic performance.",
    color: "from-pink-500 to-rose-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-200/20 blur-[120px]" />

      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            HOW IT WORKS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-slate-900">
            A Simple Workflow for
            <span className="text-cyan-600"> Modern Clinics</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Manage every patient journey with a smooth digital workflow—from
            appointment booking to reports and analytics.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mt-24">

          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group relative text-center"
                >

                  {/* Icon */}
                  <div
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-white shadow-xl transition duration-500 group-hover:scale-110`}
                  >
                    <Icon size={34} />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">

                    <h3 className="text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-slate-500 leading-7">
                      {step.desc}
                    </p>

                    {index !== steps.length - 1 && (
                      <div className="mt-6 flex justify-center text-cyan-600 lg:hidden">
                        <ArrowRight className="rotate-90" />
                      </div>
                    )}

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