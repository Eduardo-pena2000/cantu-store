"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative h-[500px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700">
                        <Image
                            src="https://loremflickr.com/800/1000/butcher,man?lock=99"
                            alt="Maestro Carnicero Cantú"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="text-xl font-bold font-serif italic">"La calidad no se negocia"</p>
                            <p className="text-sm opacity-80">- Familia Cantú</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-6">
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm tracking-wider">
                            NUESTRA HISTORIA
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Más que una carnicería, una <span className="text-brand-blue">tradición familiar</span>.
                        </h2>

                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Todo comenzó hace más de 30 años con un pequeño mostrador y un sueño: ofrecer a nuestros vecinos los cortes más frescos y sabrosos de la ciudad.
                            </p>
                            <p>
                                Lo que empezó como un negocio local, creció gracias a la recomendación de boca en boca. No vendemos "carne", vendemos la pieza central de tus reuniones familiares, el motivo para encender el carbón un domingo y la excusa perfecta para celebrar.
                            </p>
                            <p>
                                Hoy, seguimos manteniendo esa promesa original: cortes seleccionados a mano, un trato cercano y la garantía de que, si no es lo suficientemente bueno para nuestra mesa, no lo es para la tuya.
                            </p>
                        </div>

                        <div className="pt-8 flex items-center gap-8 border-t border-gray-100">
                            <div>
                                <span className="block text-4xl font-bold text-brand-blue">30+</span>
                                <span className="text-sm text-gray-500">Años de Exp.</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-brand-blue">100%</span>
                                <span className="text-sm text-gray-500">Calidad Premium</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-brand-blue">5k+</span>
                                <span className="text-sm text-gray-500">Clientes Felices</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
