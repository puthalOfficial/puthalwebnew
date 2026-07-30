"use client";

import { useEffect } from "react";

/**
 * Replicates the original vanilla-JS micro-interaction:
 * adds a temporary `scale-95` class to buttons/links on press.
 */
export default function MicroInteractions() {
  useEffect(() => {
    const elements = document.querySelectorAll("button, a");

    const addScale = (e: Event) => {
      (e.currentTarget as HTMLElement).classList.add("scale-95");
    };
    const removeScale = (e: Event) => {
      (e.currentTarget as HTMLElement).classList.remove("scale-95");
    };

    elements.forEach((el) => {
      el.addEventListener("mousedown", addScale);
      el.addEventListener("mouseup", removeScale);
      el.addEventListener("mouseleave", removeScale);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mousedown", addScale);
        el.removeEventListener("mouseup", removeScale);
        el.removeEventListener("mouseleave", removeScale);
      });
    };
  }, []);

  return null;
}
