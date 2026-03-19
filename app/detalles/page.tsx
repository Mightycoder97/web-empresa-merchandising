"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function DetallesPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionTitle 
        title="El Valor de los Agregados" 
        subtitle="Ejemplos de Detalles en la Presentación del Producto"
      />

      <div className="mt-20">
        <p className="text-text-secondary font-sans text-xl font-light leading-relaxed max-w-3xl mb-16">
          La diferencia entre un buen artículo y una experiencia de marca memorable radica en los adicionales. Estructuramos el valor percibido integrando empaques sofisticados, tarjetería exclusiva y acabados manuales imprevistos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Empaque Serigrafiado", desc: "Cajas corporativas con detalles UV y cierres magnéticos.", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop" },
            { title: "Kits Spabar", desc: "Mochilas y neceseres adaptados con separadores extra.", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop" },
            { title: "Tarjetería Troquelada", desc: "Tarjetas de presentación insertables en sintético o cuero.", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop" }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-surface p-8 border border-surface-light hover:border-accent/50 transition-colors"
            >
              <div className="aspect-square bg-background mb-6 rounded-sm overflow-hidden relative">
                 <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${feature.img})` }} />
              </div>
              <h4 className="font-serif text-xl text-text-primary mb-3">{feature.title}</h4>
              <p className="font-sans text-text-muted text-sm font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
