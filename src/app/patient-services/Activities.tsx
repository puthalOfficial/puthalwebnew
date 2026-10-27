"use client";

import React from "react";
import {
  BookOpenIcon,
  CloudIcon,
  Music2Icon,
  ChartBar,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  {
    icon: CloudIcon,
    title: "5-Minute Breathing Reset",
    description:
      "Follow a guided breathing animation to slow down, release tension, reduce everyday stress, and bring more calm and focus into your day.",
    cta: "Start Breathing",
  },
  {
    icon: BookOpenIcon,
    title: "Gratitude Journal",
    description:
      "Write down three positive moments from your day, appreciate small achievements, reflect on meaningful experiences, and develop a more positive perspective.",
    cta: "Open Journal",
  },
  {
    icon: Music2Icon,
    title: "Calming Sounds",
    description:
      "Explore soothing ocean waves, gentle rainfall, peaceful forest sounds, and relaxing instrumental music to unwind, improve your relaxation routine, and enjoy moments of peace.",
    cta: "Listen Now",
  },
  {
    icon: ChartBar,
    title: "Talk with AI Companion",
    description:
      "Share your thoughts and feelings to explore supportive prompts, grounding exercises, and practical coping strategies that encourage self-reflection and emotional well-being.",
    cta: "Start Chat",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Activities() {
  const handleScroll = () => {
    document.getElementById("page")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="inline-block rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
            YOUR DAILY WELLNESS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-sky-950 sm:text-4xl lg:text-5xl">
            Instant Relief Activities
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Simple guided activities that help reduce stress, improve mood,
            and bring calm within a few minutes.
          </p>
        </motion.div>

        {/* Activity Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5 sm:p-8"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition-colors duration-300 group-hover:bg-sky-700 group-hover:text-white"
                >
                  <Icon size={27} strokeWidth={1.8} />
                </motion.div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-sky-950 sm:text-2xl">
                  {activity.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                  {activity.description}
                </p>

                {/* CTA */}
                <button
                  onClick={handleScroll}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-sky-700 px-5 py-3 font-semibold text-white transition-colors duration-300 hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                >
                  {activity.cta}
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Emergency Calm Mode */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mt-10 overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-cyan-50 p-6 shadow-sm sm:mt-14 sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-sky-950 sm:text-3xl lg:text-4xl">
                Emergency Calm Mode
              </h3>

              <p className="mt-4 leading-7 text-slate-600 sm:text-base">
                A guided grounding routine for moments of panic, overwhelm, or
                intense stress. Breathing, grounding, reassurance, and
                immediate support in under two minutes.
              </p>
            </div>

            <motion.button
              onClick={handleScroll}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-sky-700 px-7 py-4 font-bold text-white shadow-lg shadow-sky-700/20 transition-colors hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 sm:px-8"
            >
              Start Now
              <ArrowRight size={19} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}