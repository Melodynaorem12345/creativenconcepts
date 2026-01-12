import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { apiGet } from '../../services/api';

const Header = () => {
  const fallbackSettings = {
    brandName: 'CreativeNconcepts'
  };
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAboutMobile, setShowAboutMobile] = useState(false);
  const [showServicesMobile, setShowServicesMobile] = useState(false);
  const [expandedServiceKey, setExpandedServiceKey] = useState(null);
  const [isLgUp, setIsLgUp] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1200 : true);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [settings, setSettings] = useState(fallbackSettings);
  const [settingsError, setSettingsError] = useState(null);
  const location = useLocation();

  const serviceGroups = [
    {
      key: 'Kitchen',
      items: [
        { label: 'Modular Kitchen', path: 'kitchen' }
        
      ]
    },
    {
      key: 'Wardrobe',
      items: [
        { label: 'Custom Wardrobes', path: 'wardrobe' }
      ]
    },
    {
      key: 'Living Room',
      items: [
        { label: 'Crockery Unit', path: 'living-room/crockery-unit' },
        { label: 'Foyer', path: 'living-room/foyer' },
        { label: 'TV Console', path: 'living-room/tv-console' },
        { label: 'Pooja Room', path: 'living-room/pooja-room' }

      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLgUp(window.innerWidth >= 1200);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowAboutMobile(false);
    setShowServicesMobile(false);
    setExpandedServiceKey(null);
    setDesktopOpen(null);
  }, [location]);

  useEffect(() => {
    // lock body scroll when mobile nav is open
    if (isOpen && !isLgUp) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen, isLgUp]);

  useEffect(() => {
    apiGet('/api/v1/company-settings').then(({ data, error }) => {
      if (data) {
        const brandName = data.brandName || data.brand_name || data.name || fallbackSettings.brandName;
        setSettings({ ...fallbackSettings, ...data, brandName });
      }
      if (error) {
        console.error('Company settings error:', error);
        setSettingsError('Unable to load company details');
      }
    });
  }, []);

  const isPathActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setShowAboutMobile(false);
    setShowServicesMobile(false);
    setExpandedServiceKey(null);
    setDesktopOpen(null);
  };
  const handleDesktopOpen = (key) => {
    if (!isLgUp) return;
    setDesktopOpen(key);
  };
  const handleDesktopClose = () => {
    if (!isLgUp) return;
    setDesktopOpen(null);
  };
  const handleAboutToggle = () => {
    if (isLgUp) {
      setDesktopOpen('about');
      return;
    }
    setShowAboutMobile((prev) => !prev);
  };

  const handleServicesToggle = () => {
    if (isLgUp) {
      setDesktopOpen('services');
      return;
    }
    setShowServicesMobile((prev) => !prev);
  };

  const toggleServiceGroup = (key) => {
    if (isLgUp) return;
    setExpandedServiceKey((prev) => (prev === key ? null : key));
  };

  return (
    <header>
      <nav className={`navbar navbar-expand-xl navbar-light fixed-top bg-white header-nav ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="container d-flex align-items-center">
          <NavLink className="navbar-brand fw-bold text-brand" to="/">
            {settings.brandName || fallbackSettings.brandName}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              setIsOpen((prev) => {
                const next = !prev;
                if (!next) {
                  setShowAboutMobile(false);
                  setShowServicesMobile(false);
                  setExpandedServiceKey(null);
                }
                return next;
              });
            }}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse flex-lg-grow-1 ${isOpen ? 'show' : ''}`}>
            <div className="navbar-links-cta d-flex flex-column flex-xl-row align-items-lg-center w-100">
              <ul className="navbar-nav align-items-lg-center gap-lg-2 text-uppercase fw-semibold small mx-lg-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" end onClick={closeMobileMenu}>
                    Home
                  </NavLink>
                </li>
                <li
                  className="nav-item dropdown about-dropdown"
                  onMouseEnter={() => handleDesktopOpen('about')}
                  onMouseLeave={handleDesktopClose}
                >
                  <button
                    className={`nav-link dropdown-toggle border-0 bg-transparent ${isPathActive('/about') ? 'active' : ''}`}
                    type="button"
                    onClick={handleAboutToggle}
                    aria-expanded={showAboutMobile}
                  >
                    <span className="d-inline-flex align-items-center gap-1">
                      About
                      <FaChevronDown className="nav-caret" />
                    </span>
                  </button>
                  <ul className={`dropdown-menu ${showAboutMobile && !isLgUp ? 'show d-block position-static mt-2' : ''} ${isLgUp && desktopOpen === 'about' ? 'desktop-open show' : ''}`}>
                    <li><NavLink className="dropdown-item" to="/about/who-we-are" onClick={closeMobileMenu}>Who We Are</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/about/our-team" onClick={closeMobileMenu}>Our Team</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/about/our-office" onClick={closeMobileMenu}>Our Office</NavLink></li>
                  </ul>
                </li>
                <li
                  className="nav-item dropdown services-dropdown"
                  onMouseEnter={() => handleDesktopOpen('services')}
                  onMouseLeave={handleDesktopClose}
                >
                  <button
                    className={`nav-link dropdown-toggle border-0 bg-transparent services-toggle ${isPathActive('/services') ? 'active' : ''}`}
                    type="button"
                    onClick={handleServicesToggle}
                    aria-expanded={showServicesMobile}
                  >
                    <span className="d-inline-flex align-items-center gap-1">
                      Services
                      <FaChevronDown className="nav-caret" />
                    </span>
                  </button>
                  <div className={`dropdown-menu services-menu ${showServicesMobile && !isLgUp ? 'show d-block position-static mt-2 w-100' : ''} ${isLgUp && desktopOpen === 'services' ? 'desktop-open show' : ''}`}>
                    <ul className="services-categories list-unstyled mb-0">
                      {serviceGroups.map((group) => {
                        const isExpanded = !isLgUp && expandedServiceKey === group.key;
                        return (
                          <li key={group.key} className="services-category">
                            <button
                              type="button"
                              className="services-category-btn d-flex justify-content-between align-items-center w-100"
                              onClick={() => toggleServiceGroup(group.key)}
                              aria-expanded={isExpanded}
                            >
                              {group.key}
                              <FaChevronRight className="services-category-icon" />
                            </button>
                            <div className={`services-mega-panel ${isExpanded ? 'show-mobile d-block position-static mt-2' : ''}`}>
                              <ul className="services-items list-unstyled mb-0">
                                {group.items.map((sub) => (
                                  <li key={sub.label}>
                                    <NavLink className="services-item-link" to={`/services/${sub.path}`} onClick={closeMobileMenu}>
                                      {sub.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/modular-journey" onClick={closeMobileMenu}>Modular Journey</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects" onClick={closeMobileMenu}>Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/testimonials" onClick={closeMobileMenu}>Testimonials</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
                </li>
              </ul>
              <div className="navbar-cta mt-3 mt-lg-0 ms-lg-3">
                <Link className="btn btn-brand w-100 w-lg-auto" to="/contact" onClick={closeMobileMenu}>
                  Book Consultation
                </Link>
                {settingsError && (
                  <p className="text-warning small mt-2 mb-0">
                    ⚠️ Some content may be outdated. Please try again later.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
