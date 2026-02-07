"use client";

import { Facebook, Instagram, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-blue text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand & Social */}
                    <div>
                        <div className="flex flex-col leading-tight mb-4">
                            <span className="text-2xl font-bold tracking-wide">EL OFERTÓN</span>
                            <span className="text-sm text-brand-yellow font-semibold tracking-wider">DE CANTÚ</span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-xs">
                            La carnicería de confianza para tus asados y comidas diarias. Calidad y sabor en cada corte.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-blue transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-yellow hover:text-brand-blue transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-brand-yellow">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Productos</a></li>
                            <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Nosotros</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-brand-yellow">Contáctanos</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-brand-yellow mt-1 flex-shrink-0" size={20} />
                                <span className="text-gray-300">Av. Principal #123, Col. Centro, Ciudad, Estado, CP 12345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-brand-yellow flex-shrink-0" size={20} />
                                <span className="text-gray-300">(81) 1234-5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="text-brand-yellow flex-shrink-0" size={20} />
                                <span className="text-gray-300">Lun - Sab: 8:00 AM - 8:00 PM <br /> Dom: 9:00 AM - 2:00 PM</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} El Ofertón de Cantú. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
