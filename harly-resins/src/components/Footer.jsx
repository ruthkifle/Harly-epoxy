import React from "react";
import "../styles/global.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer">
      <div className="footer-container">
        <div className="footer-logo">HARLY RESINS</div>
        <p className="footer-text">
          Handcrafted with love in Addis Ababa, Ethiopia.
        </p>

        {/* Visual addition for professional look */}
        <div className="footer-socials" style={{ marginTop: '10px', display: 'flex', gap: '15px' }}>
          {/* Icons would go here */}
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Harly Resins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;