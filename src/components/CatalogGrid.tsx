"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";

export default function CatalogGrid() {
    return (
        <section id="catalogo" className="py-12 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/producto/${product.slug}`}
                            className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4 rounded-lg"
                        >
                            <div className="mb-2 sm:mb-0">
                                <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500 font-light text-sm tracking-wide uppercase">
                                    {product.category}
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <span className="block text-lg font-bold text-brand-blue">
                                        {product.price}
                                    </span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
