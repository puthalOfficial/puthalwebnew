import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Elena Thorne",
    role: "Chief Clinical Officer",
    alt: "A professional portrait of a female mental health specialist with a warm, empathetic expression, in a modern, light-filled office with minimalist coastal decor.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTw7c5yFsXXQMyMu2FylB9jgA-lBDHXqbN0S8oUm-4Se333uZPXTm9nPY-eDNHpZTi8dg8emZveuVjTxeNVIe58XrcgThP00qmG53Pak2mGMh_7mAEJFbLwXgp82DZN9-uvfbUsUuciTgW6KQQSQG58bGqYzrxRwbk4zf0jolxN1WAScfX-Wg_VamLAsyfBO7K2FBuAz5RnPae7k4_zkakWoMcQmaKwnO9uM0kLuDOgLrRpZGOdECWnON4k_JUVjLwLrkCcoNxNZ0",
  },
  {
    name: "Marcus Chen",
    role: "Head of UX Design",
    alt: "A professional portrait of a male product designer in a bright, modern studio near a whiteboard with wave-like UI sketches.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOjp8WJOEzPZtj1eRAtnl83155szEGpA73VcmRanvnq3TkH7p5vP97cju_nw3z5tWCMGVKZqSe8E2NkUBYhpnENaHc3fn5RN0cGmfOMPZz3HIrQr3h1CYJ_Ar51Xprbs96Tt5ygr2WOX3MYE9Hq82rIF4m5BSPDhqcjfl9Hp9DLH4ff9QP-ENR2XKFHJk_P_kVHhUNiJuOTGBnDWVs7XB2jT5_V89jQTLpJVqSHhxTdj2iNfvDvxtwmbEbbQI-ye5Xup_njeVTYeI",
  },
  {
    name: "Sarah J. Miller",
    role: "Lead Technologist",
    alt: "A professional portrait of a woman with a confident, serene expression in a high-tech lab environment with soft coastal colors.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF4GcB82q_-Gp-tbdXLxzwgW829Xi63w6X8vYHVd5kyoaVMP-jZJPJJLQJyi8Z62-eg624UuOHPDKSl9p9ZGKS2JXntSZGpKbenk9OzGekYQ3cXKINdtWuvdljd6vPSG9_Kr6uRuifHPh65R9EhcafJlt_ShLhAjpo6qsNNEKGl371qrBSN0D7nfHIKrIiFbF4ylMmLi5PVnIzFnPnxlFZmOX4xJvHm6EyO7BMJyWCMyULSWeiRW1pgmYghIf11OXdvxNEbKUVj6U",
  },
  {
    name: "Jameson Hart",
    role: "Partnership Director",
    alt: "A portrait of a male professional looking thoughtfully out of a large window in a high-rise office building with clear blue skies.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALALEhvBh47hYyWKEsTvs49ITjxO-9HkQLBkiZKvkC6noYO0cvQZ3EhSk-Y_S_6bFSnKd_akZ72gGx95sehP7ehilfPHGTchSaFsY-aQG255XQD9F2lov2PFrNWRMIrx_8k8sR3z0dTIjHZ2HYqN6AnC6wGmeskfzeF70MxMTy0v14x8evN41shF2lRJQyyQPBZVzyMaJDjSf9ShtD0ggGUsH4Ve22yamO8Rl6NAKpvvTI9eDK2zrAds03wsdbNz_GU4F3ztlcImE",
  },
];

export default function Team() {
  return (
    <section className="py-24 px-[16px] md:px-[48px] max-w-[1500px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-[#005d90] font-bold text-[12px] leading-[16px] tracking-[0.05em] font-[Inter] uppercase tracking-widest mb-4 block">
            Meet The Experts
          </span>

          <h2 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold font-[Manrope] text-[#191c1e]">
            The Minds Behind the Peace
          </h2>

          <p className="text-[18px] leading-[28px] font-[Inter] font-normal text-[#404850] mt-4">
            Our diverse team of clinicians, designers, and engineers share a
            single goal: making mental wellness a universal standard.
          </p>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#005d90] text-[#005d90] font-bold hover:bg-[#005d90]/5 transition-colors">
          Join Our Mission
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div className="group" key={member.name}>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-md bg-[#eceef0]">
              <img
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                alt={member.alt}
                src={member.src}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-4 text-white">
                  <span className="material-symbols-outlined cursor-pointer hover:text-[#9feffe] transition-colors">
                    share
                  </span>

                  <span className="material-symbols-outlined cursor-pointer hover:text-[#9feffe] transition-colors">
                    mail
                  </span>
                </div>
              </div>
            </div>

            <h4 className="text-[24px] leading-[32px] font-[Manrope] font-semibold text-[#191c1e]">
              {member.name}
            </h4>

            <p className="text-[14px] leading-[20px] tracking-[0.01em] font-[Inter] font-medium text-[#005d90] uppercase">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}