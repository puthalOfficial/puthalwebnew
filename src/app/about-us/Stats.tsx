const stats = [
  { value: "12k+", label: "Active Users" },
  { value: "50+", label: "Global Experts" },
  { value: "24/7", label: "AI Support" },
  { value: "100%", label: "Data Secure" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#023E8A] text-white">
      <div className="px-[16px] md:px-[48px] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold font-[Manrope] mb-2">
                {stat.value}
              </div>

              <div className="text-[14px] leading-[20px] tracking-[0.01em] font-[Inter] font-medium opacity-80 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}