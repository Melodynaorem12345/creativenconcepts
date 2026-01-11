import React from 'react';

const ServiceHero = ({ title, image }) => {
  return (
    <div className="service-hero card border-0 shadow-sm">
      <img src={image} className="service-hero__img" alt={title} loading="lazy" />
      <div className="service-hero__body">
        <span className="section-heading">Service Highlight</span>
        <h1 className="display-6 font-serif mb-2">{title}</h1>
        <p className="text-brand-muted mb-0">
          Premium design, refined execution, and tailored details for every space.
        </p>
      </div>
    </div>
  );
};

export default ServiceHero;
