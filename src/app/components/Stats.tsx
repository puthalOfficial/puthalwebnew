const stats = [
  { value: "12k+", label: "Active Users" },
  { value: "50+", label: "Global Experts" },
  { value: "24/7", label: "AI Support" },
  { value: "100%", label: "Data Secure" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-deep-ocean text-on-primary">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-display-lg font-display-lg mb-2">
                {stat.value}
              </div>
              <div className="text-label-md font-label-md opacity-80 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
