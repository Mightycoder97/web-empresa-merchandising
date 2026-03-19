"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ExclusivoPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionTitle 
        title="Diseños Exclusivos y Propios" 
        subtitle="Elaboración de un Item Corporativo con Ideas y Detalles"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] bg-surface rounded-sm overflow-hidden group"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute bottom-10 left-10">
            <h3 className="text-2xl font-serif text-text-primary mb-2">Portalicor Armado a Mano</h3>
            <p className="text-accent text-sm tracking-widest uppercase mb-4">90% Elaboración Artesanal</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
            Excelencia en Materialidad <span className="italic text-text-secondary">& Acabados</span>
          </h3>
          <p className="text-text-secondary font-sans text-lg font-light leading-relaxed mb-8">
            Nuestros ítems corporativos son confeccionados utilizando exclusivamente los mejores materiales del mercado. Destacamos en el uso de Bio cuero, Cuero natural, y Sintético de alto tránsito. Cada pieza es tratada con técnicas avanzadas como Serigrafía especializada, Repujado de alta precisión y estampado UV para asegurar una durabilidad y estética insuperables.
          </p>
          
          <ul className="space-y-6 mb-12">
            {[
              "Repujado milimétrico para bajo y alto relieve",
              "Curado UV para resistencia y brillo",
              "Ensamblaje artesanal cuidadoso en cada unidad"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center text-text-muted font-light gap-4">
                <span className="w-8 h-[1px] bg-accent block" />
                {item}
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="rounded-none tracking-widest text-sm uppercase px-12">
            <Link href="/contacto">Solicitar Diseño Exclusivo</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
