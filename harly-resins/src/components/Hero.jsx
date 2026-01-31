import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Hero = ({ title, subtitle, showBtn = false }) => {
  return (
    <section className="hero-section fadeIn">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        {showBtn && (
          <div>
            <Link to="/catalog" className="view-all-btn">
              Shop the Collection
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;