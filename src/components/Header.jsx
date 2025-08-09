import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">        <div className="nav-brand">
          <Link to="/">
            <h2>Softrate</h2>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">            <li>
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
