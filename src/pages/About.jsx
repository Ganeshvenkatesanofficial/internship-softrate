function About() {
  return (
    <div className="container">      <section className="hero">
        <h1>About Softrate</h1>
        <p>Leading software development company delivering innovative solutions since 2020</p>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Our Story</h2>
          <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Our Mission</h3>
          <p style={{ lineHeight: '1.8', opacity: '0.9' }}>
            At Softrate, we're dedicated to transforming businesses through innovative software solutions. 
            We believe in creating technology that not only meets today's needs but anticipates tomorrow's challenges.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Why Choose Softrate?</h3>
          <ul style={{ lineHeight: '1.8', opacity: '0.9' }}>
            <li><strong>Expert Team:</strong> Skilled developers with 5+ years of experience</li>
            <li><strong>Modern Technology:</strong> Latest frameworks and development practices</li>
            <li><strong>Client-Focused:</strong> Tailored solutions for your specific needs</li>
            <li><strong>Quality Assurance:</strong> Rigorous testing and code review processes</li>
            <li><strong>Ongoing Support:</strong> Comprehensive maintenance and support services</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Our Expertise</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
              <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Frontend</h4>
              <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>React, Vue.js, Angular, TypeScript</p>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
              <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Backend</h4>
              <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>Node.js, Python, Java, .NET</p>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
              <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Mobile</h4>
              <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>React Native, Flutter, iOS, Android</p>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
              <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Cloud</h4>
              <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>AWS, Azure, Google Cloud, Docker</p>
            </div>
          </div>
        </div>        <div>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Our Values</h3>
          <p style={{ lineHeight: '1.8', opacity: '0.9' }}>
            Innovation, Quality, and Client Success drive everything we do. We believe in building 
            long-term partnerships with our clients and delivering solutions that exceed expectations. 
            Our commitment to continuous learning ensures we stay ahead of industry trends and 
            provide cutting-edge solutions.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
