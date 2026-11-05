function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>🥬 FreshHunt</h2>
          <p>
            Your daily destination for fresh vegetables,
            delicious fruits, and healthy leafy greens.
            Freshness delivered right to your doorstep!
          </p>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3>Shop Categories</h3>
          <ul>
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Leafy Vegetables</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-column">
          <h3>Customer Support</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Get in Touch</h3>
          <p>📧 support@freshhunt.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Hyderabad, India</p>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © 2026 FreshHunt. All Rights Reserved.
        </p>
        <p>Eat Fresh. Stay Healthy! 🌱</p>
      </div>

    </footer>
  );
}

export default Footer;