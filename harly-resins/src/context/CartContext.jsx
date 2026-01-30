import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add to Cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);

            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // NEW: Decrease Quantity
    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // remove only when quantity reaches 0
        );
    };

    // Remove item completely
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                decreaseQuantity,
                removeFromCart,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
