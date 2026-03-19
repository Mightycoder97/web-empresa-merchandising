"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Simular tiempo de carga del video para renderizar el skeleton
    const timer = setTimeout(() => setVideoLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const statementVariant = {
    hidden: { opacity: 0, scale: 1.05, y: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center -mt-20 overflow-hidden">
      {/* Background Video with Skeleton Experience */}
      <div className="absolute inset-0 w-full h-full bg-surface-light">
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gray-900 animate-pulse z-0" />
        )}
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover opacity-70 block mix-blend-screen transition-opacity duration-1000 ${videoLoaded ? 'opacity-70' : 'opacity-0'}`}
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-welder-at-work-2410/1080p.mp4" type="video/mp4" />
        </video>
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-black/40 mask-gradient-b z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.5)_100%)] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center px-4 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-accent tracking-[0.3em] text-xs sm:text-sm uppercase font-sans mb-8"
        >
          Merchandising Corporativo Premium
        </motion.p>
        
        <motion.h1 
          className="font-serif text-4xl sm:text-6xl md:text-[5.5rem] leading-[1.1] sm:leading-[1.1] text-text-primary tracking-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="block">
            {"Si tu empresa no es genérica,".split(" ").map((word, i, arr) => (
              <span key={`l1-${i}`} className="inline-block whitespace-pre">
                <motion.span variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
                {i !== arr.length - 1 && " "}
              </span>
            ))}
          </span>
          <motion.span 
            className="block italic text-text-secondary mt-2 transform-origin-center"
            variants={statementVariant}
          >
            tu{" "}
            <span className="relative inline-block mx-1 font-semibold">
              <span className="text-text-secondary px-1 relative z-0">merchandising</span>
              <motion.span 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 1.6, duration: 0.8, ease: "easeInOut" }}
                className="absolute left-0 top-0 bottom-0 right-0 bg-accent text-background px-1 z-10"
              >
                merchandising
              </motion.span>
            </span>{" "}
            tampoco lo debe ser.
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="mt-8 sm:mt-10 text-text-secondary font-sans font-light max-w-2xl text-base sm:text-xl leading-relaxed mx-auto text-balance"
        >
          Protege la identidad de tu marca evitando las importaciones masivas. Creamos objetos corporativos con diseño disruptivo y acabados premium, pensados para sorprender a tus clientes más exigentes y elevar la percepción de tu negocio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="mt-10 sm:mt-12 flex flex-col w-full sm:w-auto sm:flex-row gap-4 sm:gap-6"
        >
          <Button asChild size="lg" className="rounded-none tracking-widest text-xs sm:text-sm uppercase px-8 sm:px-12 w-full sm:w-auto">
            <Link href="/contacto">Hablemos de tu Proyecto</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-none tracking-widest text-xs sm:text-sm uppercase border-surface-light text-text-primary hover:border-text-primary px-8 sm:px-12 w-full sm:w-auto">
            <Link href="/exclusivo">Explorar la Calidad Premium</Link>
          </Button>
        </motion.div>
      </div>
      
    </section>
  );
}
