"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-leather.png')" }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-yellow font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                            Nuestra Esencia
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Más que carne, es <span className="text-brand-yellow italic">Ritual</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            En El Ofertón de Cantú, no solo vendemos cortes; preservamos la tradición del asado norteño. Desde la selección del ganado hasta el corte preciso en nuestra carnicería, cada paso es un homenaje al fuego y a la convivencia.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="border border-white/20 p-4 rounded-xl text-center">
                                <span className="block text-3xl font-bold text-white">25+</span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Años de Expertis</span>
                            </div>
                            <div className="border border-white/20 p-4 rounded-xl text-center">
                                <span className="block text-3xl font-bold text-white">100%</span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Calidad Garantizada</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Video Player */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
                        onClick={togglePlay}
                    >
                        {/* Poster Image (Placeholder) */}
                        <Image
                            src="https://loremflickr.com/800/600/grill,fire,steak?lock=50"
                            alt="Brand Video Cover"
                            width={800}
                            height={600}
                            className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                        />

                        {/* Overlay (Darkens poster) */}
                        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,193,7,0.4)] group-hover:scale-110 transition-transform">
                                <Play size={32} className="text-[#3A1E1E] ml-1" fill="currentColor" />
                            </div>
                        </div>

                        {/* Actual Video Tag */}
                        <video
                            ref={videoRef}
                            className="w-full h-auto aspect-video object-cover bg-black"
                            controls={false}
                            onEnded={() => setIsPlaying(false)}
                            poster="https://loremflickr.com/800/600/cows,meadow?lock=51"
                        >
                            <source src="/brand-video.mp4" type="video/mp4" />
                            Tu navegador no soporta video.
                        </video>

                        {/* Play/Pause Corner Indicator */}
                        {isPlaying && (
                            <div className="absolute bottom-4 right-4 bg-black/50 p-2 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                <Pause size={20} />
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
