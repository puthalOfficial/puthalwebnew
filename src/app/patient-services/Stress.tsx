"use client"
import {BrainIcon, Gamepad2Icon} from 'lucide-react'


const gameCards = [
  {
    icon: <BrainIcon className="h-6 w-6" />,
    title: "IQ Puzzle Challenge",
    description:
      "Solve logic, memory, and pattern puzzles that strengthen concentration and problem-solving skills.",
    duration: "10 min",
    reward: "+50 Wellness Points",
  },
  {
    icon: <Gamepad2Icon className="h-6 w-6" />,
    title: "Stress Relief Game",
    description:
      "Bubble breathing, calming taps, and gentle reaction games to lower stress in just a few minutes.",
    duration: "5 min",
    reward: "Instant Calm Mode",
  },
];

 const handleScroll = () => {
    document.getElementById("page")?.scrollIntoView({
      behavior: "smooth",
    });
  };
export default function Stress() {
  return (
    <div>
         <section className="py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-sky-950">
              Stress & IQ Games
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Interactive games designed to reduce stress, improve focus,
              memory, and cognitive performance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {gameCards.map((game) => (
              <div
                key={game.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:bg-sky-100 "
              >
                <div className="text-4xl">{game.icon}</div>
                <h3 className="mt-4 text-2xl font-bold text-sky-900">
                  {game.title}
                </h3>
                <p className="mt-3 text-slate-600">{game.description}</p>

                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <span>{game.duration}</span>
                  <span>{game.reward}</span>
                </div>

                <button onClick={handleScroll} className="mt-6 rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800">
                  Play Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-sky-900">
                Today's Progress
              </h3>
              <span className="text-sm text-slate-500">
                2 games completed
              </span>
            </div>

            <div className="h-3 w-full rounded-full bg-slate-200">
              <div className="h-3 w-[65%] rounded-full bg-sky-700" />
            </div>

            <p className="mt-3 text-slate-600">
              Build a 7-day wellness streak to unlock advanced brain-training
              levels.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  )
}
