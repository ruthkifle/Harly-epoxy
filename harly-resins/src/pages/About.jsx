import React from 'react';
import '../styles/global.css';

const About = () => {
  return (
    <div className="about-page-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Learn more about Harly Resins</p>
        </div>
      </section>

      <div className="container">
        {/* OUR STORY */}
        <section className="about-section mt-2">
          <h1>Our Story</h1>
          <p className="description-text">
            Harly Resins was founded with a passion for creating beautiful, handmade resin products
            that bring joy and functionality to everyday life. Our journey began with a simple idea:
            to combine art and creativity into unique pieces that reflect individual styles.
          </p>
        </section>

        {/* MISSION & VISION */}
        <section className="about-section mt-2">
          <h1>Our Mission & Vision</h1>
          <p className="description-text">
            Our mission is to provide high-quality, customizable resin products that inspire
            creativity and self-expression. We envision a world where art and functionality coexist,
            enhancing the lives of our customers through our handcrafted creations.
          </p>
        </section>

        {/* HOW WE STARTED */}
        <section className="about-section mt-2">
          <h1>How we started</h1>
          <p className="description-text">
            Harly Resins began in the most unexpected way — inside our college dorm room.
            We didn't have a studio or proper tools; what we had was curiosity and one small resin kit.
            At first, it was just a fun activity between classes. We mixed colors on the floor and
            waited impatiently for each piece to cure. What began as three friends experimenting
            turned into a small handmade brand with a big dream.
          </p>
        </section>

        {/* WHY WE STARTED */}
        <section className="about-section mt-2">
          <h1>Why we started</h1>
          <p className="description-text">
            We started this brand because we saw how something small—a keychain, a bookmark, a tray—could
            become more than just an object. We wanted people to feel a touch of beauty and a moment
            of joy. Every gold flake and dried flower is a tiny expression of creativity.
          </p>
        </section>

        {/* HOW IT'S GOING */}
        <section className="about-section mt-2 mb-2">
          <h1>How it's going</h1>
          <p className="description-text">
            Today, we're a growing business run by three students juggling classes and resin pours
            at 2AM. We've expanded from simple keychains to phone stands, beads, and more.
            We’re just getting started!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;