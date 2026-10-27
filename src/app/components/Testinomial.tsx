"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  variant: "light" | "dark";
  avatarClass: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Puthal has become a small but important part of my daily routine. The calming sessions help me slow down, clear my thoughts, and feel more relaxed after a busy day.",
    name: "Ananya Sharma",
    role: "Marketing Professional",
    variant: "light",
    avatarClass: "bg-cyan-200",
  },
  {
    quote:
      "I really appreciate how simple and calming the experience feels. The breathing and mindfulness tools make it easy to take a few minutes for yourself, even on the busiest days.",
    name: "Dr. Rohan Mehta",
    role: "Wellness Consultant",
    variant: "dark",
    avatarClass: "bg-white/20",
  },
  {
    quote:
      "The nature sounds and guided experiences have made a noticeable difference in my evening routine. They help me disconnect from work, relax my mind, and get ready for a better night's sleep.",
    name: "Arjun Kapoor",
    role: "Software Engineer",
    variant: "light",
    avatarClass: "bg-slate-300",
  },
];

function Stars({ light = false }: { light?: boolean }) {
  return (
    <div className="mb-5 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={17}
          className={
            light
              ? "fill-white text-white"
              : "fill-amber-300 text-amber-300"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <h2 className="font-[Manrope] text-3xl font-bold tracking-tight text-[#023E8A] sm:text-4xl lg:text-5xl">
          Coastal Voices
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          Hear how Puthal is helping people find calm, clarity and balance
          in their everyday lives.
        </p>
      </div>

      {/* Testimonial Cards */}
     <div className="mx-auto grid max-w-8xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
  {TESTIMONIALS.map((t, index) => {
    const isDark = t.variant === "dark";

    return (
      <motion.div
        key={t.name}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: "easeOut",
        }}
        className={`group flex h-full min-h-[300px] flex-col rounded-3xl border p-6 transition-shadow duration-300 sm:min-h-[220px] sm:p-7 lg:p-8 ${
          isDark
            ? "border-[#0077B6] bg-[#0077B6] text-white shadow-lg shadow-[#0077B6]/15 hover:shadow-xl hover:shadow-[#0077B6]/25"
            : "border-gray-100 bg-white text-gray-900 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)]"
        }`}
      >
        {/* Stars */}
        <div className="mb-5">
          <Stars light={isDark} />
        </div>

        {/* Quote */}
        <p
          className={`flex-1 text-xl leading-7 sm:text-base sm:leading-8 ${
            isDark ? "text-white/90" : "text-gray-600"
          }`}
        >
          {t.quote}
        </p>

       
      </motion.div>
    );
  })}
</div>
    </section>
  );
}