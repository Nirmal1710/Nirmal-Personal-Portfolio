import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import "./Contact.css"

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            <p className="contact-description">
              Feel free to reach out to me for any questions or opportunities. I'll try my best to get back to you as
              soon as possible.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-text">
                  <h4 className="contact-label">Email</h4>
                  <a href="mailto:alex@example.com" className="contact-value">
                    nirmalsamson1017@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                < FaPhone className="contact-icon" />
                <div className="contact-text">
                  <h4 className="contact-label">Phone</h4>
                  <a href="tel:+11234567890" className="contact-value">
                    +91 9400640939
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <div className="contact-text">
                  <h4 className="contact-label">Location</h4>
                  <span className="contact-value">Alappuzha, Kerala</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" id="name" className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" id="email" className="form-input" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input type="text" id="subject" className="form-input" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Your Message"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                <FaPaperPlane size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

