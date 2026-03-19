import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Time Publicitario | Merchandising Corporativo Premium y Diseños Exclusivos B2B",
  description: "Fabricamos productos corporativos únicos con materiales premium y detalles exquisitos. Diferénciate de lo genérico con merchandising B2B de alta gama diseñado a medida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-text-primary selection:bg-accent selection:text-background overflow-x-hidden">
        <Header />
        <main className="flex-grow flex flex-col relative z-10 pt-20 overflow-x-hidden w-full">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
