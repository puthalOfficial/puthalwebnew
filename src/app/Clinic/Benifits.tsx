import {
  Stethoscope,
  HeartHandshake,
  Building2,
  Check,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    title: "Doctors",
    icon: Stethoscope,
    color: "from-sky-500 to-blue-600",
    items: [
      "More Time with Patients",
      "Less Paperwork",
      "Better Workflow",
    ],
    description:
      "Focus on patient care while automation handles repetitive tasks.",
  },
  {
    title: "Patients",
    icon: HeartHandshake,
    color: "from-pink-500 to-rose-500",
    items: [
      "Easy Online Booking",
      "Digital Reports",
      "Fast Service",
    ],
    description:
      "A smoother healthcare experience from appointment to follow-up.",
  },
  {
    title: "Clinic Owners",
    icon: Building2,
    color: "from-emerald-500 to-green-600",
    items: [
      "Revenue Growth",
      "Business Analytics",
      "Clinic Automation",
    ],
    description:
      "Make smarter business decisions with real-time insights.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            WHO BENEFITS?
          </span>

          <h2 className="mt-8 text-5xl font-bold text-slate-900">
            Built for Everyone in Your
            <span className="text-cyan-600"> Healthcare Ecosystem</span>
          </h2>

          <p className="mt-6 text-lg text-slate-500 leading-8">
            Our platform is designed to create value for doctors, patients,
            and clinic owners through one connected experience.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 "
              >

                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition duration-500 `}
                />

                <div className="relative z-10">

                  {/* Icon */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl  text-white `}
                  >
                    <Icon size={50} className="bg-[#0077b6] px-3 rounded-2xl " />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-500 leading-7">
                    {item.description}
                  </p>

                  <div className="mt-8 space-y-4">

                    {item.items.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                          <Check
                            size={15}
                            className="text-green-600"
                          />
                        </div>

                        <span className="font-medium text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}