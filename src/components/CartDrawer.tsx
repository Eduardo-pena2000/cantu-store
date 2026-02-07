"use client";

import { X, Trash2, ShoppingBag, Plus, Minus, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
    const { cart, isOpen, closeCart, removeFromCart, subtotal, addToCart, openCheckout } = useCart();

    // Helper to update quantity
    const updateQuantity = (item: any, change: number) => {
        if (item.quantity + change > 0) {
            addToCart(item, change); // Re-using addToCart which adds delta
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#FDFBF7] shadow-2xl z-[70] flex flex-col border-l border-[#A8182D]/10"
                    >
                        {/* Header */}
                        <div className="p-6 bg-white border-b border-gray-100 flex items-center justify-between">
                            <h2 className="text-2xl font-serif font-bold text-[#3A1E1E] flex items-center gap-2">
                                <ShoppingBag className="text-[#A8182D]" />
                                Tu Pedido
                            </h2>
                            <button
                                onClick={closeCart}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-4">
                                    <ShoppingBag size={64} className="text-gray-300" />
                                    <p className="text-lg font-medium text-gray-600">Tu carrito está vacío</p>
                                    <button onClick={closeCart} className="text-[#A8182D] font-bold underline">
                                        Ir a ver cortes
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative group">
                                        <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[#3A1E1E] leading-tight mb-1">{item.name}</h3>
                                            <p className="text-xs text-gray-500 mb-2">{item.weight}</p>
                                            <div className="flex items-center justify-between">
                                                <p className="font-bold text-[#A8182D]">{item.price}</p>

                                                {/* Quantity Controls */}
                                                {/* Note: Ideally we'd have a dedicated updateQuantity function, 
                            but for this mockup reusing addToCart with logic or just display is fine 
                            Since we don't have update logic in context yet, just display for UI 
                        */}
                                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                                                    <span className="text-xs font-bold px-2">Qty: {item.quantity}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="absolute top-2 right-2 p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {cart.length > 0 && (
                            <div className="p-6 bg-white border-t border-gray-100">
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xl font-bold text-[#3A1E1E]">
                                        <span>Total</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={openCheckout}
                                    className="w-full bg-[#3A1E1E] text-brand-yellow py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    Proceder al Pago
                                    <Lock size={16} />
                                </button>
                                <div className="flex justify-center gap-2 mt-3 opacity-50">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" width={30} height={10} alt="Visa" />
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" width={30} height={10} alt="Mastercard" />
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
