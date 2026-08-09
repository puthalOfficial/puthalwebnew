"use client";

import { useEffect, useRef } from "react";

export default function FloatingFocusCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

      if (cardRef.current) {
        cardRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-xl "
      style={{ animationDuration: "3s" }}
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-lime-300/20 p-3">
          <span className="material-symbols-outlined text-teal-700">
            eco
          </span>
        </div>

        <div>
          <p className="text-sm font-bold text-blue-900">
            Daily Focus
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Your stress level is low today.
          </p>
        </div>
      </div>
    </div>
  );
}