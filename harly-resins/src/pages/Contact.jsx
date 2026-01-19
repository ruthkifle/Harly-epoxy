import { useState } from 'react';

const Contact = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [ submitted, setSubmitted ] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [ name ]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // In Phase 3, we will send this data to your Node.js backend!
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="container mt-2 fade-in" id="form-success">
                <h2>Thank You, {formData.name}!</h2>
                <p>Your message has been received. We'll get back to you soon.</p>
                <button className="reset-button" onClick={() => setSubmitted(false)}>
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <div className="contact-info container fade-in">
            <h2>Contact Us</h2>
            <p>Have a question or want a custom resin piece? Drop us a message!</p>

            <section className="custom-order">
                <form className="order-form" onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                    />

                    <label>Subject</label>
                    <select name="subject" value={formData.subject} onChange={handleChange}>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Custom Order">Custom Order</option>
                        <option value="Wholesale">Wholesale</option>
                    </select>

                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us what's on your mind..."
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;