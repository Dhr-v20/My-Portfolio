// Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      alert("Thanks for your message! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Location</h3>
                <p>Sidhhpur,Patan,Gujarat</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>dhruvprajapati20503@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3>Phone</h3>
                <p>9879587697</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3>Working Hours</h3>
                <p>Mon-Fri: 9AM - 5PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
