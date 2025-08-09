import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Welcome to Softrate</h1>
        <p>Your trusted partner for innovative software solutions and digital transformation</p>
        <Link to="/services" className="btn-primary">Explore Our Services</Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>💻 Custom Software Development</h3>
          <p>Tailored software solutions designed to meet your unique business requirements and drive growth.</p>
        </div>
        <div className="feature-card">
          <h3>🌐 Web Development</h3>
          <p>Modern, responsive websites and web applications built with cutting-edge technologies.</p>
        </div>
        <div className="feature-card">
          <h3>📱 Mobile App Development</h3>
          <p>Native and cross-platform mobile applications for iOS and Android devices.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
