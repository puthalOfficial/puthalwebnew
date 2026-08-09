
import { Star } from "lucide-react";

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
      "Puthal has become my daily sanctuary. The ocean-inspired meditations help me disconnect from city noise and find my center.",
    name: "Sarah Jenkins",
    role: "Marketing Executive",
    variant: "light",
    avatarClass: "bg-cyan-200",
  },
  {
    quote:
      "As a therapist, I recommend the Puthal breathing tools to all my clients. The visual interface is remarkably calming.",
    name: "Dr. Aris Mehta",
    role: "Clinical Psychologist",
    variant: "dark",
    avatarClass: "bg-white/20",
  },
  {
    quote:
      "The Nature Tunes are incredibly high-quality. It feels like I'm actually on a retreat whenever I put my headphones on.",
    name: "Liam Cross",
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
              : "fill-lime-400 text-lime-400"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      
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

      {/* Testimonials */}
      <div className="mx-auto grid max-w-8xl px-5 grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {TESTIMONIALS.map((t) =>
          t.variant === "dark" ? (
            /* Dark Card */
            <div
              key={t.name}
              className="flex h-full min-h-[300px] flex-col rounded-3xl bg-[#0077B6] p-5 text-white shadow-2xl shadow-[#0077B6]/20 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[320px] sm:p-7 lg:p-8"
            >
              {/* Stars */}
              <Stars light />

              {/* Quote */}
              <p className="mb-6 flex-1 text-[15px] italic leading-7 text-white/90 sm:text-base sm:leading-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* User */}
              <div className="flex min-h-[56px] items-center gap-3 sm:gap-4">
                {/* Avatar */}
                <div
                  className={`h-10 w-10 shrink-0 rounded-full sm:h-12 sm:w-12 ${t.avatarClass}`}
                />

                {/* Name / Role */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold sm:text-base">
                    {t.name}
                  </p>

                  <p className="truncate text-xs text-white/70 sm:text-sm">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Light Card */
            <div
              key={t.name}
              className="flex h-full min-h-[300px] flex-col rounded-3xl bg-white p-5 shadow-lg ring-1 ring-gray-100 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[320px] sm:p-7 lg:p-8"
            >
              {/* Stars */}
              <Stars />

              {/* Quote */}
              <p className="mb-6 flex-1 text-[15px] italic leading-7 text-gray-700 sm:text-base sm:leading-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* User */}
              <div className="flex min-h-[56px] items-center gap-3 sm:gap-4">
                {/* Avatar */}
                <div
                  className={`h-10 w-10 shrink-0 rounded-full sm:h-12 sm:w-12 ${t.avatarClass}`}
                />

                {/* Name / Role */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-gray-900 sm:text-base">
                    {t.name}
                  </p>

                  <p className="truncate text-xs text-gray-500 sm:text-sm">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
