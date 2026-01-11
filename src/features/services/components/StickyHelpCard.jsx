import React from 'react';
import { Link } from 'react-router-dom';

const StickyHelpCard = ({ image, phone, email, ctaLabel, ctaHref }) => {
  return (
    <aside className="service-sticky">
      <div className="service-sticky__card" style={{ '--bg-image': `url(${image})` }}>
        <div className="service-sticky__overlay" />
        <div className="service-sticky__content">
          <span className="service-sticky__eyebrow">Need guidance?</span>
          <h3 className="service-sticky__title">Talk to our design team</h3>
          <div className="service-sticky__info">
            <a className="service-sticky__link" href={`tel:${phone}`}>
              {phone}
            </a>
            <a className="service-sticky__link" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          {ctaHref.startsWith('/') ? (
            <Link className="btn btn-light w-100 text-uppercase fw-semibold" to={ctaHref}>
              {ctaLabel}
            </Link>
          ) : (
            <a className="btn btn-light w-100 text-uppercase fw-semibold" href={ctaHref}>
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </aside>
  );
};

export default StickyHelpCard;
