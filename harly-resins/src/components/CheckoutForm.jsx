import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CheckoutForm = ({ onCancel }) => {
    const { cart, total, setCart } = useCart(); // Added setCart to clear items
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ formData, setFormData ] = useState({
        fullName: '',
        phone: '',
        city: 'Addis Ababa',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [ e.target.name ]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const orderDetails = {
            customer: formData,
            items: cart,
            total: total,
            date: new Date().toISOString() // Professional touch for the database
        };

        try {
            const response = await fetch("http://localhost:4000/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderDetails),
            });

            const data = await response.json();

            if (data.success) {
                alert(`Order Placed Successfully! Your Order ID is #${data.orderId}`);

                // CRITICAL FOR DEMO: Clear the cart and reset the app state
                if (typeof setCart === 'function') {
                    setCart([]); // Clear the cart context
                }
                window.location.href = "/"; // Redirect to home or close drawer
            }
        } catch (error) {
            console.error("Error submitting order:", error);
            alert("Server is down. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="checkout-form fadeIn" onSubmit={handleSubmit}>
            <h3 style={{ color: 'var(--primary-green)', marginBottom: '15px' }}>Shipping Details</h3>
            <input
                type="text" name="fullName" placeholder="Full Name"
                required onChange={handleChange}
                className="form-input"
            />
            <input
                type="tel" name="phone" placeholder="Phone Number (09...)"
                required onChange={handleChange}
                className="form-input"
            />
            <select name="city" onChange={handleChange} className="form-input">
                <option value="Addis Ababa">Addis Ababa</option>
                <option value="Other">Other City</option>
            </select>
            <textarea
                name="address" placeholder="Specific delivery area (e.g. Bole, Ayat...)"
                required onChange={handleChange}
                className="form-input"
            ></textarea>

            <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={onCancel} disabled={isSubmitting}>
                    Back
                </button>
                <button type="submit" className="confirm-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Confirm Order"}
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;