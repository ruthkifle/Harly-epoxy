import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer">
      <div className="footer-container">
        <div className="footer-logo">HARLY RESINS</div>
        <p className="footer-text">
          Handcrafted with love in Addis Ababa, Ethiopia.
        </p>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Harly Resins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
