import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "../components/ProductCard";
import '../styles/global.css';

const Home = () => {
    return (
        <div className="home-page-container">
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>HARLY RESINS</h1>
                    <p>Where art meets creativity!!</p>
                </div>
            </section>

            {/* FEATURED PRODUCTS INTRODUCTION */}
            <div className="featured-products container">
                <h1 className="text-center mt-2">Featured Products</h1>
                <section className="description text-center">
                    <p>
                        Every piece at Harly Resins is handmade using epoxy resin,
                        dried flowers, glitters, foil flakes and pigments. We create keychains, bookmarks, phone stands,
                        trays and more - all customizable to your favorite colors.
                    </p>
                </section>
            </div>

            {/* PRODUCT GRID */}
            <div className="container">
                <div className="product-grid">
                    <ProductCard
                        image="/images/homepage/keychain-many.jpg"
                        name="Keychains"
                        link="/catalog#keychain"
                    />
                    <ProductCard
                        image="/images/homepage/bookmarks.jpg"
                        name="Bookmarks"
                        link="/catalog#bookmark"
                    />
                    <ProductCard
                        image="/images/homepage/phonestand-purple.jpg"
                        name="Phone Stands"
                        link="/catalog#phonestand"
                    />
                    <ProductCard
                        image="/images/kitchenware/one corner.jpg"
                        name="Kitchenware"
                        link="/catalog#kitchenware"
                    />
                    <ProductCard
                        image="/images/homepage/beads.jpg"
                        name="Others"
                        link="/catalog#other"
                    />
                </div>
            </div>

            {/* WHY CHOOSE US SECTION */}
            <section className="info-cards container">
                <h1>Why Choose Us</h1>
                <p className="description text-center">Every piece we make is designed to feel personal, meaningful, and made just for you.</p>

                <div className="cards-row">
                    <div className="card-element">
                        <h3>Custom colors & styles</h3>
                        Custom colors & styles - You can choose your favorite colors, flakes, and details to match your vibe or gift idea
                    </div>
                    <div className="card-element">
                        <h3>Perfect for gifting</h3>
                        Our keychains, bookmarks, trays and plates make thoughtful, unique gifts for any occasion
                    </div>
                    <div className="card-element">
                        <h3>Locally made in Addis Ababa</h3>
                        You're supporting a small creative brand and helping us grow our dream.
                    </div>
                    <div className="card-element">
                        <h3>Made to be used every day</h3>
                        Our designs are beautiful, but also practical, so you can enjoy them in your daily life.
                    </div>
                </div>
            </section>

            {/* HOW TO ORDER SECTION */}
            <section className="info-section container bg-light">
                <h1 className="mt-2">How To Order</h1>
                <p className="description text-center">Getting your custom resin item is easy — just follow these steps.</p>

                <div className="cards-row">
                    <div className="card-element">1. Choose the product category (Keychains, Bookmarks, Plates, etc.)</div>
                    <div className="card-element">2. Pick your favorite design from our catalog</div>
                    <div className="card-element">3. Note the product code or take a screenshot</div>
                    <div className="card-element">4. Tell us your preferred colors or custom details</div>
                    <div className="card-element">5. Send your order through Telegram, Instagram or contact us directly</div>
                    <div className="card-element">6. Pay 50% prepayment to confirm the order</div>
                    <div className="card-element">7. Place your order 3-5 days early so we can craft it with care</div>
                    <div className="card-element">8. Once your piece is ready, we'll send final photos before delivery</div>
                </div>
            </section>

            {/* RESIN CARE SECTION */}
            <section className="info-section container">
                <h1 className="mt-2">Resin Care Steps</h1>
                <p className="description text-center">To keep your resin items looking beautiful and lasting long, follow these simple care tips:</p>

                <div className="cards-row">
                    <div className="card-element">Avoid extreme heat</div>
                    <div className="card-element">Clean with soft cloth</div>
                    <div className="card-element">Avoid scratching</div>
                    <div className="card-element">Store properly</div>
                    <div className="card-element">Avoid harsh chemicals</div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <div className="contact container text-center mb-2">
                <h1>Contact Us</h1>
                <div className="contact-icons">
                    <a href="tel:0988173131"> <img src="/images/icons/telephone.png" alt="Phone" /></a>
                    <a href="https://t.me/harly_resins" target="_blank" rel="noreferrer"> <img src="/images/icons/telegram (1).png" alt="Telegram" /></a>
                    <a href="https://www.instagram.com/harly_resin/profile" target="_blank" rel="noreferrer"> <img src="/images/icons/instagram (1).png" alt="Instagram" /></a>
                    <a href="https://www.tiktok.com/@harly_resinart" target="_blank" rel="noreferrer"> <img src="/images/icons/tik-tok (1).png" alt="Tiktok" /></a>
                    <a href="https://www.facebook.com/share/17htsbuqjS/" target="_blank" rel="noreferrer"> <img src="/images/icons/facebook (1).png" alt="Facebook" /></a>
                    <a href="mailto:harlyresins@gmail.com"> <img src="/assets/images/icons/communication.png" alt="Email" /></a>
                </div>
            </div>
        </div>
    );
};

export default Home;