"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "SAMSUNG", slug: "samsung", colSpan: "col-span-2 md:col-span-2" },
  { name: "ADOBE", slug: "", colSpan: "col-span-1 md:col-span-1" },
  { name: "INTEL", slug: "intel", colSpan: "col-span-1 md:col-span-1" },
  { name: "COCA-COLA", slug: "cocacola", colSpan: "col-span-1 md:col-span-1" },
  { name: "LENOVO", slug: "lenovo", colSpan: "col-span-1 md:col-span-2" },
  { name: "ASUS", slug: "asus", colSpan: "col-span-2 md:col-span-1" },
  { name: "HP", slug: "hp", colSpan: "col-span-1 md:col-span-1" },
  { name: "EPSON", slug: "epson", colSpan: "col-span-1 md:col-span-1" },
  { name: "NEXSYS", slug: "", colSpan: "col-span-2 md:col-span-2" },
];

function BrandLogo({ name, slug }: { name: string; slug?: string }) {
  const [error, setError] = useState(false);

  // Fallback text if no slug or image load fails
  if (!slug || error) {
    return (
      <span className="font-serif text-lg md:text-xl text-text-secondary/70 tracking-widest uppercase text-center leading-none">
        {name}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/a3a3a3`}
      alt={`Logo de ${name}`}
      className="max-h-[70px] md:max-h-[90px] max-w-[90%] object-contain opacity-50 group-hover:opacity-100 transition-opacity z-10"
      onError={() => setError(true)}
    />
  );
}

export default function BrandsBento() {
  return (
    <section className="bg-background py-16 md:py-24 px-4 sm:px-8 border-y border-surface-light/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-text-muted font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase mb-8 md:mb-12 text-center text-balance">
          Marcas corporativas que confían en nuestra atención al detalle
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[100px] md:auto-rows-[150px]">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              whileHover={{ scale: 0.98 }}
              className={`bg-surface/20 border border-surface-light rounded-sm flex flex-col items-center justify-center p-4 hover:bg-surface/50 hover:border-accent/40 transition-all cursor-default group ${brand.colSpan}`}
            >
              <div className="flex-grow flex items-center justify-center w-full min-h-[30px] md:min-h-[40px] relative overflow-hidden">
                <BrandLogo name={brand.name} slug={brand.slug} />
              </div>
              
              <span className="font-sans text-[8px] md:text-[9px] text-text-muted/40 tracking-[0.2em] uppercase mt-3 transition-colors duration-300 group-hover:text-text-muted/80">
                 — {brand.name} —
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
