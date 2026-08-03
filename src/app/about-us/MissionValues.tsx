import Image from "next/image";

export default function MissionValues() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
            Rooted in Wellness, Driven by Innovation
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">
            We combine traditional therapeutic wisdom with cutting-edge
            technology to create a comprehensive sanctuary for your mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Value 1 */}
          <div className="md:col-span-8 group relative rounded-3xl overflow-hidden bg-primary p-12 text-on-primary shadow-lg hover:shadow-xl transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl transition-all group-hover:scale-110" />
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-4xl mb-6"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                spa
              </span>
              <h3 className="text-headline-lg font-headline-lg mb-4">
                Human-Centric Design
              </h3>
              <p className="text-body-lg font-body-lg opacity-90 max-w-lg">
                Our interface is more than just buttons and screens; it&apos;s
                a digital breath of fresh air. We prioritize calmness,
                reducing cognitive load to let you focus on what matters:
                your recovery.
              </p>
            </div>
            <div className="mt-8 flex gap-4 relative z-10">
              <div className="px-4 py-2 bg-white/20 rounded-full text-label-sm font-label-sm backdrop-blur-md">
                Empathy First
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full text-label-sm font-label-sm backdrop-blur-md">
                Accessible Support
              </div>
            </div>
          </div>

          {/* Value 2 */}
          <div className="md:col-span-4 rounded-3xl bg-secondary-container p-8 border border-outline-variant/20 hover:-translate-y-1 transition-transform">
            <span className="material-symbols-outlined text-on-secondary-container text-4xl mb-6">
              science
            </span>
            <h3 className="text-headline-md font-headline-md text-on-secondary-container mb-3">
              Evidence-Based
            </h3>
            <p className="text-on-secondary-container/80 text-body-md">
              Every tool in Puthal is grounded in psychological research and
              clinical best practices.
            </p>
          </div>

          {/* Value 3 */}
          <div className="md:col-span-4 rounded-3xl bg-surface-container-high p-8 border border-outline-variant/20 hover:-translate-y-1 transition-transform">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              security
            </span>
            <h3 className="text-headline-md font-headline-md text-on-surface mb-3">
              Absolute Privacy
            </h3>
            <p className="text-on-surface-variant text-body-md">
              Your emotional journey is sacred. We use industry-leading
              encryption to keep your data exclusively yours.
            </p>
          </div>

          {/* Value 4 */}
          <div className="md:col-span-8 glass-card border border-outline-variant/10 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
            <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-inner relative">
              <img
                className="object-cover"
                alt="A macro close-up of soft seafoam green water ripples, capturing the play of light and shadow in a minimalist, calming composition."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2WthIok3b3qtaN8Lb_TqPx9ZqEKrPmtaX3yZifgJt69BeFuUi-hOt3zFqnV-LtNAycxAPFX-KuQJjpg8_kLhbTt9tNPaV4_x3ooQ8B5Z39nHdoywLoh6Uq8mvuJ_NgtqrrxzygBoKNOJijFzLc49_lWFxsVKDBiF0NQG5HMui4FHHzhLArLZmLmp10frDtpFSmOG-YoQyR6VDQ9adIdESwIvLxihX6LkFH4ONcw66iaRQbMUhZ5I7XVhdS3tNNWQj7_U3rVG8Rjk"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3">
                Holistic Ecosystem
              </h3>
              <p className="text-on-surface-variant text-body-md mb-4">
                From guided breathing and nature tunes to professional
                medical recovery, Puthal covers the full spectrum of mental
                wellness.
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                href="#"
              >
                Explore Our Services
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
