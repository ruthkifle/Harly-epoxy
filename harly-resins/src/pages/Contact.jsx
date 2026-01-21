import { useState } from 'react';
import "../styles/global.css";

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
        <div className="contact-page-container">
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you!</p>
                </div>
            </section>

            <div className="container">
                {/* GET IN TOUCH */}
                <section className="contact-info text-center mt-2">
                    <h1>Get in Touch</h1>
                    <p className="mb-2">If you have any questions or inquiries, reach out through these channels:</p>

                    <div className="contact-links-list">
                        <h4>Call us: <a href="tel:0988173131">+251 988-173131</a></h4>
                        <h4>Telegram: <a href="https://t.me/harly_resins" target="_blank" rel="noreferrer">t.me/harly_resins</a></h4>
                        <h4>Instagram: <a href="https://www.instagram.com/harly_resin/profile" target="_blank" rel="noreferrer">@harly_resin</a></h4>
                        <h4>Email: <a href="mailto:harlyresins@gmail.com">harlyresins@gmail.com</a></h4>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="faq-section mt-2">
                    <h1 className="text-center">Frequently Asked Questions</h1>
                    <div className="cards-row">
                        <div className="faq-cards card-element">
                            <h3>Q: Do you take custom orders?</h3>
                            <p>Yes, we do! You can customize colors, styles, and details.</p>
                        </div>
                        <div className="faq-cards card-element">
                            <h3>Q: How long does it take?</h3>
                            <p>Most custom pieces take 3-5 business days to cure properly.</p>
                        </div>
                        <div className="faq-cards card-element">
                            <h3>Q: Do I need to prepay?</h3>
                            <p>Yes, we require a 50% prepayment to start your custom order.</p>
                        </div>
                    </div>
                </section>

                {/* ORDER FORM */}
                <section className="custom-order mt-2 mb-2">
                    <h2 className="text-center">Place an Order or Send a Comment</h2>

                    {!submitted ? (
                        <form
                            action="https://formsubmit.co/harlyresins@gmail.com"
                            method="POST"
                            className="order-form"
                            enctype="multipart/form-data"
                        >
                            <label>Enter Your Name</label>
                            <input type="text" name="name" required />

                            <label>Phone Number</label>
                            <input type="tel" name="phone" required />

                            <label>What product would you like?</label>
                            <select name="product" required>
                                <option value="">-- Select a Product --</option>
                                <option value="keychain">Keychain</option>
                                <option value="bookmark">Bookmark</option>
                                <option value="tray">Tray</option>
                                <option value="phone-stand">Phone Stand</option>
                                <option value="custom">Other</option>
                            </select>

                            <label>Design Details or Comments</label>
                            <textarea name="details" rows="5" placeholder="Add your details here..." required></textarea>

                            <label>Upload Reference Image (optional)</label>
                            <input type="file" name="file" accept="image/*" />

                            <p className="prepay-note"><strong>Note:</strong> A 50% prepayment is required to confirm your order.</p>
                            <button type="submit" className="submit-btn">Send Email</button>
                        </form>
                    ) : (
                        <div className="form-success text-center">
                            <h2>Thank you!</h2>
                            <p>Your message has been sent. We will contact you soon!</p>
                            <button onClick={() => setSubmitted(false)}>Send another message</button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Contact;