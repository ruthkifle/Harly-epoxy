import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'; // Use the optimized Hero we built
import '../styles/global.css';

const Home = () => {
    // Reusable Category Card
    const CategoryCard = ({ image, title, href }) => (
        <Link to={href} className="home-card fade-in">
            <div className="product-card category-style">
                <div className="product-image-container">
                    <img src={image} alt={title} loading="lazy" />
                </div>
                <div className="product-info">
                    <h4 style={{ textAlign: 'center', margin: '10px 0' }}>{title}</h4>
                    <span className="view-all-btn" style={{ display: 'block', textAlign: 'center', fontSize: '0.8rem' }}>
                        Explore Collection
                    </span>
                </div>
            </div>
        </Link>
    );

    return (
        <div className="home-page-container">

            <Hero title="HARLY RESIN ART" subtitle="Where art meets creativity!" />

            {/* INTRO SECTION */}
            <div className="featured-products container">
                <h2 className="section-title mt-2">Our Craft</h2>
                <p className="description text-center">
                    Every piece at Harly Resins is handmade using epoxy resin, dried flowers, and premium pigments.
                    From functional kitchenware to personalized charms, we bring your color dreams to life.
                </p>
            </div>

            {/* CATEGORY GRID */}
            <div className="container">
                <div className="product-grid">
                    <CategoryCard href="/catalog?category=keychain" image="/images/homepage/keychain-many.jpg" title="Keychains" />
                    <CategoryCard href="/catalog?category=bookmark" image="/images/homepage/bookmarks.jpg" title="Bookmarks" />
                    <CategoryCard href="/catalog?category=phonestand" image="/images/homepage/phonestand-purple.jpg" title="Phone Stands" />
                    <CategoryCard href="/catalog?category=kitchenware" image="/images/kitchenware/one corner.jpg" title="Kitchenware" />
                    <CategoryCard href="/catalog?category=others" image="/images/homepage/beads.jpg" title="Others" />
                </div>
            </div>

            {/* INFO SECTION: Why Choose Us */}
            <section className="info-cards container">
                <h2 className="section-title">Why Choose Us</h2>
                <div className="cards-row">
                    <div className="card-element">
                        <span className="icon">🎨</span>
                        <h3>Custom Designs</h3>
                        <p>Your favorite colors, flakes, and glitters in every piece.</p>
                    </div>
                    <div className="card-element">
                        <span className="icon">🎁</span>
                        <h3>Perfect Gifts</h3>
                        <p>Handmade art that makes unforgettable, personal gifts.</p>
                    </div>
                    <div className="card-element">
                        <span className="icon">📍</span>
                        <h3>Addis Native</h3>
                        <p>Supporting local creativity and handcrafted quality.</p>
                    </div>
                </div>
            </section>


            <section className="info-section container">
                <h2 className="section-title">How It Works</h2>
                <div className="cards-row">
                    <div className="card-element"><strong>1. Browse</strong><br />Pick your design from our catalog</div>
                    <div className="card-element"><strong>2. Customize</strong><br />Note the product code & colors</div>
                    <div className="card-element"><strong>3. Order</strong><br />Checkout online or DM on Instagram</div>
                    <div className="card-element"><strong>4. Crafting</strong><br />3-5 days to perfect your resin art</div>
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
                <h2 className="section-title">Connect With Us</h2>
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