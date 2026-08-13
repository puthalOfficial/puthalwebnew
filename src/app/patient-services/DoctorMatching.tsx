"use client"
import {Notebook, UserCheckIcon, UserIcon} from 'lucide-react'

export default function DoctorMatching() {
   const handleScroll = () => {
    document.getElementById("page")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-sky-950">
              Smart Doctor Matching
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Get matched with the most suitable mental health professional
              through a personalized questionnaire and activity analysis.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Notebook className="h-6 w-6" />,
                title: "Quick Assessment",
                description:
                  "Answer questions about stress, anxiety, sleep, mood, and daily habits.",
              },
              {
                icon: <UserCheckIcon className="h-6 w-6" />,
                title: "Activity Analysis",
                description:
                  "We analyze your breathing, focus, and cognitive activity patterns.",
              },
              {
                icon: <UserIcon className="h-6 w-6" />,
                title: "Doctor Match",
                description:
                  "Get connected with a psychologist, psychiatrist, therapist, or counselor.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-sky-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-sky-900">
                Your Compatibility Score
              </h3>
              <span className="text-xl font-bold text-sky-700">92%</span>
            </div>

            <div className="h-3 w-full rounded-full bg-slate-200">
              <div className="h-3 w-[92%] rounded-full bg-sky-700" />
            </div>

            <p className="mt-3 text-slate-600">
              Based on your questionnaire responses, stress level, and activity
              patterns, we recommend a stress & anxiety specialist.
            </p>

            <button onClick={handleScroll} className="mt-6 rounded-xl bg-sky-700 px-8 py-3 font-semibold text-white transition hover:bg-sky-800">
              Find My Doctor
            </button>
          </div>
        </div>
      </section>
  )
}
