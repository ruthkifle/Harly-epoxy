import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';

const CartDrawer = ({ isOpen, onClose }) => {
    const { cart, addToCart, decreaseQuantity, total } = useCart();
    const [ step, setStep ] = useState('cart');

    const handleClose = () => {
        setStep('cart');
        onClose();
    };

    return (
        <>

            {isOpen && <div className="filter-overlay" onClick={handleClose}></div>}

            <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
                <div className="cart-header">
                    <h2>{step === 'cart' ? 'Your Bag' : 'Shipping'}</h2>

                    <button className="close-panel-btn" onClick={handleClose}>✕</button>
                </div>

                <div className="cart-body">
                    {step === 'cart' ? (
                        <>
                            {cart.length === 0 ? (
                                <div className="text-center mt-2">
                                    <p className="footer-text">Your bag is empty. Let's add some charms!</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item._id || item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="item-details" style={{ textAlign: 'left', flex: 1 }}>
                                            <h4 style={{ color: 'var(--primary-green)' }}>{item.name}</h4>
                                            <p>{item.price} ETB</p>
                                            <div className="qty-controls">
                                                <button onClick={() => decreaseQuantity(item._id || item.id)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => addToCart(item)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </>
                    ) : (
                        <CheckoutForm onCancel={() => setStep('cart')} />
                    )}
                </div>

                {step === 'cart' && cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="total-row" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '15px' }}>
                            <span>Total:</span>
                            <span>{total.toLocaleString()} ETB</span>
                        </div>
                        <button className="checkout-btn" onClick={() => setStep('checkout')}>
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;