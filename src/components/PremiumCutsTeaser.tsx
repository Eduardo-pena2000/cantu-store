"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PremiumCutsTeaser() {
    return (
        <section id="cortes-premium" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group">
                        <Image
                            src="https://loremflickr.com/800/1000/ribeye,raw?lock=6"
                            alt="Corte Premium Ribeye"
                            fill
                            className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

                        {/* Floating Badge */}
                        <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full">
                            <span className="block text-brand-yellow font-bold text-xs tracking-widest uppercase text-center">Calidad</span>
                            <span className="block text-white font-serif text-2xl">High Choice</span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:pl-8">
                        <span className="text-brand-yellow-dark font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                            Experiencia Gastronómica
                        </span>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                            Cortes Premium <br />
                            <span className="text-brand-blue italic">Artisan Selection</span>
                        </h2>
                        <p className="text-gray-500 text-xl leading-relaxed font-light mb-10">
                            Nuestra selección premium representa lo mejor de la ganadería del norte.
                            Cortes con el marmoleo perfecto, añejados para maximizar su suavidad y
                            garantizar un sabor inigualable en cada bocado.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/productos" className="group inline-flex items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all">
                                <span>Ver Catálogo Completo</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
