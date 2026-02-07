"use client";

import { MousePointerClick, Ruler, ShoppingBag, ArrowRight } from "lucide-react";

export default function ProcessSteps() {
    const steps = [
        {
            id: 1,
            icon: <MousePointerClick size={40} className="text-brand-yellow" />,
            title: "1. Elige tu Corte",
            description: "Explora nuestra selección premium de Ribeye, New York, Tomahawk y más."
        },
        {
            id: 2,
            icon: <Ruler size={40} className="text-brand-yellow" />,
            title: "2. Personaliza",
            description: "Indícanos el grosor deseado (1\", 1.5\", 2\") y el término de maduración."
        },
        {
            id: 3,
            icon: <ShoppingBag size={40} className="text-brand-yellow" />,
            title: "3. Recibe o Recoge",
            description: "Te lo enviamos empacado al vacío o pasa por él a nuestra boutique."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-brand-blue text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#FDDD00 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-brand-yellow font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                        Experiencia Simplificada
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        Tu asado perfecto en <span className="text-brand-yellow">3 pasos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/20 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={step.id} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10 group-hover:bg-brand-yellow/20 group-hover:scale-110 transition-all duration-300 relative shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-yellow text-brand-blue rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                    {step.id}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-serif">{step.title}</h3>
                            <p className="text-gray-300 leading-relaxed max-w-xs text-lg">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a
                        href="/productos"
                        className="inline-flex items-center gap-2 bg-brand-yellow text-brand-blue px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 hover:bg-white shadow-[0_0_30px_rgba(253,221,0,0.3)]"
                    >
                        <span>Comenzar Pedido</span>
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
