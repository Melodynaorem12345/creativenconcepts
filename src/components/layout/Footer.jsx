import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white mt-auto footer-section">
      <div className="container">
        <div className="row g-5 mb-4">
          <div className="col-12 col-lg-5">
            <h3 className="fw-bold font-serif mb-3 text-uppercase">CreativeNconcepts</h3>
            <p className="text-light small mb-4 pe-lg-4">
              CreativeNconcepts brings bespoke interior expertise to your home or office. Our design professionals help you define, craft, and execute spaces that feel effortless and intentional.
            </p>
            <ul className="list-unstyled small text-light-emphasis footer-contact">
              <li className="d-flex align-items-start gap-3">
                <FaMapMarkerAlt className="footer-icon mt-1" />
                <p>No. 12, Design Avenue, Indiranagar, Bangalore, 560038</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <FaPhoneAlt className="footer-icon" />
                <p>+91 98765 43210</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <FaEnvelope className="footer-icon" />
                <p>hello@creativenconcepts.com</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <FaClock className="footer-icon" />
                <p>Mon - Sat: 09.00 to 18.00 · Sunday Closed</p>
              </li>
            </ul>
            <div className="d-flex gap-2 mt-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a key={idx} href="#" className="footer-social">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="footer-quicklinks">
              <h6 className="text-uppercase small fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled small text-light-emphasis footer-links">
                <li><Link className="footer-link" to="/">Home</Link></li>
                <li><Link className="footer-link" to="/about/who-we-are">About Us</Link></li>
                <li><Link className="footer-link" to="/services/kitchen">Services</Link></li>
                <li><Link className="footer-link" to="/modular-journey">Journey</Link></li>
                <li><Link className="footer-link" to="/projects">Projects</Link></li>
                <li><Link className="footer-link" to="/testimonials">Testimonials</Link></li>
                <li><Link className="footer-link" to="/contact">Contact</Link></li>
                <li><Link className="footer-link" to="/contact">Book Consultation</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <h6 className="text-uppercase small fw-bold mb-3">Services</h6>
            <ul className="list-unstyled small text-light-emphasis footer-links">
              <li><Link className="footer-link" to="/services/kitchen">Modular Kitchen</Link></li>
              <li><Link className="footer-link" to="/services/wardrobe">Wardrobe Solutions</Link></li>
              <li><Link className="footer-link" to="/services/living-room">Living Room</Link></li>
              <li><Link className="footer-link" to="/services/living-room/tv-console">TV Console</Link></li>
              <li><Link className="footer-link" to="/services/living-room/pooja-room">Pooja Room</Link></li>
              <li><Link className="footer-link" to="/services/living-room/crockery-unit">Crockery Unit</Link></li>
              <li><Link className="footer-link" to="/services/commercial-projects">Commercial</Link></li>
              <li><Link className="footer-link" to="/services/retail">Retail</Link></li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 mt-2 footer-bar text-uppercase small text-light-emphasis">
          <p className="mb-2 mb-md-0 footer-subtle">© 2024 CreativeNconcepts. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="footer-link text-uppercase">Privacy Policy</a>
            <a href="#" className="footer-link text-uppercase">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
