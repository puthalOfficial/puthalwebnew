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
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-xl max-w-xs animate-bounce"
      style={{ animationDuration: "3s" }}
    >
      <div className="flex items-center gap-4">
        <div className="bg-seafoam-accent/20 p-3 rounded-full">
          <span className="material-symbols-outlined text-secondary">
            eco
          </span>
        </div>
        <div>
          <p className="text-label-md font-bold text-deep-ocean">
            Daily Focus
          </p>
          <p className="text-label-sm text-on-surface-variant">
            Your stress level is low today.
          </p>
        </div>
      </div>
    </div>
  );
}
