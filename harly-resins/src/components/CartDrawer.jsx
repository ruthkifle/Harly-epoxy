import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
    const { cart, addToCart, removeFromCart, total } = useCart();

    return (
        <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
            <div className="cart-header">
                <h2>Your Bag</h2>
                <button className="close-btn" onClick={onClose}>✕</button>
            </div>

            <div className="cart-body">
                {cart.length === 0 ? (
                    <p className="empty-msg">Your bag is empty. Let's add some charms!</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h4>{item.name}</h4>
                                <p>{item.price}ETB x {item.quantity}</p>
                                <div className="qty-controls">
                                    <button onClick={() => removeFromCart(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => addToCart(item)}>+</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {cart.length > 0 && (
                <div className="cart-footer">
                    <div className="total-row">
                        <span>Total:</span>
                        <span>{total.toFixed(2)}ETB</span>
                    </div>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartDrawer;