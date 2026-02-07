import { products } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
    // Filter for Beef (Res) products as requested
    const beefProducts = products.filter(p => p.category === 'res');

    return (
        <main className="min-h-screen flex flex-col bg-[#FDFBF7]"> {/* Light cream background like the screenshot */}
            <Navbar />

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-serif font-bold text-[#3A1E1E] mb-2"> {/* Dark Brown/Red text */}
                        Cortes de res
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {beefProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/producto/${product.slug}`}
                            className="group flex flex-col items-center text-center"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] mb-6 overflow-visible"> {/* overflow-visible for hover effects if needed */}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-500 transform"
                                />
                            </div>

                            {/* "Ver Producto" Button - Pill Shape, Red/Brown */}
                            <div className="mb-6">
                                <span className="inline-block px-8 py-3 bg-[#A8182D] text-white text-xs font-bold tracking-widest rounded-full uppercase transition-transform hover:scale-105 shadow-md">
                                    Ver producto
                                </span>
                            </div>

                            {/* Product Info */}
                            <div className="w-full text-left px-2">
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">CANTÚ</p>
                                <h3 className="text-[#3A1E1E] font-serif font-bold text-xl mb-2 leading-tight group-hover:text-[#A8182D] transition-colors">
                                    {product.name}
                                </h3>

                                {product.weight && (
                                    <p className="text-gray-500 text-sm mb-2 font-light">
                                        {product.weight}
                                    </p>
                                )}

                                <p className="text-[#A8182D] font-medium text-sm"> {/* Gold/Reddish price color */}
                                    {product.pricePrefix && <span className="text-gray-400 font-normal mr-1">{product.pricePrefix}</span>}
                                    {product.price}
                                    <span className="text-[10px] align-top relative -top-1 ml-0.5">00</span> {/* Cents styling match */}
                                </p>

                                {/* Fake Stars for aesthetic match */}
                                <div className="flex gap-0.5 mt-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
