import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { apiGet } from '../../services/api';

const Footer = () => {
  const fallbackSettings = {
    brandName: 'CreativeNconcepts',
    address: 'Shed No. 9, Ramaraju Garden, Ganapathipura Kanakapura Road, Bengaluru, Karnataka, 560062',
    mobile: '+91 98765 43210',
    email: 'hello@creativenconcepts.com',
    hours: 'Mon - Sat: 09.00 to 18.00 · Sunday Closed',
    social_links: [
      { platform: 'facebook', url: '#' },
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' }
    ]
  };
  const [settings, setSettings] = useState(fallbackSettings);
  const [settingsError, setSettingsError] = useState(null);

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

  const socialLinks = useMemo(() => {
    const links = settings.social_links && settings.social_links.length ? settings.social_links : fallbackSettings.social_links;
    const iconMap = {
      facebook: FaFacebookF,
      instagram: FaInstagram,
      linkedin: FaLinkedinIn
    };
    return links
      .map((link) => {
        const platform = link.platform ? link.platform.toLowerCase() : '';
        return { ...link, Icon: iconMap[platform] };
      })
      .filter((link) => link.Icon);
  }, [settings, fallbackSettings.social_links]);

  return (
    <footer className="bg-brand-dark text-white mt-auto footer-section">
      <div className="container">
        <div className="row g-5 mb-4">
          <div className="col-12 col-lg-5">
            <h3 className="fw-bold font-serif mb-3 text-uppercase">{settings.brandName || fallbackSettings.brandName}</h3>
            <p className="text-light small mb-4 pe-lg-4">
              CreativeNconcepts brings bespoke interior expertise to your home or office. Our design professionals help you define, craft, and execute spaces that feel effortless and intentional.
            </p>
            <ul className="list-unstyled small text-light-emphasis footer-contact">
              <li className="d-flex align-items-start gap-3">
                <FaMapMarkerAlt className="footer-icon mt-1" />
                <p>{settings.address || fallbackSettings.address}</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <FaPhoneAlt className="footer-icon" />
                <p>{settings.mobile || fallbackSettings.mobile}</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <FaEnvelope className="footer-icon" />
                <p>{settings.email || fallbackSettings.email}</p>
              </li>
              <li className="d-flex align-items-center gap-3">
                <FaClock className="footer-icon" />
                <p>{settings.hours || fallbackSettings.hours}</p>
              </li>
            </ul>
            <div className="d-flex gap-2 mt-3">
              {socialLinks.map((link, idx) => (
                <a key={`${link.platform}-${idx}`} href={link.url || '#'} className="footer-social">
                  <link.Icon />
                </a>
              ))}
            </div>
            {settingsError && (
              <p className="text-warning small mt-3 mb-0">
                ⚠️ Some content may be outdated. Please try again later.
              </p>
            )}
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

          <div className="col-6 col-lg-4 pl-xll">
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

        <div className="d-flex justify-content-center align-items-center pt-4 mt-2 footer-bar text-uppercase small text-light-emphasis">
          <p className="mb-0 footer-subtle">© 2026 CreativeNconcepts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
