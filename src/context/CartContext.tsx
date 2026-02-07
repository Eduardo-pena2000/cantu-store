"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/lib/data";

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    isCheckoutOpen: boolean;
    openCheckout: () => void;
    closeCheckout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const addToCart = (product: Product, quantity: number) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity }];
        });
        setIsOpen(true); // Auto-open cart when adding item
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Calculate subtotal helper
    const subtotal = cart.reduce((acc, item) => {
        // Remove non-numeric chars from price string "$389.00" -> "389.00"
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return acc + (price * item.quantity);
    }, 0);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    // Checkout State
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const openCheckout = () => {
        setIsOpen(false); // Close drawer
        setIsCheckoutOpen(true);
    };
    const closeCheckout = () => setIsCheckoutOpen(false);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            totalItems,
            subtotal,
            isOpen,
            openCart,
            closeCart,
            isCheckoutOpen,
            openCheckout,
            closeCheckout
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
