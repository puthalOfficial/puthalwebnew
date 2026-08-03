export default function SupportCTA() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-4xl mx-auto glass-panel rounded-[2rem] p-12 text-center border-2 border-dashed border-primary/30">
        <h2 className="text-headline-lg font-headline-lg text-deep-ocean mb-6">
          Need Immediate Guidance?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant mb-10">
          Our network of 50+ mental health specialists is here to support you
          when things feel overwhelming. Professional care is just a click
          away.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            href="#"
          >
            <span className="material-symbols-outlined">call</span>
            Talk to an Expert
          </a>
          <a
            className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            href="#"
          >
            <span className="material-symbols-outlined">mail</span>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
