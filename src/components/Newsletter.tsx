"use client";

import { Send } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://loremflickr.com/1920/600/bbq,party?lock=10')"
                }}
            />
            <div className="absolute inset-0 bg-[#3A1E1E]/90" />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#FDDD00 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-brand-yellow font-bold tracking-[0.2em] text-xs uppercase mb-4 block animate-pulse">
                    Comunidad Exclusiva
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                    Únete al <span className="text-brand-yellow italic">Club del Asado</span>
                </h2>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                    Recibe recetas secretas, acceso anticipado a cortes limitados (Wagyu, Dry Aged) y un <span className="text-white font-bold">10% de descuento</span> en tu primera orden.
                </p>

                <form className="max-w-md mx-auto relative flex items-center">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-4 pl-6 pr-16 text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow transition-colors"
                    />
                    <button
                        type="button"
                        className="absolute right-2 bg-brand-yellow text-[#3A1E1E] p-2.5 rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg"
                    >
                        <Send size={20} />
                    </button>
                </form>
                <p className="text-gray-500 text-xs mt-4">
                    Respetamos tu privacidad. Cero spam, pura carne.
                </p>
            </div>
        </section>
    );
}
