import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface text-text-secondary py-12 md:py-16 px-6 sm:px-12 mt-auto border-t border-glass-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
        <div className="col-span-1 md:col-span-2 text-center md:text-left">
          <Link href="/" className="inline-block mb-6 md:mb-8">
            <img src="/logo-white.png" alt="Time Publicitario" className="h-12 md:h-16 w-auto object-contain mx-auto md:mx-0" />
          </Link>
          <p className="font-sans font-light max-w-sm mt-4 md:mt-3 mx-auto md:mx-0 text-balance">
            La convergencia del diseño físico y la experiencia musical de alto nivel. Para marcas y personas que no aceptan lo ordinario.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-text-primary text-sm font-sans tracking-widest uppercase mb-6">Navegación</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-accent transition-colors">Inicio</Link></li>
            <li><Link href="/exclusivo" className="hover:text-accent transition-colors">Exclusivo</Link></li>
            <li><Link href="/realizados" className="hover:text-accent transition-colors">Realizados</Link></li>
            <li><Link href="/detalles" className="hover:text-accent transition-colors">Detalles</Link></li>
            <li><Link href="/anfitrionaje" className="hover:text-accent transition-colors">Anfitrionaje</Link></li>
            <li><Link href="/contacto" className="hover:text-accent transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-text-primary text-sm font-sans tracking-widest uppercase mb-6">Social</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="p-2 border border-surface-light rounded-full hover:border-accent hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 border border-surface-light rounded-full hover:border-accent hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 border border-surface-light rounded-full hover:border-accent hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-surface-light flex flex-col md:flex-row justify-between items-center text-xs text-text-muted">
        <p>&copy; {new Date().getFullYear()} Time Publicitario. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0">Diseñado con excelencia técnica.</p>
      </div>
    </footer>
  );
}
