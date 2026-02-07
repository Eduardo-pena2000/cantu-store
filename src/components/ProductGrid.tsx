"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";

export default function ProductGrid() {
    return (
        <section id="cortes-premium" className="py-24 bg-white relative overflow-hidden">
            {/* Background Texture - Subtle Marble or Grain */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Elegant Header */}
                <div className="text-center mb-20">
                    <span className="text-brand-yellow-dark font-bold tracking-[0.2em] text-sm uppercase mb-3 block">
                        Nuestra Selección
                    </span>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 relative inline-block">
                        Cortes Premium
                        {/* Decorative underlining */}
                        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-brand-blue/20" />
                    </h2>
                    <p className="mt-8 text-gray-500 max-w-2xl mx-auto font-light text-xl leading-relaxed">
                        Piezas seleccionadas artesanalmente para garantizar la máxima suavidad y sabor en tu asador.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-brand-blue/20">

                            {/* Image Section */}
                            <div className="relative h-[300px] w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                                />
                                {/* Elegant Overlay */}
                                <Link href={`/producto/${product.slug}`} className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />

                                {/* Quick Action Button (Appears on Hover) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                                    <Link href={`/producto/${product.slug}`} className="pointer-events-auto bg-white text-brand-blue px-6 py-3 rounded-full font-serif font-bold tracking-wider shadow-lg hover:bg-brand-blue hover:text-white transition-colors">
                                        Ver Detalle
                                    </Link>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 text-center relative">
                                {/* Decorative Line */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-yellow transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <Link href={`/producto/${product.slug}`}>
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors cursor-pointer">
                                        {product.name}
                                    </h3>
                                </Link>

                                <p className="text-gray-500 font-light text-sm mb-4 tracking-wide uppercase">
                                    Calidad Premium
                                </p>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-lg font-bold text-brand-blue">
                                        {product.price}
                                    </span>
                                    <span className="text-xs text-gray-400">/ kg</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/productos" className="inline-block px-8 py-3 border-2 border-brand-blue text-brand-blue font-bold rounded-full hover:bg-brand-blue hover:text-white transition-colors">
                        Ver Todos los Cortes Premium
                    </Link>
                </div>
            </div>
        </section>
    );
}
