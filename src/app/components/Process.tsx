const STEPS = [
  {
    number: "01",
    title: "Download & Register",
    description:
      "Get our app and share your current mental state with our empathetic AI. We'll generate a personalized wellness checklist just for you.",
  },
  {
    number: "02",
    title: "Use Our Services",
    description:
      "Dive into our library of coastal meditations and exercises. Earn wellness points as you build consistent healthy habits.",
  },
  {
    number: "03",
    title: "Professional Help",
    description:
      "If stress levels peak, Puthal seamlessly connects you with the nearest clinical specialist for one-on-one professional support.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-8xl px-4 md:px-22">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#023E8A]">
            Start Your Wellness Journey
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            A simple three-step process to navigate away from stress towards
            tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-3xl bg-gray-50 p-8 "
            >
              <div className="absolute w-full flex justify-center  left-2 select-none text-[100px] font-extrabold text-gray-200">
                {step.number}
              </div>

              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-semibold text-[#005d90]">
                  {step.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}