import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CheckoutForm = ({ onCancel }) => {
    const { cart, total } = useCart();
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

        const orderDetails = {
            customer: formData,
            items: cart,
            total: total
        };

        try {
            const response = await fetch("http://localhost:4000/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderDetails),
            });

            const data = await response.json();

            if (data.success) {
                alert(`Order Placed Successfully! Your Order ID is #${data.orderId}`);
                // You can clear the cart here or redirect the user
            }
        } catch (error) {
            console.error("Error submitting order:", error);
            alert("Server is down. Please try again later.");
        }
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>Shipping Details</h3>
            <input
                type="text" name="fullName" placeholder="Full Name"
                required onChange={handleChange}
            />
            <input
                type="tel" name="phone" placeholder="Phone Number (09...)"
                required onChange={handleChange}
            />
            <select name="city" onChange={handleChange}>
                <option value="Addis Ababa">Addis Ababa</option>
                <option value="Other">Other City</option>
            </select>
            <textarea
                name="address" placeholder="Specific delivery area (e.g. Bole, Ayat...)"
                required onChange={handleChange}
            ></textarea>

            <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={onCancel}>Back</button>
                <button type="submit" className="confirm-btn">Confirm Order</button>
            </div>
        </form>
    );
};

export default CheckoutForm;