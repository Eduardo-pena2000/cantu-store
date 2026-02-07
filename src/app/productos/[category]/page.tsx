import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, categories } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
    // Await the params object
    const { category: categoryId } = await params;

    const category = categories.find((c) => c.id === categoryId);
    const categoryProducts = products.filter((p) => p.category === categoryId);

    if (!category) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <div className="bg-brand-blue text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/productos" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={20} /> Volver a Categorías
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Cortes de <span className="text-brand-yellow">{category.name}</span>
                    </h1>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                {categoryProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {categoryProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/producto/${product.slug}`}
                                className="group flex flex-col items-center text-center"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Optional: 'Sale' or 'Sold Out' badges could go here */}
                                </div>

                                {/* Product Info */}
                                <h3 className="text-brand-blue font-bold text-lg leading-tight mb-1 group-hover:underline decoration-2 underline-offset-4">
                                    {product.name}
                                </h3>

                                {product.weight && (
                                    <p className="text-gray-500 text-sm mb-2 font-medium">
                                        {product.weight}
                                    </p>
                                )}

                                <div className="mt-auto">
                                    <p className="text-gray-400 text-xs text-center mb-1">Precio regular</p>
                                    <p className="text-gray-900 font-bold text-lg">
                                        {product.pricePrefix && <span className="text-xs font-normal text-gray-500 mr-1">{product.pricePrefix}</span>}
                                        {product.price}
                                    </p>
                                </div>

                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity w-full">
                                    <span className="block w-full py-2 bg-brand-blue text-white text-sm font-bold rounded hover:bg-brand-blue/90 transition-colors">
                                        Ver producto
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No hay productos disponibles en esta categoría por el momento.</p>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}

export function generateStaticParams() {
    return categories.map((category) => ({
        category: category.id,
    }));
}
