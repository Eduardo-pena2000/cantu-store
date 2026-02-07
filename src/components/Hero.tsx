"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-black/60 z-10" />
                <img
                    src="https://loremflickr.com/1920/1080/butcher,meat?lock=10"
                    alt="Fondo Carnicería"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none z-10">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-blue rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
                        LA MEJOR CARNE <br />
                        <span className="text-brand-yellow">DEL NORTE</span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 font-light">
                        Calidad premium, cortes frescos y el servicio que te mereces para la parrilla perfecta.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="/#cortes-premium" className="group bg-brand-yellow text-brand-blue px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,242,0,0.3)]">
                            Conoce Nuestros Cortes
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-colors"
                        >
                            Contáctanos
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
