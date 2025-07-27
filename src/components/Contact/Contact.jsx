import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_is69vhv',       // Service ID
      'template_2tdh54r',      // Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      's1kIe2XJH7TgTUKR2'        // Public Key 
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 3000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>kgowthamprasath@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>9486990826</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Udumalpet, Tiruppur, Tamil Nadu</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <h3>Availability</h3>
                <p>Open to new opportunities</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {isSubmitted && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
