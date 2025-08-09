import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for contacting Softrate! We\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container">      <section className="hero">
        <h1>Contact Softrate</h1>
        <p>Ready to start your next project? Get in touch with our expert team</p>
      </section>

      <section style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div>
            <label htmlFor="name" style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '500' 
            }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'inherit',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label htmlFor="email" style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '500' 
            }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'inherit',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label htmlFor="message" style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '500' 
            }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'inherit',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
