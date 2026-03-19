"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({ title, subtitle, className, align = "left" }: SectionTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, y }}
      className={cn(
        "flex flex-col justify-center mb-16",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className
      )}
    >
      {subtitle && (
        <span className="text-accent text-xs font-sans tracking-[0.2em] uppercase mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-text-primary capitalize leading-tight">
        {title.split(' ').map((word, i) => {
          // Si la palabra es un conector o artículo, la hacemos itálica y secundaria (Toque premium)
          if (["&", "and", "the", "de", "el", "la", "y"].includes(word.toLowerCase())) {
            return <span key={i} className="italic text-text-secondary mx-2">{word}</span>;
          }
          return <span key={i} className="mr-2">{word}</span>;
        })}
      </h2>
    </motion.div>
  );
}
