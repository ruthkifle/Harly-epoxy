import React, { useState } from 'react'; // Added useState
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm'; // Make sure this file exists in components

const CartDrawer = ({ isOpen, onClose }) => {
    const { cart, addToCart, removeFromCart, total } = useCart();
    const [ step, setStep ] = useState('cart'); // Tracks if we are at 'cart' or 'checkout'

    // Reset to cart view whenever drawer is closed
    const handleClose = () => {
        setStep('cart');
        onClose();
    };

    return (
        <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
            <div className="cart-header">
                <h2>{step === 'cart' ? 'Your Bag' : 'Shipping'}</h2>
                <button className="close-btn" onClick={handleClose}>✕</button>
            </div>

            <div className="cart-body">
                {step === 'cart' ? (
                    <>
                        {cart.length === 0 ? (
                            <p className="empty-msg">Your bag is empty. Let's add some charms!</p>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>{item.price} ETB x {item.quantity}</p>
                                        <div className="qty-controls">
                                            <button onClick={() => removeFromCart(item.id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => addToCart(item)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </>
                ) : (
                    /* Show the form when step is 'checkout' */
                    <CheckoutForm onCancel={() => setStep('cart')} />
                )}
            </div>

            {/* Only show footer if we are on the 'cart' step and have items */}
            {step === 'cart' && cart.length > 0 && (
                <div className="cart-footer">
                    <div className="total-row">
                        <span>Total:</span>
                        <span>{total.toLocaleString()} ETB</span>
                    </div>
                    <button
                        className="checkout-btn"
                        onClick={() => setStep('checkout')}
                    >
                        Proceed to Shipping
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartDrawer;