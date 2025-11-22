import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import LOGO from '../../assets/LOGO.png';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [openFAQ, setOpenFAQ] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive IT solutions including Managed IT Services, Cloud Infrastructure, Cybersecurity, Data Protection, and Security Assessments. Our services are designed to meet the unique needs of modern enterprises across various industries."
    },
    {
      question: "How quickly can you respond to support requests?",
      answer: "We provide 24/7 support with response times typically within 15 minutes for critical issues and 2 hours for standard requests. Our dedicated helpdesk team ensures your business operations continue smoothly with minimal downtime."
    },
    {
      question: "Do you provide customized solutions?",
      answer: "Absolutely! We understand that every business has unique requirements. Our team works closely with you to design and implement tailored IT solutions that align perfectly with your business goals, budget, and technical requirements."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in Healthcare, Finance, Education, Manufacturing, Retail, E-commerce, Logistics, and Software Development. Our team has deep industry expertise and understands the specific compliance and operational requirements of each sector."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement multi-layered security protocols including advanced encryption, continuous monitoring, regular security audits, and compliance with industry standards like ISO 27001, SOC 2, and HIPAA. Your data security is our top priority."
    }
  ];

  return (
    <div className="contact-page-container">
      {/* Header */}
      <header className="header">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="container-full">
          <div className="contact-hero-content animate-on-scroll" id="contact-hero">
            <h1 className="contact-hero-title">Get In Touch</h1>
            <p className="contact-hero-subtitle">
              Book an Appointment to treat your teeth right now.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-main-section">
        <div className="container-full">
          <div className="contact-grid">
            {/* Left Side - Contact Info */}
            <div className="contact-info-column animate-on-scroll" id="contact-info">
              {/* Map */}
              <div className="contact-map-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.9537353159042!3d-37.81720974202147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1635745994419!5m2!1sen!2sau"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon office-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3>Office Address</h3>
                    <p>470 St Kilda Road, Melbourne, Vic 3004</p>
                  </div>
                </div>
              </div>

              {/* Office Timings */}
              <div className="contact-info-card">
                <div className="contact-info-icon timing-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h3>Office Timings</h3>
                  <p>Monday - Friday (9:00am to 5pm)</p>
                  <p>Saturday & Sunday (Closed)</p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="contact-info-card">
                <div className="contact-info-icon phone-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h3>Phone Number</h3>
                  <p>0900-78601</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-card">
                <div className="contact-info-icon email-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="white"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h3>Email</h3>
                  <p>info@qaidyn.com</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-column animate-on-scroll" id="contact-form">
              <form className="contact-form-wrapper" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group-half">
                    <label>First name</label>
                    <input type="text" placeholder="First name" required />
                  </div>
                  <div className="form-group-half">
                    <label>Last name</label>
                    <input type="text" placeholder="Last name" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@company.com" required />
                </div>

                <div className="form-group">
                  <label>Phone number</label>
                  <div className="phone-input-wrapper">
                    <select className="country-code">
                      <option value="AU">AU</option>
                      <option value="US">US</option>
                      <option value="UK">UK</option>
                      <option value="IN">IN</option>
                    </select>
                    <input type="tel" placeholder="+61 (555) 000-0000" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Select date</label>
                  <input type="date" defaultValue="2022-12-02" required />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="4" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Book an appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section animate-on-scroll" id="faq-section">
        <div className="container-full">
          <div className="faq-header">
            <h2 className="faq-title">Frequently Ask Question</h2>
            <p className="faq-subtitle">
              Find answers to common questions about our IT services and solutions
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFAQ === index ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="faq-question"
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <div className={`faq-toggle ${openFAQ === index ? 'open' : ''}`}>
                    {openFAQ === index ? '−' : '+'}
                  </div>
                </div>
                <div className={`faq-answer ${openFAQ === index ? 'show' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container-full">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img src={LOGO} alt="Qaidyn Partners Logo" className="footer-logo-image" />
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <a href="#about">About Us</a>
                <a href="#blogs">Blogs</a>
              </div>
              <div className="footer-column">
                <a href="#promotions">Promotions</a>
                <a href="#guidelines">Guidelines</a>
              </div>
              <div className="footer-column">
                <a href="#industries">Industries</a>
                <a href="#cases">Casestudies</a>
              </div>
              <div className="footer-column">
                <a href="#careers">Careers</a>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-location">
                <h4>Location</h4>
                <p>470 St Kilda Road, Melbourne,<br/>Vic 3004</p>
                <p className="footer-email">info@qaidyn.com</p>
              </div>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#4267B2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#405DE6'}} />
                        <stop offset="50%" style={{stopColor: '#C13584'}} />
                        <stop offset="100%" style={{stopColor: '#F56040'}} />
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 Qaidyn Partners. All rights reserved</p>
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;