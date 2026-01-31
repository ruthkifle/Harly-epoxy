import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState(() => {
        const savedCart = localStorage.getItem("harly_cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem("harly_cart", JSON.stringify(cart));
    }, [ cart ]);

    const addToCart = (product) => {
        const productId = product._id || product.id;

        setCart((prevCart) => {
            const existing = prevCart.find((item) => (item._id || item.id) === productId);

            if (existing) {
                return prevCart.map((item) =>
                    (item._id || item.id) === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [ ...prevCart, { ...product, quantity: 1 } ];
        });
    };

    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    (item._id || item.id) === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => (item._id || item.id) !== id));
    };


    const clearCart = () => setCart([]);

    const total = cart.reduce(
        (sum, item) => sum + (parseFloat(item.price) || 0) * item.quantity,
        0
    );


    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            decreaseQuantity,
            removeFromCart,
            clearCart,
            total,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);