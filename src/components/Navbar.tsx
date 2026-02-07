"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // New import
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { totalItems, openCart } = useCart();
  const pathname = usePathname(); // Get current route

  // Check if we are on the homepage
  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // Only handle anchor links on the same page
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);

      if (elem) {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu if open
        const offset = 80; // Navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = elem.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Cortes Premium", href: "/#cortes-premium" },
    { name: "Historia", href: "/#about" },
    { name: "Contacto", href: "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed w-full z-50 transition-all duration-500 border-b border-white/5",
        // Logic: If scrolled OR not on homepage, show solid background. Otherwise transparent.
        scrolled || !isHome
          ? "bg-brand-blue/95 backdrop-blur-xl shadow-lg border-white/10 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <motion.div
              className={cn(
                "relative rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 border-2 border-brand-yellow/20 bg-white p-1",
                scrolled ? "w-10 h-10" : "w-14 h-14"
              )}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Image src="/logo.png" alt="El Ofertón Logo" fill className="object-contain p-0.5" />
            </motion.div>
            <div className={cn("flex flex-col", scrolled ? "opacity-0 w-0 hidden" : "opacity-100 transition-opacity duration-300 delay-100")}>
              <span className="font-bold text-white text-xl leading-none tracking-tight" style={{ fontFamily: 'var(--font-geist-sans)' }}>El Ofertón</span>
              <span className="text-brand-yellow text-xs font-medium tracking-widest uppercase" style={{ fontFamily: 'var(--font-geist-sans)' }}>de Cantú</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group p-1"
                onClick={(e) => handleScroll(e, link.href)}
              >
                <span className="text-white/90 font-medium text-sm tracking-wide group-hover:text-brand-yellow transition-colors relative z-10">
                  {link.name}
                </span>
                {/* Creative Hover Effect: Glide Line */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                {/* Glow bloom */}
                <span className="absolute inset-0 bg-brand-yellow/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </Link>
            ))}

            <button
              onClick={openCart}
              className="relative bg-brand-yellow text-brand-blue px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:text-brand-blue transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,242,0,0.3)] flex items-center gap-2"
            >
              <ShoppingBag size={16} />
              <span>Carrito</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Section (Cart + Menu) */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={openCart}
              className="relative text-white hover:text-brand-yellow transition-colors"
            >
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-yellow text-brand-blue text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-yellow transition-colors relative z-50"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-brand-blue/98 z-40 pt-24 overflow-hidden"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/95 via-[#3A1E1E]/95 to-brand-blue/95 backdrop-blur-xl z-0" />

            {/* Decorative element (optional, kept subtle) */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex flex-col items-center gap-8 p-8 relative z-10 h-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-4xl font-serif font-bold text-white hover:text-brand-yellow transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 bg-brand-yellow text-brand-blue px-10 py-4 rounded-full font-bold text-lg w-full max-w-xs shadow-xl hover:scale-105 transition-transform"
              >
                ¡Hacer Pedido!
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
