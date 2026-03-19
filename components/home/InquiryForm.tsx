"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function InquiryForm() {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    // Simulamos carga de un formulario embebido o validación asíncrona para UX de Skeleton Screen
    const timer = setTimeout(() => setFormLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-background border-t border-surface py-16 md:py-32 px-4 sm:px-8 flex justify-center relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_right,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-12 md:mb-20 text-balance">
          <p className="text-accent tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 font-sans">
            Contacto
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary capitalize mb-6">
            ¿Necesitas <span className="italic text-text-secondary">Ayuda?</span>
          </h2>
          <p className="font-sans text-text-secondary text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-6">
            Comunícate directamente con nuestros asesores para recibir una cotización rápida y personalizada de nuestros artículos corporativos y servicios de merchandising para tu marca.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 font-sans text-text-primary">
            <p className="flex items-center gap-2"><span className="text-accent text-xl">📞</span> 998 484 514</p>
            <p className="flex items-center gap-2"><span className="text-accent text-xl">✉️</span> ventas@timepublicitario.com</p>
          </div>
        </div>

        <div className="relative">
          {/* Skeleton Form UI (Indicador visual de carga en texto/código) */}
          {!formLoaded && (
            <div className="absolute inset-0 z-20 bg-background flex flex-col space-y-12">
              <div className="mb-12">
                <div className="h-8 bg-surface animate-pulse rounded-sm w-3/4 mb-4"></div>
                <div className="h-4 bg-surface animate-pulse rounded-sm w-full"></div>
                <div className="h-4 bg-surface animate-pulse rounded-sm w-5/6 mt-2"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="h-14 bg-surface animate-pulse rounded-sm border-b border-surface-light"></div>
                <div className="h-14 bg-surface animate-pulse rounded-sm border-b border-surface-light"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="h-14 bg-surface animate-pulse rounded-sm border-b border-surface-light"></div>
                <div className="h-14 bg-surface animate-pulse rounded-sm border-b border-surface-light"></div>
              </div>
              <div className="h-32 bg-surface animate-pulse rounded-sm border-b border-surface-light"></div>
              <div className="h-16 w-64 mx-auto bg-surface animate-pulse rounded-sm mt-8"></div>
            </div>
          )}

          <form className={`space-y-12 font-sans transition-opacity duration-1000 ${formLoaded ? 'opacity-100' : 'opacity-0'}`}>
            
            <div className="mb-12">
              <h3 className="text-2xl font-serif text-text-primary mb-2">Solicitud de Cotización</h3>
              <p className="text-text-muted font-light text-sm">
                Inicie un diálogo con nuestro equipo de ventas detallando los requerimientos de su merchandising.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col border-b border-surface pb-4 focus-within:border-accent transition-colors relative">
                <label className="text-xs text-text-secondary uppercase tracking-[0.2em] mb-4">Perfil Corporativo</label>
                <input 
                  type="text" 
                  className="bg-transparent border-none outline-none text-text-primary placeholder:text-surface-light text-lg" 
                  placeholder="Nombre Completo y Cargo Directivo" 
                />
              </div>
              <div className="flex flex-col border-b border-surface pb-4 focus-within:border-accent transition-colors relative">
                <label className="text-xs text-text-secondary uppercase tracking-[0.2em] mb-4">Entidad Comercial</label>
                <input 
                  type="text" 
                  className="bg-transparent border-none outline-none text-text-primary placeholder:text-surface-light text-lg" 
                  placeholder="Compañía / Marca" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col border-b border-surface pb-4 focus-within:border-accent transition-colors">
                <label className="text-xs text-text-secondary uppercase tracking-[0.2em] mb-4">Tipo de Servicio</label>
                <select className="bg-transparent border-none outline-none text-text-primary appearance-none cursor-pointer text-lg">
                  <option value="" className="bg-surface text-text-secondary">Seleccionar servicio...</option>
                  <option value="exclusivo" className="bg-surface">Artículos Exclusivos (Bio Cuero, Sintético)</option>
                  <option value="detalles" className="bg-surface">Detalles Corporativos Premium</option>
                  <option value="anfitrionaje" className="bg-surface">Merchandising y Anfitrionaje</option>
                  <option value="otros" className="bg-surface">Otros / Consultoría Especial</option>
                </select>
              </div>
              <div className="flex flex-col border-b border-surface pb-4 focus-within:border-accent transition-colors">
                <label className="text-xs text-text-secondary uppercase tracking-[0.2em] mb-4">Volumen Estimado</label>
                <select className="bg-transparent border-none outline-none text-text-primary appearance-none cursor-pointer text-lg">
                  <option value="" className="bg-surface text-text-secondary">Seleccionar cantidad...</option>
                  <option value="100-500" className="bg-surface">100 - 500 unidades</option>
                  <option value="500-1000" className="bg-surface">500 - 1,000 unidades</option>
                  <option value="1000-5000" className="bg-surface">1,000 - 5,000 unidades</option>
                  <option value="5000+" className="bg-surface">+5,000 unidades</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col border-b border-surface pb-4 focus-within:border-accent transition-colors">
              <label className="text-xs text-text-secondary uppercase tracking-[0.2em] mb-4">Detalles del Pedido</label>
              <textarea 
                rows={4} 
                className="bg-transparent border-none outline-none text-text-primary resize-none placeholder:text-surface-light text-lg leading-relaxed" 
                placeholder="Indique tipo de producto, material deseado (cuero, bio cuero), técnica de impresión (UV, repujado)..."
              />
            </div>

            <div className="pt-12 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="rounded-none tracking-widest uppercase px-16 h-16">
                  Enviar Mensaje
                </Button>
              </motion.div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
