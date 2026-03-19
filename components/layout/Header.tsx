"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setHasScrolled(latest > 50);
  });

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 transition-colors duration-300 ${
        hasScrolled || menuOpen ? "glass bg-background/80" : "bg-transparent text-white"
      }`}
    >
      <Link href="/" onClick={() => setMenuOpen(false)} className="z-50 flex items-center">
        <img src="/logo-white.png" alt="Time Publicitario" className="h-10 md:h-12 w-auto object-contain" />
      </Link>

      <nav className="hidden md:flex gap-8 items-center font-sans text-sm tracking-widest uppercase">
        <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
        <Link href="/exclusivo" className="hover:text-accent transition-colors">Exclusivo</Link>
        <Link href="/realizados" className="hover:text-accent transition-colors">Realizados</Link>
        <Link href="/detalles" className="hover:text-accent transition-colors">Detalles</Link>
        <Link href="/anfitrionaje" className="hover:text-accent transition-colors">Anfitrionaje</Link>
        <Link href="/contacto" className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-colors">
          Contacto
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col gap-1.5 z-50 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <motion.span 
          animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="w-6 h-[1.5px] bg-current block transition-colors" 
        />
        <motion.span 
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-[1.5px] bg-current block transition-colors" 
        />
        <motion.span 
          animate={menuOpen ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 16 }}
          className="h-[1.5px] bg-current block self-end transition-colors" 
        />
      </button>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" }
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 min-h-screen bg-background z-40 md:hidden flex flex-col items-center justify-center pt-20"
      >
        <nav className="flex flex-col gap-8 items-center font-sans text-lg sm:text-2xl tracking-widest uppercase">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">Inicio</Link>
          <Link href="/exclusivo" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">Exclusivo</Link>
          <Link href="/realizados" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">Realizados</Link>
          <Link href="/detalles" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">Detalles</Link>
          <Link href="/anfitrionaje" onClick={() => setMenuOpen(false)} className="hover:text-accent transition-colors">Anfitrionaje</Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)} className="mt-4 px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-colors">
            Contacto
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
