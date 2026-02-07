"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const product = products.find((p) => p.slug === slug);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    if (!product) {
        notFound();
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-brand-blue">Inicio</Link>
                        <ChevronRight size={14} />
                        <Link href="/#cortes-premium" className="hover:text-brand-blue">Cortes Premium</Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-900 font-medium">{product.name}</span>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {/* Image Gallery Side */}
                            <div className="relative h-[400px] lg:h-[600px] bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Details Side */}
                            <div className="p-8 lg:p-16 flex flex-col justify-center">
                                <div className="mb-4">
                                    <span className="bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                                        {product.category}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                                    {product.name}
                                </h1>

                                <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
                                    {product.longDescription || "Calidad premium garantizada. Este corte ha sido seleccionado cuidadosamente para ofrecer la mejor experiencia en tu asador."}
                                </p>

                                <div className="flex items-baseline gap-2 mb-10">
                                    <span className="text-4xl font-bold text-brand-blue">{product.price.split(' ')[0]}</span>
                                    <span className="text-gray-400 text-lg">/ kilo</span>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
                                    {/* Quantity Selector */}
                                    <div className="flex items-center bg-gray-100 rounded-full p-2">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm hover:text-brand-blue transition-colors"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="w-12 text-center font-bold text-lg text-gray-900">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm hover:text-brand-blue transition-colors"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    {/* Add Button */}
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleAddToCart}
                                        className={`flex-1 w-full bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3 transition-all ${isAdded ? "bg-green-500" : "hover:bg-brand-blue/90"}`}
                                    >
                                        {isAdded ? (
                                            <>
                                                ¡Agregado!
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingBag size={20} />
                                                Agregar al Carrito
                                            </>
                                        )}
                                    </motion.button>
                                </div>

                                <div className="border-t border-gray-100 pt-8 mt-auto">
                                    <Link href="/#cortes-premium" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-blue transition-colors font-medium">
                                        <ArrowLeft size={18} />
                                        Volver al catálogo
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
