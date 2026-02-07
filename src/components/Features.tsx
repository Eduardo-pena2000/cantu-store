"use client";

import { Award, Scissors, MapPin } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Award size={48} className="text-brand-yellow mb-4" />,
            title: "Calidad Premium",
            description: "Seleccionamos cuidadosamente el mejor ganado para ofrecerte carne de la más alta calidad.",
        },
        {
            icon: <Scissors size={48} className="text-brand-yellow mb-4" />,
            title: "Cortes Frescos",
            description: "Nuestros carniceros expertos preparan tu pedido al momento para garantizar frescura total.",
        },
        {
            icon: <MapPin size={48} className="text-brand-yellow mb-4" />,
            title: "Servicio Local",
            description: "Orgullosamente sirviendo a nuestra comunidad con el trato amable que nos distingue.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50 text-brand-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">¿POR QUÉ ELEGIRNOS?</h2>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="bg-brand-blue/5 p-4 rounded-full mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
