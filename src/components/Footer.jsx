import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">        <div className="footer-content">
          <div className="footer-section">
            <h3>Softrate</h3>
            <p>Your trusted partner for innovative software solutions and digital transformation.</p>
          </div>          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>            <ul>
              <li><Link to="/services">🌐 Web Development</Link></li>
              <li><Link to="/services">📱 Mobile Apps</Link></li>
              <li><Link to="/services">☁️ Cloud Solutions</Link></li>
              <li><Link to="/services">🎓 Consulting</Link></li>
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
