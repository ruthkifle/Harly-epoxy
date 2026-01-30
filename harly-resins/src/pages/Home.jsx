import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Home = () => {
    // Reusable card for the home product categories
    const HomeCard = ({ image, description, code, href }) => (
        <Link
            to={href}
            className="home-card"
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <div className="product-card">
                <img src={image} alt={code} loading="lazy" />
                <div className="description">
                    <h4>{code}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );

    return (
        <div className="home-page-container">

            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>HARLY RESINS</h1>
                    <p>Where art meets creativity!</p>
                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <div className="featured-products container">
                <h1 className="text-center mt-2">Featured Products</h1>
                <section className="description text-center">
                    <p>
                        Every piece at Harly Resins is handmade using epoxy resin, dried flowers, glitters, foil flakes and pigments. We create keychains, bookmarks, phone stands, trays and more - all customizable to your favorite colors.
                    </p>
                </section>
            </div>

            {/* CATEGORY GRID */}
            <div className="container">
                <div className="product-grid">
                    <HomeCard
                        href="/catalog#keychain"
                        image="/images/homepage/keychain-many.jpg"
                        code="Keychains"
                    />
                    <HomeCard
                        href="/catalog#bookmark"
                        image="/images/homepage/bookmarks.jpg"
                        code="Bookmarks"
                    />
                    <HomeCard
                        href="/catalog#phonestand"
                        image="/images/homepage/phonestand-purple.jpg"
                        code="Phone Stands"
                    />
                    <HomeCard
                        href="/catalog#kitchenware"
                        image="/images/kitchenware/one corner.jpg"
                        code="Kitchenware"
                    />
                    <HomeCard
                        href="/catalog#others"
                        image="/images/homepage/beads.jpg"
                        code="Others"
                    />
                </div>
            </div>

            {/* WHY CHOOSE US */}
            <section className="info-cards container">
                <h1>Why Choose Us</h1>
                <p className="description text-center">
                    Every piece we make is designed to feel personal, meaningful,
                    and made just for you.
                </p>

                <div className="cards-row">
                    <div className="card-element">
                        <h3>Custom Colors & Styles</h3>
                        Choose your favorite colors, flakes, glitter and details.
                    </div>
                    <div className="card-element">
                        <h3>Perfect for Gifting</h3>
                        Handmade pieces that make unforgettable gifts.
                    </div>
                    <div className="card-element">
                        <h3>Locally Made in Addis Ababa</h3>
                        Support a small creative brand building its dream.
                    </div>
                    <div className="card-element">
                        <h3>Made for Everyday Use</h3>
                        Beautiful and practical designs for daily life.
                    </div>
                </div>
            </section>

            {/* HOW TO ORDER */}
            <section className="info-section container">
                <h1 className="mt-2">How To Order</h1>
                <p className="description text-center">
                    Getting your custom resin item is easy — just follow these steps:
                </p>

                <div className="cards-row">
                    <div className="card-element">1. Choose your category</div>
                    <div className="card-element">2. Pick your favorite design</div>
                    <div className="card-element">3. Note the product code</div>
                    <div className="card-element">4. Tell us your color preferences</div>
                    <div className="card-element">5. Send your order on Telegram or Instagram</div>
                    <div className="card-element">6. Pay 50% pre-payment</div>
                    <div className="card-element">7. Place order 3–5 days early</div>
                    <div className="card-element">8. Final photos before delivery</div>
                </div>
            </section>

            {/* RESIN CARE */}
            <section className="info-section container">
                <h1 className="mt-2">Resin Care Steps</h1>
                <p className="description text-center">
                    Keep your items beautiful with these simple care tips:
                </p>

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
                    <a href="tel:0988173131">
                        <img src="/images/icons/telephone.png" alt="Phone" />
                    </a>
                    <a href="https://t.me/harly_resins" target="_blank" rel="noreferrer">
                        <img src="/images/icons/telegram (1).png" alt="Telegram" />
                    </a>
                    <a href="https://www.instagram.com/harly_resin" target="_blank" rel="noreferrer">
                        <img src="/images/icons/instagram (1).png" alt="Instagram" />
                    </a>
                    <a href="https://www.tiktok.com/@harly_resinart" target="_blank" rel="noreferrer">
                        <img src="/images/icons/tik-tok (1).png" alt="Tiktok" />
                    </a>
                    <a href="https://www.facebook.com/share/17htsbuqjS/" target="_blank" rel="noreferrer">
                        <img src="/images/icons/facebook (1).png" alt="Facebook" />
                    </a>
                    <a href="mailto:harlyresins@gmail.com">
                        <img src="/images/icons/communication.png" alt="Email" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
