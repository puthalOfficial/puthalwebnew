import React from 'react'
import {BookOpenIcon, CloudIcon , Music2Icon , ChartBar} from 'lucide-react'

export default function Activities() {
    const activities = [
  {
    icon: <CloudIcon className="h-6 w-6" />,
    title: "5-Minute Breathing Reset",
    description:
      "Follow a calming breathing animation to relax your nervous system and reduce anxiety.",
    cta: "Start Breathing",
  },
  {
    icon: <BookOpenIcon className="h-6 w-6" />,
    title: "Gratitude Journal",
    description:
      "Write three positive moments from today to improve emotional balance and perspective.",
    cta: "Open Journal",
  },
  {
    icon: <Music2Icon className="h-6 w-6" />,
    title: "Calming Sounds",
    description:
      "Ocean waves, rain, forest ambience, and soft instrumental music for relaxation.",
    cta: "Listen Now",
  },
  {
    icon: <ChartBar className="h-6 w-6" />,
    title: "Talk with AI Companion",
    description:
      "Share how you're feeling and receive supportive prompts, grounding exercises, and coping suggestions.",
    cta: "Start Chat",
  },
];

  return (
     <section className="py-20">
        <div className="mx-auto max-w-8xl px-10 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-sky-950">
              Instant Relief Activities
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Simple guided activities that help reduce stress, improve mood,
              and bring calm within a few minutes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:bg-sky-100 "
              >
                <div className="text-4xl">{activity.icon}</div>
                <h3 className="mt-4 text-2xl font-bold text-sky-900">
                  {activity.title}
                </h3>
                <p className="mt-3 text-slate-600">
                  {activity.description}
                </p>
                <button className="mt-6 rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800">
                  {activity.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border-2 border-sky-200 bg-white p-10 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-3xl font-extrabold text-sky-900">
                  Emergency Calm Mode
                </h3>
                <p className="mt-3 max-w-2xl text-slate-600">
                  A guided grounding routine for moments of panic, overwhelm, or
                  intense stress. Breathing, grounding, reassurance, and
                  immediate support in under two minutes.
                </p>
              </div>

              <button className="rounded-2xl bg-sky-700 px-8 py-4 text-lg font-bold text-white transition hover:bg-sky-800">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}
