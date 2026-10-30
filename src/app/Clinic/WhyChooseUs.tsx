"use client"
import {
  Activity,
  Bot,
  BarChart3,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import {motion} from "framer-motion"

const features = [
  {
    title: "Faster Care",
    icon: Activity,
    desc: "Reduce patient waiting time and improve appointment efficiency.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Automation",
    icon: Bot,
    desc: "Automate daily clinic operations with smart workflows.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    desc: "Track appointments, revenue and performance in real time.",
    color: "from-orange-500 to-pink-500",
  },
  {
    title: "Growth",
    icon: TrendingUp,
    desc: "Increase patient retention and grow your clinic faster.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-10">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-[150px]" />

      <div className="container mx-auto px-2">

        {/* Heading */}

        <div className="max-w-8xl mx-auto text-center">

          <h2 className="mt-8 text-4xl md:text-5xl font-bold text-slate-900">
            Better Care Through
            <span className="text-cyan-600"> Technology</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Empower your clinic with intelligent automation, actionable
            insights  </p>

        </div>

        {/* Cards */}

       <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
  {features.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          delay: index * 0.2,
          ease: "easeOut",
        }}
        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8"
      >
        {/* Gradient Border */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        <div className="absolute inset-[1px] rounded-3xl bg-white" />

        <div className="relative z-10">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg">
            <Icon size={50} className="rounded-2xl bg-[#0077b6] px-3" />
          </div>

          <h3 className="mt-8 text-2xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-500">
            {item.desc}
          </p>
        </div>
      </motion.div>
    );
  })}
</div>
      </div>

    </section>
  );
}