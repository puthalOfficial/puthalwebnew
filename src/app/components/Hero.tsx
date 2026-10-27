
"use client";

import { delay, motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PuthalHero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 26,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.7 : 1,
        ease,
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const imageReveal = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 40,
      scale: shouldReduceMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.9,
        delay: shouldReduceMotion ? 0 : 0.2,
        ease,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Ambient background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-6 sm:px-6 sm:py-6 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-14">

        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
        >

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="w-full text-4xl font-bold leading-[1.1] tracking-tight text-[#023E8A] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">Mann ki Uthal</span>

            <span className="mt-2 block text-[#005d90]">
              Solve on Puthal
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-7 text-[#404850] sm:text-lg sm:leading-8"
          >
            Your comprehensive sanctuary for mental wellness. Navigate
            your emotional journey with professional tools and guided support.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <motion.button
              type="button"   
              className="w-full rounded-xl bg-[#005d90] px-7 py-3.5 font-semibold text-white shadow-md shadow-[#005d90]/10 transition-colors hover:bg-[#004a73] sm:w-auto sm:px-8 sm:py-4"
            >
              Get Started Free
            </motion.button>

            <motion.a
              href="/about-us"
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 24 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-7 py-3.5 font-medium text-gray-700 transition-colors hover:border-[#005d90]/40 hover:bg-sky-50 sm:w-auto sm:px-8 sm:py-4"
            >
              Watch Our Story

              <motion.span
                aria-hidden="true"
                animate={
                  shouldReduceMotion ? undefined : { x: [0, 3, 0] }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none"
        >
          {/* Animated glow */}
          <motion.div
            aria-hidden="true"
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.1, 1],
                    opacity: [0.25, 0.45, 0.25],
                  }
            }
            viewport={{once:true}}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-5 rounded-[40px] bg-[#006875]/15 blur-3xl sm:-inset-8"
          />

          {/* Image frame */}
          <motion.div
            whileHover={
              shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }
            }
            transition={{ duration: 0.35, ease }}
            className="relative overflow-hidden rounded-[24px] border-4 border-white/80 bg-gray-100  shadow-slate-900/10 sm:rounded-[32px]"
          >
            <motion.img
              initial={
                shouldReduceMotion ? undefined : { scale: 1.08 }
              }
              animate={{ scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 1.4,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease,
              }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcwQseehbSoTaIwweXQ4q9RmlDpZKaE46UNxZZ09YxfMt-RdPO0iuCkXdQ60gmwNnsLcV6HhyXH5GY73pJvPiIvh2Xf1baDL5JsbGxwyhUSO4zjtqxOeU6LiiYL-jB-ZlmyqUm0rHcxNJaSkDAZwVhcEM9nzNuQMF-r3bFP5TKVPP6b90J3MNT4d4QHXnQ8TegAqXCL08rrxUmtLrlDileGcEyQ7vNW37IOvHUcHVacObvtBWVlRTkQzngUZtMtS5FmpPg0Wsvnsc"
              alt="Puthal Wellness"
              width={640}
              height={800}
              fetchPriority="high"
              className="block h-auto w-full object-cover"
            />
          </motion.div>

          {/* Floating information card */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 22,
              scale: shouldReduceMotion ? 1 : 0.94,
            }}
            animate={{
              opacity: 1,
              y: shouldReduceMotion ? 0 : [0, -7, 0],
              scale: 1,
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : 0.8,
              },
              scale: {
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : 0.8,
              },
              y: shouldReduceMotion
                ? { duration: 0.2 }
                : {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  },
            }}
            className="absolute -bottom-5 left-2 max-w-[calc(100%-1rem)] rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl sm:-bottom-7 sm:left-4 sm:p-5 lg:-bottom-8 lg:-left-8 lg:p-6"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Icon */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { rotate: [0, -5, 5, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex-shrink-0 rounded-xl bg-lime-100 p-2.5 sm:p-3"
              >
                <span className="material-symbols-outlined text-[#006875]">
                  waves
                </span>
              </motion.div>

              {/* Card content */}
              <div>
                <p className="text-xs font-semibold text-[#006875] sm:text-sm">
                  Real-time Zen
                </p>

                <p className="mt-0.5 text-sm font-bold text-gray-900 sm:text-base">
                  50+ Experts Active
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
