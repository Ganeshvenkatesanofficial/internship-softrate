import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">        <div className="footer-content">
          <div className="footer-section">
            <h3>Softrate</h3>
            <p>Your trusted partner for innovative software solutions and digital transformation.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>            <ul>
              <li><a href="/services">🌐 Web Development</a></li>
              <li><a href="/services">📱 Mobile Apps</a></li>
              <li><a href="/services">☁️ Cloud Solutions</a></li>
              <li><a href="/services">🎓 Consulting</a></li>
            </ul>
          </div>
        </div>        <div className="footer-bottom">
          <p>&copy; 2025 Softrate. All rights reserved. | Built with React & Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
