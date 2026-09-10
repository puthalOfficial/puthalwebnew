
"use client";

import { motion } from "framer-motion";
import {TrendingUp , Clock , Heart} from "lucide-react";
const CLINIC_BENEFITS = [
  {
    title: "Reach more patients",
    description:
      "Help more people discover your clinic and stay connected with them beyond appointments.",
    icon: <TrendingUp />,
    color: "text-[#287F7A]",
    bg: "bg-[#E7F3F1]",
  },
  {
    title: "Save your team's time",
    description:
      "Reduce repetitive work and simplify everyday tasks so your team can focus more on patient care.",
    icon: <Clock />,
    color: "text-[#32789B]",
    bg: "bg-[#E9F2F7]",
  },
  {
    title: "Stay connected",
    description:
      "Support patients between visits and make their experience with your clinic feel more connected.",
    icon: <Heart />,
    color: "text-[#287477]",
    bg: "bg-[#E6F2F1]",
  },
  {
    title: "Grow with confidence",
    description:
      "Build stronger patient relationships and create a better foundation for long-term growth.",
    icon: <TrendingUp />,
    color: "text-[#8A795B]",
    bg: "bg-[#F3EFE7]",
  },
];

export default function ClinicBenefits() {
  return (
    <section className="bg-[#F6FAFB] px-margin-mobile py-20 md:px-20 md:py-24">
      <div className="mx-auto max-w-container-max-width">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#4D899B]">
            For clinics
          </p>

          <h2 className="font-headline-lg text-[32px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#183F4D] md:text-[42px]">
            Better care for patients.
            <span className="block text-[#28789D]">
              Better support for your clinic.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#667F87] md:text-base">
            Puthal brings patient engagement and everyday clinic support
            together in one simple digital experience.
          </p>
        </motion.div>


        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
         {CLINIC_BENEFITS.map((benefit) => (
  <motion.div
    key={benefit.title}
    variants={{
      hidden: {
        opacity: 0,
        y: 24,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.55,
          ease: "easeOut",
        },
      },
    }}
    className="
      flex min-h-[220px] flex-col
      rounded-2xl
      border border-[#DDE9EA]
      bg-white
      p-6
    "
  >
    {/* Icon */}
    <div
      className={`
        flex h-11 w-11 shrink-0
        items-center justify-center
        rounded-xl text-lg
        ${benefit.bg}
        ${benefit.color}
      `}
    >
      {benefit.icon}
    </div>

    {/* Content */}
    <div className="mt-8">
      <h3
        className="
          min-h-[22px]
          font-headline-md
          text-[20px]
          font-semibold
          leading-[1.3]
          tracking-[-0.01em]
          text-[#183F4D]
        "
      >
        {benefit.title}
      </h3>

      <p
        className="
          mt-3
          min-h-[72px]
          text-[14px]
          leading-[1.7]
          text-[#71858A]
        "
      >
        {benefit.description}
      </p>
    </div>
  </motion.div>
))}
        </motion.div>


        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-xl text-center text-sm leading-6 text-[#71858A]"
        >
          Simple tools that help your clinic spend less time managing work
          and more time focusing on people.
        </motion.p>

      </div>
    </section>
  );
}
