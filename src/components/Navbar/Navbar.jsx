import React, { useState, useEffect } from 'react';
import './Navbar.css';
import LOGO from '../../assets/LOGO.png';

const Navbar = ({ openContactModal }) => {  // Add this prop
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'industries', 'blogs', 'promotions'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
      setResourcesDropdownOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!resourcesDropdownOpen);
  };

  return (
    <header className="header">
      <div className="container-full">
        <div className="nav-wrapper">
          <div className="logo">
            <img src={LOGO} alt="Qaidyn Partners Logo" className="logo-image" />
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
  <a href="/" className="nav-link">
    Home
  </a>
  
  <div className="nav-dropdown">
    <button 
      className="nav-link dropdown-toggle"
      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
    >
      Services
      <span className={`dropdown-arrow ${servicesDropdownOpen ? 'open' : ''}`}>▼</span>
    </button>
    <div className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
      <a href="/managed-it-services" className="dropdown-item">
        Managed IT Services
      </a>
      <a href="/managed-security-services" className="dropdown-item">
        Managed Security Services
      </a>
      <a href="/cloud-infrastructure" className="dropdown-item">
        Cloud and Infrastructure services
      </a>
      <a href="/security-assessments" className="dropdown-item">
        Security Assessments and compliance
      </a>
      <a href="/data-protection" className="dropdown-item">
        Data Protection and Recovery
      </a>
    </div>
  </div>

  <a href="/industries" className="nav-link">
    Industries
  </a>
  
  <div className="nav-dropdown">
    <button 
      className="nav-link dropdown-toggle"
      onClick={toggleResourcesDropdown}
    >
      Resources
      <span className={`dropdown-arrow ${resourcesDropdownOpen ? 'open' : ''}`}>▼</span>
    </button>
    <div className={`dropdown-menu ${resourcesDropdownOpen ? 'show' : ''}`}>
      <a href="/blogs" className="dropdown-item">
        Blogs
      </a>
      <a href="/guidelines" className="dropdown-item">
        Guidelines
      </a>
      <a href="/case-studies" className="dropdown-item">
        Case Studies
      </a>
    </div>
  </div>

  <button className="btn-contact mobile-contact" onClick={openContactModal}>Contact Us</button>
</nav>
          <button className="btn-contact desktop-contact" onClick={openContactModal}>Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;