"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function AnfitrionajePage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionTitle 
        title="Presencia y Representación Corporativa" 
        subtitle="Eventos Corporativos, Anfitrionas, Promotoras, Uniformes"
        align="center"
      />
      
      <div className="mt-20 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-text-secondary font-sans text-xl font-light leading-relaxed max-w-3xl text-center mb-16"
        >
          Proporcionamos el personal, la gestión y la identidad visual para que sus activaciones marquen la pauta. Desde eventos corporativos solemnes hasta promociones de verano.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="aspect-square md:aspect-auto md:h-[600px] bg-surface rounded-sm overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop')" }} />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <div className="flex flex-col gap-10">
          {[
            { title: "Gestión Integral de Eventos", desc: "Planificación milimétrica, producción técnica y ejecución impecable para conferencias, simposios y lanzamientos." },
            { title: "Anfitrionas y Promotoras", desc: "Selección rigurosa de personal con un perfil altamente profesional para representación de marca y atención VIP." },
            { title: "Diseño y Producción de Uniformes", desc: "Trasladamos su identidad corporativa a prendas confeccionadas a medida y con estándares de la más alta exigencia en calidad." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="border-l border-surface-light pl-6 hover:border-accent transition-colors"
            >
              <h4 className="font-serif text-2xl text-text-primary mb-3">{item.title}</h4>
              <p className="font-sans text-text-muted font-light">{item.desc}</p>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <Button asChild size="lg" className="rounded-none tracking-widest text-sm uppercase px-12">
              <Link href="/contacto">Cotizar Servicio para Eventos</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
