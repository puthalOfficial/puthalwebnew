import React from 'react'

export default function Journey() {
    const journey = [
  {
    step: "1️⃣",
    title: "Assessment",
    description: "Complete a short mental wellness questionnaire.",
  },
  {
    step: "2️⃣",
    title: "Play Games",
    description:
      "Reduce stress and improve focus through interactive games.",
  },
  {
    step: "3️⃣",
    title: "Relief Activities",
    description:
      "Use breathing, journaling, sounds, and AI support.",
  },
  {
    step: "4️⃣",
    title: "Doctor Match",
    description:
      "Connect with the right mental health professional if needed.",
  },
];

  return (
    <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-sky-950">
              Your Wellness Journey
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              A simple path from understanding your mental state to getting the
              right support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {journey.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="text-5xl">{item.step}</div>
                <h3 className="mt-4 text-xl font-bold text-sky-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}
