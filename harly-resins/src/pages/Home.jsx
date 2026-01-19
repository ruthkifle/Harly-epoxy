import ProductCard from "../components/ProductCard/ProductCard";


const Home = () => {
    return (
        <div className="hero-section">

            <section className="hero-section">
                <div className="hero-content">
                    <h1>Harly Resins</h1>
                    <p>Handcrafted resin art for your everyday life.</p>
                    <button className="reset-button">Shop Collection</button>
                </div>
            </section>

            <section className="container mt-2">
                <h2>Our Crafts</h2>
                <p className="description">Every piece at Harly Resins is uniquely poured and cured, ensuring no two items are ever the same. From bookmarks to custom keychains, we bring color to your world.</p>
            </section>

            <section className="container mt-2 mb-2">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    <ProductCard
                        image=""
                        name="Keychains"
                        price="300"
                        category="Keychain"
                    />

                    <ProductCard
                        image=""
                        name="Bookmarks"
                        price="350"
                        category="Bookmarks"
                    />

                    <ProductCard
                        image=""
                        name="Phone Stands"
                        price="650"
                        category="Phone Stands"
                    />
                </div>
            </section>

            <section className="info-cards container">
                <div className="card">
                    <div className="card-element">
                        <h3>Handmade</h3>
                        <p>Crafted with precision and care.</p>
                    </div>
                    <div className="card-element">
                        <h3>Eco-Friendly</h3>
                        <p>Using high-quality, safe resins.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;