"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "528112345678"; // Replace with actual number
    const message = "Hola, me gustaría hacer un pedido.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Contactar por WhatsApp"
        >
            <div className="relative">
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <div className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/30 hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
                    <MessageCircle size={32} fill="white" />
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    <p className="text-gray-800 font-bold text-sm">¡Pide por WhatsApp!</p>
                    {/* Tiny triangle */}
                    <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45" />
                </div>
            </div>
        </a>
    );
}
