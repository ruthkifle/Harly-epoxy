import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const About = () => {
  return (
    <div className="about-page-container">
      <Hero
        title="About Us"
        subtitle="The story behind Harly Resins"
        showBtn={false}
      />

      <div className="container">

        <section className="about-section mt-2 fade-in">
          <h2 className="section-title">Our Story</h2>
          <p className="description-text">
            Harly Resins was founded with a passion for creating beautiful, handmade resin products
            that bring joy and functionality to everyday life. Our journey began with a simple idea:
            to combine art and creativity into unique pieces that reflect individual styles.
          </p>
        </section>


        <section className="about-highlight-box mt-2">
          <div className="card-element">
            <h2>Our Mission & Vision</h2>
            <p className="description-text">
              Our mission is to provide high-quality, customizable resin products that inspire
              creativity and self-expression. We envision a world where art and functionality coexist,
              enhancing the lives of our customers through our handcrafted creations.
            </p>
          </div>
        </section>

        <section className="about-highlight-box mt-2">
          <div className="card-element">
            <h2>How we started</h2>
            <p className="description-text">
              Harly Resins began in the most unexpected way ,inside our college dorm room.
              We didn't have a studio or proper tools; what we had was curiosity and one small resin kit.
              At first, it was just a fun activity between classes. We mixed colors on the floor and
              waited impatiently for each piece to cure. What began as three friends experimenting
              turned into a small handmade brand with a big dream.
            </p>
          </div>
        </section>

        <section className="about-highlight-box mt-2">
          <div className="card-element">
            <h2> Why we started</h2>
            <p className="description-text">
              We started this brand because we saw how something small, a keychain, a bookmark, a tray, could
              become more than just an object. We wanted people to feel a touch of beauty and a moment
              of joy. Every gold flake and dried flower is a tiny expression of creativity.
            </p>
          </div>
        </section>

        <section className="about-highlight-box mt-2 mb-2">
          <div className="card-element">
            <h2>How it's going</h2>
            <p className="description-text">
              Today, we're a growing business run by three students juggling classes and resin pours
              at 2AM. We've expanded from simple keychains to phone stands, beads, and more, all handmade with the same excitement we had on day one. We're learning, improving, experimenting with new molds and colors, and slowly turning our little dream into something real. And the best part?
              <strong> We're just getting started!</strong>
            </p>
          </div>
        </section>


        <div className="text-center mb-2">
          <Link to="/catalog" className="view-all-btn">Browse our Creations</Link>
        </div>
      </div>
    </div>
  );
};

export default About;