"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const portfolio = [
  { brand: "Intel", product: "Mochilas Corporativas Tech", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop" },
  { brand: "Adobe Firefly", product: "Sudaderas Premium de Evento", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop" },
  { brand: "Samsung", product: "Sets de Bienvenida VIP", img: "https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=1000&auto=format&fit=crop" },
  { brand: "Lenovo", product: "Polos Personalizados", img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop" },
];

export default function RealizadosPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionTitle 
        title="Proyectos Realizados" 
        subtitle="Evidencia de Nuestra Excelencia Operativa"
        align="center"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
        {portfolio.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group relative aspect-video bg-surface overflow-hidden rounded-sm cursor-pointer border border-surface-light"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url(${item.img})` }} />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-accent text-xs font-sans tracking-[0.2em] uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">Cliente: {item.brand}</span>
              <h3 className="font-serif text-2xl md:text-3xl text-text-primary">{item.product}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
