"use client";

import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";

export default function LocationMap() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin className="text-brand-yellow w-6 h-6" />
                            <span className="text-brand-blue font-bold tracking-wider text-sm uppercase">Nuestra Ubicación</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Visítanos en <span className="text-brand-blue">El Ofertón</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Estamos ubicados en el corazón de la ciudad, listos para atenderte con los cortes más frescos y el mejor servicio. Contamos con estacionamiento exclusivo para clientes.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-brand-blue">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Dirección Principal</h4>
                                    <p className="text-gray-500">Av. Lázaro Cárdenas 1234, Col. Centro, Monterrey, NL</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <Navigation size={20} />
                            Cómo Llegar
                        </a>
                    </div>

                    {/* Visual Map Placeholder */}
                    <div className="order-1 lg:order-2 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        {/* Using a static map image from LoremFlickr as placeholder for a real map view */}
                        <Image
                            src="https://loremflickr.com/800/600/map,city?lock=50"
                            alt="Mapa de Ubicación"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay Pin */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                <div className="w-4 h-4 bg-brand-yellow rounded-full animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                <MapPin className="text-brand-blue w-12 h-12 drop-shadow-lg relative z-10" fill="currentColor" />
                            </div>
                        </div>

                        {/* Map UI Elements simulation */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-xs font-bold text-gray-600">
                            Ver en Google Maps
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
