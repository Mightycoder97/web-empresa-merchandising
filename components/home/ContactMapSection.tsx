"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactMapSection() {
  return (
    <section className="bg-background py-16 md:py-32 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 text-balance">
          <p className="text-accent tracking-[0.2em] text-xs uppercase mb-6 font-sans">
            Contacto
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary capitalize mb-6">
            Inicie su <span className="italic text-text-secondary">Proyecto</span>
          </h2>
          <p className="font-sans text-text-secondary text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Comunícate directamente con nuestros asesores para recibir una cotización rápida y personalizada de nuestros artículos corporativos y servicios de merchandising de élite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form Side */}
          <motion.form 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 font-sans"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col border-b border-surface pb-2 focus-within:border-accent transition-colors">
                <label className="text-xs text-text-secondary uppercase tracking-[0.1em] mb-2">Nombre Completo</label>
                <input type="text" className="bg-transparent border-none outline-none text-text-primary placeholder:text-surface-light text-base" placeholder="Su nombre" />
              </div>
              <div className="flex flex-col border-b border-surface pb-2 focus-within:border-accent transition-colors">
                <label className="text-xs text-text-secondary uppercase tracking-[0.1em] mb-2">Empresa</label>
                <input type="text" className="bg-transparent border-none outline-none text-text-primary placeholder:text-surface-light text-base" placeholder="Razón social" />
              </div>
            </div>

            <div className="flex flex-col border-b border-surface pb-2 focus-within:border-accent transition-colors">
              <label className="text-xs text-text-secondary uppercase tracking-[0.1em] mb-2">Correo Electrónico</label>
              <input type="email" className="bg-transparent border-none outline-none text-text-primary placeholder:text-surface-light text-base" placeholder="correo@empresa.com" />
            </div>

            <div className="flex flex-col border-b border-surface pb-2 focus-within:border-accent transition-colors">
              <label className="text-xs text-text-secondary uppercase tracking-[0.1em] mb-2">Detalles del Pedido</label>
              <textarea rows={4} className="bg-transparent border-none outline-none text-text-primary resize-none placeholder:text-surface-light text-base leading-relaxed" placeholder="Indique tipo de merchandising, cantidades y técnicas deseadas..." />
            </div>

            <Button size="lg" className="tracking-widest uppercase w-full h-14 rounded-none">
              Enviar Mensaje
            </Button>
          </motion.form>

          {/* Map & Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 h-full"
          >
            <div className="flex flex-col sm:flex-row gap-6 font-sans text-text-primary">
               <div className="flex items-center gap-3 bg-surface p-4 flex-1 border border-surface-light rounded-sm">
                 <Phone className="w-5 h-5 text-accent" />
                 <span className="text-sm tracking-wide">+51 998 484 514</span>
               </div>
               <div className="flex items-center gap-3 bg-surface p-4 flex-1 border border-surface-light rounded-sm">
                 <Mail className="w-5 h-5 text-accent" />
                 <span className="text-sm tracking-wide break-all">ventas@timepublicitario.com</span>
               </div>
            </div>
            
            <div className="flex-grow min-h-[300px] w-full bg-surface relative rounded-sm overflow-hidden border border-surface-light flex items-center justify-center p-[1px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.408006322304!2d-77.034509!3d-12.083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8623d3864b9%3A0xc6c7d7ebfb6da812!2sAv.%20Ignacio%20Merino%202650%2C%20Lince%2015046!5e0!3m2!1sen!2spe!4v1700000000000!5m2!1sen!2spe" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(80%) hue-rotate(180deg)" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-x-0 inset-y-0"
              />
              <div className="absolute inset-0 bg-background/10 pointer-events-none" />
            </div>
            
            <div className="flex items-center gap-3 text-text-secondary text-sm">
               <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
               <p>Av. Ignacio Merino 2650, Interior A, Lince, Lima</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
