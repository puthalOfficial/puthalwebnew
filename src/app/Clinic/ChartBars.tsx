"use client";

import { useEffect, useRef } from "react";

interface Bar {
  color: string;
  height: string;
}

const bars: Bar[] = [
  { color: "bg-secondary-fixed-dim", height: "40%" },
  { color: "bg-primary-fixed-dim", height: "65%" },
  { color: "bg-secondary-container", height: "50%" },
  { color: "bg-primary-container", height: "85%" },
  { color: "bg-deep-ocean", height: "70%" },
  { color: "bg-secondary", height: "95%" },
];

export default function ChartBars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const barEls =
      containerRef.current?.querySelectorAll<HTMLDivElement>(".chart-bar");
    if (!barEls) return;

    barEls.forEach((bar) => {
      const targetHeight = bar.style.height;
      bar.style.height = "0px";
      setTimeout(() => {
        bar.style.height = targetHeight;
      }, 300);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-end justify-between h-48 gap-4 mb-6"
    >
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`w-full ${bar.color} rounded-t-lg chart-bar`}
          style={{ height: bar.height }}
        />
      ))}
    </div>
  );
}
