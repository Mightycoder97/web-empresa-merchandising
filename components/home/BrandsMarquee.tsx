"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "SAMSUNG", slug: "samsung" },
  { name: "ADOBE", slug: "" },
  { name: "INTEL", slug: "intel" },
  { name: "COCA-COLA", slug: "cocacola" },
  { name: "LENOVO", slug: "lenovo" },
  { name: "ASUS", slug: "asus" },
  { name: "HP", slug: "hp" },
  { name: "EPSON", slug: "epson" },
  { name: "NEXSYS", slug: "" }
];

function BrandItem({ name, slug }: { name: string; slug?: string }) {
  const [error, setError] = useState(false);

  if (!slug || error) {
    return (
      <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-text-secondary/40 tracking-wider uppercase whitespace-nowrap">
        {name}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/a3a3a3`}
      alt={`${name} logo`}
      className="h-16 sm:h-20 md:h-24 object-contain opacity-40 hover:opacity-80 transition-opacity"
      onError={() => setError(true)}
    />
  );
}

export default function BrandsMarquee() {
  return (
    <div className="w-full bg-surface-light border-y border-surface py-12 overflow-hidden relative flex flex-col items-center">
      <p className="text-text-muted font-sans text-xs tracking-[0.2em] uppercase mb-8 z-20 relative text-center px-4">
        Marcas corporativas que confían en nuestra atención al detalle
      </p>
      
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex whitespace-nowrap items-center"
        >
          {/* Repeat brands multiple times to ensure enough width for continuous scrolling */}
          {[...brands, ...brands, ...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex items-center">
              <div className="mx-8 sm:mx-16 flex items-center justify-center">
                <BrandItem name={brand.name} slug={brand.slug} />
              </div>
              <span className="w-2 h-2 rounded-full bg-accent/20 flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
