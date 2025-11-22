import React, { useState, useEffect } from 'react';
import './Navbar.css';
import LOGO from '../../assets/LOGO.png';

const Navbar = ({ openContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  // Service submenu data
  const serviceSubmenus = {
    'managed-it': [
      { name: 'Helpdesk', link: '/services/helpdesk' },
      { name: 'Devices setup and configuration', link: '/services/devices-setup' },
      { name: 'Patch Management', link: '/services/patch-management' },
      { name: 'Network Management', link: '/services/network-management' },
      { name: 'Backup', link: '/services/backup' },
      { name: 'Vendor Co-ordination', link: '/services/vendor-coordination' }
    ],
    'managed-security': [
      { name: 'Threat Detection', link: '/services/threat-detection' },
      { name: 'End Point and Network protection', link: '/services/endpoint-protection' },
      { name: 'Incident Response', link: '/services/incident-response' },
      { name: 'Continuous Security Monitoring', link: '/services/security-monitoring' }
    ],
    'cloud-infrastructure': [
      { name: 'Cloud Setup and Migration', link: '/services/cloud-migration' },
      { name: 'Virtual Private Servers', link: '/services/vps' },
      { name: 'Virtual Desktops', link: '/services/virtual-desktops' },
      { name: 'IT Infrastructure and planning', link: '/services/infrastructure-planning' }
    ],
    'security-assessments': [
      { name: 'ISO 27001 Assessment and Audit', link: '/services/iso-27001' },
      { name: 'iRAP Assessment and Audit', link: '/services/irap' },
      { name: 'SOC2 Assessment and Audit', link: '/services/soc2' },
      { name: 'Risk Management', link: '/services/risk-management' },
      { name: 'Policy Development', link: '/services/policy-development' },
      { name: 'Security Awareness Training', link: '/services/security-training' }
    ],
    'data-protection': [
      { name: 'Backup', link: '/services/data-backup' },
      { name: 'Disaster Recovery', link: '/services/disaster-recovery' },
      { name: 'Ransomware Recovery', link: '/services/ransomware-recovery' },
      { name: 'Encryption', link: '/services/encryption' }
    ]
  };

  // RESET EVERYTHING
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setOpenSubmenus({});
  };

  // Close all when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeAllMenus();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSubmenu = (submenuKey) => {
    setOpenSubmenus(prev => {
      // If the same submenu is clicked, close it
      if (prev[submenuKey]) {
        return {};
      }
      // Otherwise close all and open only this one
      return { [submenuKey]: true };
    });
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeAllMenus();
    } else {
      setMobileMenuOpen(true);
    }
  };

  // Toggle Services Dropdown - explicit open/close
  const toggleServicesDropdown = () => {
    if (servicesDropdownOpen) {
      setServicesDropdownOpen(false);
      setOpenSubmenus({});
    } else {
      setServicesDropdownOpen(true);
      setResourcesDropdownOpen(false);
      setOpenSubmenus({});
    }
  };

  // Toggle Resources Dropdown - explicit open/close
  const toggleResourcesDropdown = () => {
    if (resourcesDropdownOpen) {
      setResourcesDropdownOpen(false);
    } else {
      setResourcesDropdownOpen(true);
      setServicesDropdownOpen(false);
      setOpenSubmenus({});
    }
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
            <a href="/" className="nav-link" onClick={closeAllMenus}>
              Home
            </a>
            
            <div className="nav-dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={toggleServicesDropdown}
              >
                Services
                <span className={`dropdown-arrow ${servicesDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              <div className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                <div className="dropdown-item has-submenu" onClick={() => toggleSubmenu('managed-it')}>
                  Managed IT Services
                  <span className={`submenu-arrow ${openSubmenus['managed-it'] ? 'open' : ''}`}>▶</span>
                </div>
                <div className={`submenu ${openSubmenus['managed-it'] ? 'show' : ''}`}>
                  {serviceSubmenus['managed-it'].map((item, index) => (
                    <a key={index} href={item.link} className="submenu-item" onClick={closeAllMenus}>
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="dropdown-item has-submenu" onClick={() => toggleSubmenu('managed-security')}>
                  Managed Security Services
                  <span className={`submenu-arrow ${openSubmenus['managed-security'] ? 'open' : ''}`}>▶</span>
                </div>
                <div className={`submenu ${openSubmenus['managed-security'] ? 'show' : ''}`}>
                  {serviceSubmenus['managed-security'].map((item, index) => (
                    <a key={index} href={item.link} className="submenu-item" onClick={closeAllMenus}>
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="dropdown-item has-submenu" onClick={() => toggleSubmenu('cloud-infrastructure')}>
                  Cloud and Infrastructure services
                  <span className={`submenu-arrow ${openSubmenus['cloud-infrastructure'] ? 'open' : ''}`}>▶</span>
                </div>
                <div className={`submenu ${openSubmenus['cloud-infrastructure'] ? 'show' : ''}`}>
                  {serviceSubmenus['cloud-infrastructure'].map((item, index) => (
                    <a key={index} href={item.link} className="submenu-item" onClick={closeAllMenus}>
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="dropdown-item has-submenu" onClick={() => toggleSubmenu('security-assessments')}>
                  Security Assessments and compliance
                  <span className={`submenu-arrow ${openSubmenus['security-assessments'] ? 'open' : ''}`}>▶</span>
                </div>
                <div className={`submenu ${openSubmenus['security-assessments'] ? 'show' : ''}`}>
                  {serviceSubmenus['security-assessments'].map((item, index) => (
                    <a key={index} href={item.link} className="submenu-item" onClick={closeAllMenus}>
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="dropdown-item has-submenu" onClick={() => toggleSubmenu('data-protection')}>
                  Data Protection and Recovery
                  <span className={`submenu-arrow ${openSubmenus['data-protection'] ? 'open' : ''}`}>▶</span>
                </div>
                <div className={`submenu ${openSubmenus['data-protection'] ? 'show' : ''}`}>
                  {serviceSubmenus['data-protection'].map((item, index) => (
                    <a key={index} href={item.link} className="submenu-item" onClick={closeAllMenus}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/industries" className="nav-link" onClick={closeAllMenus}>
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
                <a href="/blogs" className="dropdown-item" onClick={closeAllMenus}>
                  Blogs
                </a>
                <a href="/guidelines" className="dropdown-item" onClick={closeAllMenus}>
                  Guidelines
                </a>
                <a href="/case-studies" className="dropdown-item" onClick={closeAllMenus}>
                  Case Studies
                </a>
              </div>
            </div>

            <button className="btn-contact mobile-contact" onClick={() => { closeAllMenus(); openContactModal(); }}>
              Contact Us
            </button>
          </nav>

          <button className="btn-contact desktop-contact" onClick={openContactModal}>
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;