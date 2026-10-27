"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand Your Mind",
    description:
      "Discover your emotions, understand your stress patterns, and gain clarity about your mental well-being.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Build Healthy Habits",
    description:
      "Practice mindful breathing, explore calming activities, and build small habits for a balanced life.",
    icon: Heart,
  },
  {
    number: "03",
    title: "Grow Every Day",
    description:
      "Track your progress, celebrate small improvements, and take positive steps toward a healthier you.",
    icon: Sparkles,
  },
];

export default function RepresentFeature() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
  });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-white/10 px-5 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-black">
            Your Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            A Better You, <span className="text-black">Step by Step</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-600">
            Small steps can create meaningful changes in your mental
            well-being.
          </p>
        </motion.div>

        <div className="relative">
          {/* Background line */}
          <div className="absolute bottom-16 left-6 top-16 w-1 -translate-x-1/2 rounded-full bg-sky-100 md:left-1/2" />

          {/* Animated scroll line */}
          <motion.div
            style={{ scaleY: lineProgress }}
            className="absolute bottom-16 left-6 top-16 w-1 origin-top -translate-x-1/2 rounded-full bg-sky-600 md:left-1/2"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  className={`relative flex items-center pl-14 md:pl-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline circle */}
                  <div className="absolute left-6 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-white text-black text-sm font-bold  shadow-lg shadow-purple-200 md:left-1/2">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-[44%]">
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-3xl border border-purple-100 bg-white p-6 shadow-[0_10px_40px_rgba(91,33,182,0.06)] md:p-8"
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-black">
                        <Icon size={28} />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty opposite side */}
                  <div className="hidden md:block md:w-[44%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}