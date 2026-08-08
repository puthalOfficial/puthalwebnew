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
    <div className="mb-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined ${
            light ? "text-white" : "text-lime-400"
          }`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-24 md:px-12">
      <h2 className="mb-16 text-center text-4xl font-bold text-[#023E8A]">
        Coastal Voices
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) =>
          t.variant === "dark" ? (
            <div
              key={t.name}
              className="rounded-3xl bg-[#0077B6] p-8 text-white shadow-2xl shadow-[#0077B6]/20"
            >
              <Stars light />

              <p className="mb-6 italic leading-8 text-white/90">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${t.avatarClass}`} />

                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-white/70">{t.role}</p>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={t.name}
              className="rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Stars />

              <p className="mb-6 italic leading-8 text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${t.avatarClass}`} />

                <div>
                  <p className="font-semibold text-gray-900">
                    {t.name}
                  </p>

                  <p className="text-sm text-gray-500">
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