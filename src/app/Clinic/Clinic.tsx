
"use client";

import ClinicModal from "./FormSubmit";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ClinicHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#F8FBFF] py-10 md:py-4">
      {/* 1. Badge: Scale + Fade */}
      <div className="mx-auto max-w-6xl px-6 text-center">
        

        {/* 2. First heading line: Slide from left */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Smart Clinic Management
        </motion.h1>

        {/* 3. Second heading line: Slide from right */}
        <motion.div
          initial={{ opacity: 0,y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-2"
        >
          <span className="bg-gradient-to-r from-[#005d90] via-cyan-600 to-[#005d90] bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Solutions
          </span>
        </motion.div>

        {/* 4. Description: Blur + Fade */}
        <motion.p
          initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg md:text-xl"
        >
          Transform your clinic with an all-in-one healthcare platform designed
          to automate operations, simplify appointment management, increase
          revenue, and deliver exceptional patient experiences.
        </motion.p>

        {/* 5. Button: Spring Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.9,
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            type="button"
            onClick={() => setIsModalOpen(true)}
            whileHover={{
              scale: 1.06,
              y: -4,
              boxShadow: "0px 12px 30px rgba(0, 93, 144, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-[#005d90] px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-[#004b75] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
          >
            Book Demo
          </motion.button>
        </motion.div>

        <ClinicModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
