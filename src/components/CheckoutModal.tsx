"use client";

import { useState } from "react";
import { X, CreditCard, Truck, CheckCircle, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CheckoutModal() {
    const { cart, subtotal, isCheckoutOpen, closeCheckout } = useCart();
    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
    const [loading, setLoading] = useState(false);

    if (!isCheckoutOpen) return null;

    const handlePayment = () => {
        setLoading(true);
        // Simulate processing
        setTimeout(() => {
            setLoading(false);
            setStep(3);
        }, 2000);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[80] flex items-center justify-center p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative"
                >
                    {/* Header */}
                    <div className="bg-[#FDFBF7] p-6 border-b border-gray-100 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold font-serif text-[#3A1E1E]">
                                {step === 3 ? "¡Orden Confirmada!" : "Finalizar Compra"}
                            </h2>
                            {step < 3 && <p className="text-xs text-gray-500 flex items-center gap-1"><Lock size={10} /> Pago Seguro Encriptado</p>}
                        </div>
                        <button onClick={closeCheckout} className="text-gray-400 hover:text-red-500">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {step === 1 && (
                            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                <div className="flex items-center gap-3 mb-6 text-[#A8182D]">
                                    <Truck />
                                    <h3 className="font-bold">Información de Envío</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Nombre" className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:outline-[#A8182D]" />
                                        <input type="text" placeholder="Apellido" className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:outline-[#A8182D]" />
                                    </div>
                                    <input type="text" placeholder="Dirección Completa" className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:outline-[#A8182D]" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Ciudad" className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:outline-[#A8182D]" />
                                        <input type="text" placeholder="Código Postal" className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:outline-[#A8182D]" />
                                    </div>
                                    <input type="tel" placeholder="Teléfono" className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:outline-[#A8182D]" />
                                </div>
                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full mt-8 bg-[#3A1E1E] text-white py-3 rounded-xl font-bold hover:bg-black transition-colors"
                                >
                                    Continuar al Pago
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                <div className="flex items-center gap-3 mb-6 text-[#A8182D]">
                                    <CreditCard />
                                    <h3 className="font-bold">Método de Pago</h3>
                                </div>

                                {/* Fake Credit Card Display */}
                                <div className="mb-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="text-xs opacity-70">Credit Card</span>
                                        <span className="font-bold italic">VISA</span>
                                    </div>
                                    <p className="text-xl tracking-widest font-mono mb-4">**** **** **** 4242</p>
                                    <div className="flex justify-between text-xs opacity-70">
                                        <span>Titular</span>
                                        <span>Expira</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-sm">
                                        <span>NOMBRE DEL CLIENTE</span>
                                        <span>12/28</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <input type="text" placeholder="Número de Tarjeta" className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:outline-[#A8182D]" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="MM / YY" className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:outline-[#A8182D]" />
                                        <input type="text" placeholder="CVC" className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:outline-[#A8182D]" />
                                    </div>
                                    <input type="text" placeholder="Nombre en la Tarjeta" className="w-full bg-gray-50 p-3 rounded-lg border border-gray-200 focus:outline-[#A8182D]" />
                                </div>

                                <div className="mt-6 flex justify-between items-center text-sm font-bold text-gray-700">
                                    <span>Total a pagar:</span>
                                    <span className="text-xl text-[#A8182D]">${subtotal.toFixed(2)}</span>
                                </div>

                                <button
                                    onClick={handlePayment}
                                    disabled={loading}
                                    className="w-full mt-6 bg-[#A8182D] text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors flex justify-center items-center gap-2"
                                >
                                    {loading ? (
                                        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                                    ) : (
                                        "Pagar Ahora"
                                    )}
                                </button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={40} className="text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#3A1E1E] mb-2">¡Pago Confirmado!</h3>
                                <p className="text-gray-500 mb-8">
                                    Gracias por tu compra. Te hemos enviado los detalles a tu correo.
                                    <br /><span className="text-[#A8182D] font-bold">Orden #MX-{Math.floor(Math.random() * 10000)}</span>
                                </p>
                                <button
                                    onClick={closeCheckout}
                                    className="bg-brand-yellow text-brand-blue px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                                >
                                    Seguir Comprando
                                </button>
                            </motion.div>
                        )}
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
