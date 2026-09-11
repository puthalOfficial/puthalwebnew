"use client"
import ClinicModal from "./FormSubmit";
import { useState } from "react";

export default function ClinicHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFF] py-20 md:py-18">
  <div className="mx-auto max-w-6xl px-6 text-center">

    <div className="inline-flex items-center rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
      Smart Healthcare Platform
    </div>

    <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-900">
      Smart Clinic  Management
      <span className="block text-[#005d90]">
       Solutions
      </span>
      
    </h1>

    <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-8 text-slate-600">
      Transform your clinic with an all-in-one healthcare platform designed
      to automate operations, simplify appointment management, increase
      revenue, and deliver exceptional patient experiences.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <button onClick={() => setIsModalOpen(true)} className="rounded-xl bg-[#005d90] px-8 py-4 font-semibold text-white shadow-lg hover:bg-[#005d90] transition">
        Book Demo
      </button>
      <ClinicModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>

   
  </div>
</section>
  );
}