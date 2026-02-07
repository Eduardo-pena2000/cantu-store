export interface Product {
    id: number;
    name: string;
    slug: string; // Restored
    price: string;
    pricePrefix?: string; // Restored
    category: string;
    image: string;
    weight: string;
    description?: string; // Kept (short desc for carousel)
    longDescription?: string; // Kept (long desc for details)
}

export const products: Product[] = [
    {
        id: 1,
        name: "Ribeye High Choice",
        slug: "ribeye-high-choice",
        price: "$389.00",
        pricePrefix: "Desde",
        image: "/images/ribeye.jpg",
        category: "res",
        weight: "700 g - 900 g",
        description: "El rey de los cortes. Marmoleo abundante.",
        longDescription: "El rey de los cortes. Nuestro Ribeye High Choice destaca por su abundante marmoleo..."
    },
    {
        id: 2,
        name: "New York Prime",
        slug: "new-york-prime",
        price: "$345.00",
        pricePrefix: "Desde",
        image: "/images/newyork.jpg",
        category: "res",
        weight: "350g - 400g",
        description: "Textura firme y sabor robusto.",
        longDescription: "Textura firme y sabor robusto. Ideal para quienes buscan..."
    },
    {
        id: 3,
        name: "Tomahawk con Hueso",
        slug: "tomahawk",
        price: "$950.00",
        pricePrefix: "Pieza",
        image: "/images/tomahawk.jpg",
        category: "res",
        weight: "1.2kg - 1.5kg",
        description: "Impresionante presentación con hueso largo.",
        longDescription: "Impresionante presentación con hueso largo..."
    },
    {
        id: 4,
        name: "Picanha Angus",
        slug: "picanha-angus",
        price: "$280.00",
        pricePrefix: "Por Kg",
        image: "/images/picanha.jpg",
        category: "res",
        weight: "1kg - 1.2kg",
        description: "Corte brasileño por excelencia.",
        longDescription: "Corte brasileño por excelencia..."
    },
    {
        id: 5,
        name: "Porterhouse",
        slug: "porterhouse",
        price: "$890.00",
        pricePrefix: "Pieza",
        image: "/images/porterhouse.jpg",
        category: "res",
        weight: "900g - 1.1kg",
        description: "Lo mejor de dos mundos: Filete y New York.",
        longDescription: "Lo mejor de dos mundos..."
    },
    {
        id: 6,
        name: "Aguja Norteña",
        slug: "aguja-nortena",
        price: "$210.00",
        pricePrefix: "Por Kg",
        image: "/images/aguja.jpg",
        category: "res",
        weight: "500g - 600g",
        description: "El clásico del norte. Jugoso.",
        longDescription: "El clásico del norte..."
    },
    // Rest of products (Pork, Chicken, Accessories)...
    {
        id: 7,
        name: "Costilla de Puerco",
        slug: "costilla-puerco",
        price: "$145.00",
        pricePrefix: "Por Kg",
        weight: "1 kg",
        category: "puerco",
        image: "https://loremflickr.com/800/600/raw,pork,ribs?lock=6",
        longDescription: "Costillitas cargadas de carne...",
        description: "Costillitas cargadas de carne."
    },
    {
        id: 8,
        name: "Chuleta Ahumada",
        slug: "chuleta-ahumada",
        price: "$130.00",
        pricePrefix: "Por Kg",
        weight: "1 kg",
        category: "puerco",
        image: "https://loremflickr.com/800/600/raw,pork,chop?lock=7",
        longDescription: "Sabor ahumado tradicional...",
        description: "Sabor ahumado tradicional."
    },
    {
        id: 9,
        name: "Pechuga de Pollo",
        slug: "pechuga-pollo",
        price: "$110.00",
        pricePrefix: "Por Kg",
        weight: "1 kg",
        category: "pollo",
        image: "https://loremflickr.com/800/600/raw,chicken,breast?lock=8",
        longDescription: "Pechuga limpia, sin hueso...",
        description: "Pechuga limpia, sin hueso."
    },
    {
        id: 10,
        name: "Pierna y Muslo",
        slug: "pierna-muslo",
        price: "$65.00",
        pricePrefix: "Por Kg",
        weight: "1 kg",
        category: "pollo",
        image: "https://loremflickr.com/800/600/raw,chicken,legs?lock=9",
        longDescription: "La parte más jugosa del pollo...",
        description: "La parte más jugosa del pollo."
    },
    {
        id: 11,
        name: "Carbón Mesquite 3kg",
        slug: "carbon-mesquite",
        price: "$85.00",
        pricePrefix: "",
        weight: "3 kg",
        category: "asador",
        image: "https://loremflickr.com/800/600/charcoal,bag?lock=10",
        longDescription: "El combustible esencial...",
        description: "El combustible esencial."
    },
    {
        id: 12,
        name: "Salsas Artesanales",
        slug: "salsas-artesanales",
        price: "$55.00",
        pricePrefix: "c/u",
        weight: "350 ml",
        category: "asador",
        image: "https://loremflickr.com/800/600/mexican,salsa,jar?lock=11",
        longDescription: "El toque final...",
        description: "El toque final."
    }
];

export const offers = [
    {
        id: 101,
        name: "Paquete Parrillero Familiar",
        slug: "paquete-parrillero",
        description: "2kg Sirloin + 1kg Salchicha + Tortillas + Salsa",
        originalPrice: "$850.00",
        salePrice: "$699.00",
        image: "https://loremflickr.com/800/600/bbq,party?lock=20",
    },
    {
        id: 102,
        name: "Jueves de Costilla",
        slug: "jueves-costilla",
        description: "Costilla Cargada de Res marinada",
        originalPrice: "$189.00 / kg",
        salePrice: "$149.00 / kg",
        image: "https://loremflickr.com/800/600/ribs,bbq?lock=21",
    },
    {
        id: 103,
        name: "Combo Hamburguesa",
        slug: "combo-hamburguesa",
        description: "Carne Molida Premium + Pan Artesanal (Pack 4)",
        originalPrice: "$220.00",
        salePrice: "$180.00",
        image: "https://loremflickr.com/800/600/burger,meat?lock=22",
    }
];

export const categories = [
    { id: 'res', name: 'Res', image: 'https://loremflickr.com/800/600/beef,meat?lock=12' },
    { id: 'puerco', name: 'Puerco', image: 'https://loremflickr.com/800/600/pork,meat?lock=13' },
    { id: 'pollo', name: 'Pollo', image: 'https://loremflickr.com/800/600/chicken,meat?lock=14' },
    { id: 'asador', name: 'Complementos', image: 'https://loremflickr.com/800/600/bbq,grill?lock=15' },
];
