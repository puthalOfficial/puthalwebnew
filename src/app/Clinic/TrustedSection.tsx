import Image from "next/image";

const logos = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
];

export default function TrustedSection() {
  return (
    <section className="relative overflow-hidden py-4 bg-white">

      {/* Blur Background */}

      <div className="absolute left-0 top-10 w-72 h-72 bg-cyan-200/30 blur-[120px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-200/30 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="inline-flex rounded-full bg-cyan-50 px-5 py-2 text-cyan-600 font-semibold">
            Trusted Worldwide
          </p>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trusted by Modern
            <span className="text-cyan-600"> Healthcare Clinics</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-500">
            Helping healthcare professionals automate operations,
            improve patient care and grow faster with an intelligent
            clinic management platform.
          </p>

        </div>

        {/* Logo Cards */}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {logos.map((logo, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition duration-300 p-8 flex items-center justify-center hover:-translate-y-2"
            >
              <Image
                src={logo}
                width={140}
                height={50}
                alt="Clinic Logo"
                className="opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition"
              />
            </div>
          ))}

        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-3xl bg-slate-50 p-8 text-center">

            <h3 className="text-4xl font-bold text-cyan-600">
              500+
            </h3>

            <p className="mt-2 text-slate-500">
              Clinics
            </p>

          </div>

          <div className="rounded-3xl bg-slate-50 p-8 text-center">

            <h3 className="text-4xl font-bold text-cyan-600">
              1M+
            </h3>

            <p className="mt-2 text-slate-500">
              Patients Managed
            </p>

          </div>

          <div className="rounded-3xl bg-slate-50 p-8 text-center">

            <h3 className="text-4xl font-bold text-cyan-600">
              5M+
            </h3>

            <p className="mt-2 text-slate-500">
              Appointments
            </p>

          </div>

          <div className="rounded-3xl bg-slate-50 p-8 text-center">

            <h3 className="text-4xl font-bold text-cyan-600">
              4.9★
            </h3>

            <p className="mt-2 text-slate-500">
              Customer Rating
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}