"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const projects = [
  {
    id: 1,
    title: "Agregados y Adicionales Exclusivos",
    description: "Ejemplos de detalles en presentar un item con agregados y adicionales nuestros, elevando el valor percibido del producto final.",
    client: "Samsung, Lenovo, Asus",
    material: "Bio Cuero & Repujado de Alta Precisión",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1 md:row-span-2",
    image: "https://images.unsplash.com/photo-1600607688066-890987f18a86?q=80&w=1500&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Merchandising Tecnológico",
    description: "Items corporativos personalizados con técnicas avanzadas de estampado UV y serigrafía.",
    client: "HP, Adobe, Epson",
    material: "Sintético Premium & Estampado UV",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    image: "https://images.unsplash.com/photo-1541888087405-ebfe6de0be94?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Artículos de Consumo Masivo Premium",
    description: "Diseños propios desarrollados en cuero natural para campañas de alto impacto corporativo.",
    client: "Coca-Cola, Nexsys, Richford Paraguay",
    material: "Cuero Natural & Serigrafía",
    colSpan: "col-span-1 md:col-span-3",
    rowSpan: "row-span-1",
    image: "https://images.unsplash.com/photo-1563851505391-766b1a1ddf77?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function ProjectsBento() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Simulamos un tiempo de carga asíncrono para mostrar el Grid Skeleton visualmente
    const timer = setTimeout(() => setImagesLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-background py-16 md:py-32 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 md:mb-20 text-balance max-w-4xl">
          <SectionTitle 
            title="Items Realizados y Detalles Corporativos" 
            subtitle="Nuestro Portafolio"
            className="mb-6 md:mb-8"
          />
          <p className="text-text-secondary font-sans text-base md:text-lg font-light leading-relaxed">
            Ejemplos de detalles en presentar un item con agregados y adicionales nuestros. Con la confianza de las marcas tecnológicas y de consumo más grandes y prestigiosas del mercado global.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[350px] md:auto-rows-[450px] relative">
          
          {/* Skeleton Grid Renderizado Condicionalmente */}
          {!imagesLoaded && (
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[350px] md:auto-rows-[450px] z-20 pointer-events-none">
              <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-surface animate-pulse rounded-sm" />
              <div className="col-span-1 row-span-1 bg-surface animate-pulse rounded-sm" />
              <div className="col-span-1 md:col-span-3 row-span-1 bg-surface animate-pulse rounded-sm" />
            </div>
          )}

          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              className={`relative group overflow-hidden bg-surface cursor-pointer rounded-sm ${project.colSpan} ${project.rowSpan}`}
            >
              <div className="w-full h-full relative">
                <div 
                  className={`absolute inset-0 bg-surface-light bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Detalles del Caso de Estudio (H2 -> H3 jerarquía SEO conservada por artículo) */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-serif text-3xl sm:text-4xl text-text-primary mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-text-secondary line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="h-[1px] w-full max-w-[100px] bg-accent/50 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
                  
                  <div className="font-sans text-sm tracking-wide text-text-secondary flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    <p className="uppercase text-xs"><span className="text-accent">Cliente:</span> <span className="text-text-primary ml-2">{project.client}</span></p>
                    <p className="uppercase text-xs"><span className="text-accent">Ingeniería:</span> <span className="text-text-primary ml-2">{project.material}</span></p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
