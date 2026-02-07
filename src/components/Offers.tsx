"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { offers } from "@/lib/data";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Offers() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % offers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
    };

    return (
        <section id="ofertas" className="py-24 bg-white relative overflow-hidden">

            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="text-brand-yellow" size={20} />
                            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">Experiencia Premium</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            Selección <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue/70">Exclusiva</span>
                        </h2>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-transparent transition-all duration-300 active:scale-95"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-transparent transition-all duration-300 active:scale-95"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Modern Card Carousel */}
                <div className="relative h-[600px] md:h-[500px] w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative shadow-2xl group">
                                {/* Background Image with Zoom Effect */}
                                <Image
                                    src={offers[currentIndex].image}
                                    alt={offers[currentIndex].name}
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent" />

                                {/* Content Container */}
                                <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-8 md:p-16 max-w-2xl text-white">

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="inline-flex items-center gap-2 bg-brand-yellow/20 backdrop-blur-md border border-brand-yellow/30 px-4 py-2 rounded-full text-brand-yellow text-xs font-bold tracking-widest uppercase mb-6 w-fit"
                                    >
                                        <span>Edición Limitada</span>
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
                                    >
                                        {offers[currentIndex].name}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-lg"
                                    >
                                        {offers[currentIndex].description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex items-center gap-6"
                                    >
                                        <div>
                                            <p className="text-brand-yellow text-4xl md:text-5xl font-bold tracking-tight">
                                                {offers[currentIndex].salePrice}
                                            </p>
                                            <p className="text-gray-400 text-sm line-through decoration-white/30 decoration-2">
                                                {offers[currentIndex].originalPrice}
                                            </p>
                                        </div>
                                        <div className="h-12 w-px bg-white/20" />
                                        <button className="group/btn relative overflow-hidden bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-brand-blue hover:text-white transition-all duration-300 flex items-center gap-3">
                                            <span className="relative z-10">Ordenar Ahora</span>
                                            <ArrowRight className="relative z-10 group-hover/btn:translate-x-1 transition-transform" size={20} />
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Bar */}
                    <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                        {offers.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1 cursor-pointer transition-all duration-500 rounded-full ${index === currentIndex ? "w-12 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
