"use client";

import Image from "next/image";
import { Flame, ThermometerSun, ChefHat, ArrowRight } from "lucide-react";

export default function GrillingTips() {
    const tips = [
        {
            id: 1,
            icon: <ThermometerSun size={32} className="text-[#A8182D]" />,
            title: "El Término Perfecto",
            description: "Para un Ribeye jugoso, busca una temperatura interna de 54°C. Retira del fuego 2 grados antes, el calor residual hará el resto.",
            image: "https://loremflickr.com/800/600/steak,thermometer?lock=1"
        },
        {
            id: 2,
            icon: <Flame size={32} className="text-[#A8182D]" />,
            title: "Carbón vs. Leña",
            description: "El carbón ofrece calor constante y controlable. La leña añade notas ahumadas complejas. ¿Nuestra recomendación? Mezcla ambos.",
            image: "https://loremflickr.com/800/600/fire,grill?lock=2"
        },
        {
            id: 3,
            icon: <ChefHat size={32} className="text-[#A8182D]" />,
            title: "El Secreto del Reposo",
            description: "Jamás cortes la carne al salir de la parrilla. Déjala reposar el 20% del tiempo de cocción para redistribuir los jugos.",
            image: "https://loremflickr.com/800/600/chef,steak?lock=3"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-gray-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                        Education Center
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3A1E1E]">
                        Maestría <span className="text-[#A8182D]">Parrillera</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        No solo vendemos la mejor carne, te enseñamos a honrarla. Aprende los secretos de los grandes asadores del norte.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tips.map((tip) => (
                        <div key={tip.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={tip.image}
                                    alt={tip.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                                    {tip.icon}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold font-serif mb-3 text-[#3A1E1E] group-hover:text-[#A8182D] transition-colors">{tip.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                    {tip.description}
                                </p>
                                <button className="text-[#A8182D] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                    Leer artículo completo <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
