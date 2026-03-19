"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import InquiryForm from "@/components/home/InquiryForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="pt-32 min-h-screen flex flex-col">
      <div className="px-4 sm:px-8 max-w-7xl mx-auto w-full mb-12">
        <SectionTitle 
          title="Inicie una Conversación Estratégica" 
          subtitle="Contacto y Ubicación"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center p-8 bg-surface rounded-sm border border-surface-light"
          >
            <Phone className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-xl font-serif text-text-primary mb-4">Línea Directa</h3>
            <p className="font-sans text-text-secondary font-light text-lg">+51 998 484 514</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center text-center p-8 bg-surface rounded-sm border border-surface-light"
          >
            <Mail className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-xl font-serif text-text-primary mb-4">Correo Electrónico</h3>
            <p className="font-sans text-text-secondary font-light text-lg">ventas@timepublicitario.com</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 bg-surface rounded-sm border border-surface-light"
          >
            <MapPin className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-xl font-serif text-text-primary mb-4">Sede Operativa</h3>
            <p className="font-sans text-text-secondary font-light">Av. Ignacio Merino 2650, Int. A, Lince</p>
          </motion.div>
        </div>
      </div>

      <div className="w-full">
        <InquiryForm />
      </div>
    </div>
  );
}
