import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [megaTop, setMegaTop] = useState(0);
  const location = useLocation();

  const serviceGroups = [
    {
      key: 'Kitchen',
      items: [
        { label: 'Modular Kitchen', path: '/services/kitchen' },
        { label: 'Crockery Unit', path: '/services/living-room/crockery-unit' },
        { label: 'Foyer', path: '/services/living-room/foyer' }
      ]
    },
    {
      key: 'Wardrobe',
      items: [
        { label: 'Custom Wardrobes', path: '/services/wardrobe' },
        { label: 'Vanity', path: '/services/living-room/vanity' }
      ]
    },
    {
      key: 'Living Room',
      items: [
        { label: 'Living Room', path: '/services/living-room' },
        { label: 'TV Console', path: '/services/living-room/tv-console' },
        { label: 'Pooja Room', path: '/services/living-room/pooja-room' }
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
    setIsOpen(false);
  }, [location]);

  const isPathActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => setIsOpen(false);
  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top bg-white header-nav ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="container d-flex align-items-center">
          <NavLink className="navbar-brand fw-bold text-brand" to="/">
            CreativeNconcepts
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse flex-lg-grow-1 ${isOpen ? 'show' : ''}`}>
            <div className="navbar-links-cta d-flex flex-column flex-lg-row align-items-lg-center w-100">
              <ul className="navbar-nav align-items-lg-center gap-lg-2 text-uppercase fw-semibold small mx-lg-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" end onClick={closeMobileMenu}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown about-dropdown">
                  <button className={`nav-link dropdown-toggle border-0 bg-transparent ${isPathActive('/about') ? 'active' : ''}`} type="button">
                    <span className="d-inline-flex align-items-center gap-1">
                      About
                      <FaChevronDown className="nav-caret" />
                    </span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/about/who-we-are" onClick={closeMobileMenu}>Who We Are</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/about/our-team" onClick={closeMobileMenu}>Our Team</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/about/our-office" onClick={closeMobileMenu}>Our Office</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown services-dropdown">
                  <button className={`nav-link dropdown-toggle border-0 bg-transparent services-toggle ${isPathActive('/services') ? 'active' : ''}`} type="button">
                    <span className="d-inline-flex align-items-center gap-1">
                      Services
                      <FaChevronDown className="nav-caret" />
                    </span>
                  </button>
                  <div className="dropdown-menu services-menu">
                    <ul className="services-categories list-unstyled mb-0">
                      {serviceGroups.map((group) => (
                        <li key={group.key} className="services-category">
                          <button
                            type="button"
                            className="services-category-btn"
                          >
                            {group.key}
                            <FaChevronRight className="services-category-icon" />
                          </button>
                          <div className="services-mega-panel">
                            <ul className="services-items list-unstyled mb-0">
                              {group.items.map((sub) => (
                                <li key={sub.label}>
                                  <NavLink className="services-item-link" to={sub.path} onClick={closeMobileMenu}>
                                    {sub.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/modular-journey" onClick={closeMobileMenu}>Journey</NavLink>
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
