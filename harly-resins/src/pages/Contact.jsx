import React, { useState } from 'react';
import Hero from '../components/Hero';
import "../styles/global.css";

const Contact = () => {
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ submitted, setSubmitted ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {

            const response = await fetch("https://formsubmit.co/ajax/harlyresins@gmail.com", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error(error);
            alert("Could not send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page-container">
            {/* 1. HERO SECTION */}
            <Hero title="Contact Us" subtitle="We'd love to hear from you!" />

            <div className="container">
                {/* 2. GET IN TOUCH */}
                <section className="contact-info text-center mt-2">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="mb-2">Reach out through our official channels:</p>

                    <div className="contact-links-list">
                        <h4>Call Us - <a href="tel:0988173131">+251 988-173131</a></h4>
                        <h4>Telegram - <a href="https://t.me/harly_resins" target="_blank" rel="noreferrer">t.me/harly_resins</a></h4>
                        <h4>Instagram - <a href="https://www.instagram.com/harly_resin/" target="_blank" rel="noreferrer">@harly_resin</a></h4>
                        <h4>Email -  <a href="mailto:harlyresins@gmail.com">harlyresins@gmail.com</a></h4>
                    </div>
                </section>

                {/* 3. FAQ SECTION */}
                <section className="faq-section mt-2">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="cards-row">
                        <div className="faq-cards card-element">
                            <h3>Q: Do you take custom orders?</h3>
                            <p>Yes! You can customize colors, styles, and details.</p>
                        </div>
                        <div className="faq-cards card-element">
                            <h3>Q: How long does it take?</h3>
                            <p>Most pieces take 3-5 business days to cure properly.</p>
                        </div>
                        <div className="faq-cards card-element">
                            <h3>Q: Do I need to prepay?</h3>
                            <p>Yes, a 50% prepayment is required to confirm your order.</p>
                        </div>
                    </div>
                </section>


                <section className="custom-order mt-2 mb-2">
                    <h2 className="section-title">Contact Form</h2>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="order-form shadow-light">
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" className="form-input" required />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" className="form-input" required />
                            </div>

                            <div className="form-group">
                                <label>Interested In</label>
                                <select name="product" className="form-input" required>
                                    <option value="">-- Select a Product --</option>
                                    <option value="keychain">Keychain</option>
                                    <option value="bookmark">Bookmark</option>
                                    <option value="phone-stand">Phone Stand</option>
                                    <option value="custom">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" className="form-input" rows="4" required></textarea>
                            </div>

                            <button type="submit" className="confirm-btn w-100" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    ) : (
                        <div className="text-center fade-in">
                            <h3>Message Sent!</h3>
                            <p>We will get back to you shortly.</p>
                            <button className="view-all-btn" onClick={() => setSubmitted(false)}>Send Another</button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Contact;