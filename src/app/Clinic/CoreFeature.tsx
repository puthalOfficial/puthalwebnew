import {
  Calendar,
  HeartPulse,
  IndianRupee,
  Settings,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";

const features = [
  {
    title: "Appointment Management",
    icon: Calendar,
    color: "bg-[#0077b6]",
    description:
      "Online booking with reminders, scheduling, cancellations and queue management.",
    items: [
      "Online Booking",
      "Calendar Sync",
      "Auto Reminder",
      "Queue Management",
    ],
  },
  {
    title: "Patient Retention",
    icon: HeartPulse,
    color: "bg-[#0077b6]",
    description:
      "Improve patient loyalty through follow-ups and personalized engagement.",
    items: [
      "Follow-up Reminder",
      "Patient History",
      "Feedback Collection",
      "Loyalty Program",
    ],
  },
  {
    title: "Revenue Growth",
    icon: IndianRupee,
    color: "bg-[#0077b6]",
    description:
      "Increase clinic revenue with smart billing and financial insights.",
    items: [
      "Smart Billing",
      "Payment Tracking",
      "Revenue Reports",
      "Business Insights",
    ],
  },
  {
    title: "Clinic Automation",
    icon: Settings,
    color: "bg-[#0077b6]",
    description:
      "Automate repetitive tasks and streamline clinic operations.",
    items: [
      "Digital Forms",
      "Staff Management",
      "Auto Notifications",
      "Workflow Automation",
    ],
  },
  
];

export default function CoreFeatures() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            CORE FEATURES
          </span>

          <h2 className="mt-8 text-5xl font-bold">
            Everything Your Clinic Needs
            <span className="text-cyan-600"> to Grow</span>
          </h2>

          <p className="mt-6 text-lg text-slate-500">
            Powerful tools designed to simplify operations, improve patient
            care, and accelerate clinic growth.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />

                <div className="relative z-10">

                  <div
                    className={`flex justify-start w-full gap-10 items-center justify-center rounded-2xl  text-white`}
                  >
                    <Icon size={50} className="bg-[#0077b6] px-2 rounded-2xl" />
                    <span className="text-3xl font-bold text-slate-900">
                      {feature.title}
                    </span>
                  </div>

                  

                  <p className="mt-4 text-slate-500 leading-7">
                    {feature.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">

                    {feature.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                          <Check
                            size={15}
                            className="text-green-600"
                          />
                        </div>

                        <span className="text-slate-700">
                          {item}
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