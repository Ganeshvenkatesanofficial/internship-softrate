import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Our Services</h1>
        <p>Comprehensive software solutions to accelerate your business growth</p>
      </section>      <section className="services-grid">
        <div className="feature-card">
          <h3>🖥️ Enterprise Software Development</h3>
          <p>Scalable enterprise applications built with modern technologies like React, Node.js, and cloud platforms.</p>
          <ul className="service-list">
            <li>Custom CRM & ERP Solutions</li>
            <li>Business Process Automation</li>
            <li>System Integration</li>
          </ul>
        </div>

        <div className="feature-card">
          <h3>🌐 Web Development</h3>
          <p>Modern, responsive websites and progressive web applications that deliver exceptional user experiences.</p>
          <ul className="service-list">
            <li>React & Vue.js Applications</li>
            <li>E-commerce Platforms</li>
            <li>Content Management Systems</li>
          </ul>
        </div>

        <div className="feature-card">
          <h3>📱 Mobile App Development</h3>
          <p>Native and cross-platform mobile applications for iOS and Android with seamless performance.</p>
          <ul className="service-list">
            <li>React Native Apps</li>
            <li>Flutter Development</li>
            <li>Native iOS & Android</li>
          </ul>
        </div>

        <div className="feature-card">
          <h3>☁️ Cloud Solutions</h3>
          <p>Cloud migration, deployment, and optimization services for scalable and secure applications.</p>
          <ul className="service-list">
            <li>AWS & Azure Deployment</li>
            <li>DevOps & CI/CD</li>
            <li>Cloud Architecture</li>
          </ul>
        </div>

        <div className="feature-card">
          <h3>🔧 Maintenance & Support</h3>
          <p>Ongoing maintenance, updates, and technical support to keep your software running smoothly.</p>
          <ul className="service-list">
            <li>24/7 Technical Support</li>
            <li>Regular Updates & Patches</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        <div className="feature-card">
          <h3>🎓 Consulting & Training</h3>
          <p>Expert consulting services and training programs to help your team adopt new technologies.</p>
          <ul className="service-list">
            <li>Technology Consulting</li>
            <li>Team Training Programs</li>
            <li>Code Review & Best Practices</li>
          </ul>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '3rem 0' }}>
        <h2 style={{ marginBottom: '1rem', color: '#667eea' }}>Ready to Get Started?</h2>        <p style={{ marginBottom: '2rem', opacity: '0.9' }}>
          Contact us today to discuss your project requirements and get a custom quote.
        </p>
        <Link to="/contact" className="btn-primary">Request Quote</Link>
      </section>
    </div>
  )
}

export default Services
