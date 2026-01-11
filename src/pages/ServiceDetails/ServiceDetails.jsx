import React, { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { servicesData } from './serviceData';

const ServiceDetails = ({ fixedSlug }) => {
  const { serviceSlug } = useParams();
  const resolvedSlug = fixedSlug || serviceSlug;
  const rootRef = useRef(null);
  const service = servicesData.find((item) => item.slug === resolvedSlug);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sections = root.querySelectorAll('.service');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => io.observe(section));

    return () => io.disconnect();
  }, [resolvedSlug]);

  if (!service) return <Navigate to="/services/modular-kitchen" />;

  const serviceName = service.slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return (
    <div className='bg-white'>
        <div className="service-details section-padding" ref={rootRef}>
      <div className="container">
        <section className="hero">
          <span>{service.hero.subtitle}</span>
          <h1>{service.hero.title}</h1>
          <p>{service.hero.description}</p>
        </section>

        {service.sections.map((section) => (
          <section
            key={section.type}
            className={`service${section.reverse ? ' reverse' : ''}`}
          >
            {section.reverse ? (
              <>
                <div className="content">
                  <span>{section.label}</span>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  <div className="details">
                    {section.details.map((detail) => (
                      <div key={detail.label}>
                        <strong>{detail.label}:</strong> {detail.value}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="media">
                  <img src={section.image} alt={section.title} loading="lazy" />
                </div>
              </>
            ) : (
              <>
                <div className="media">
                  <img src={section.image} alt={section.title} loading="lazy" />
                </div>
                <div className="content">
                  <span>{section.label}</span>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  <div className="details">
                    {section.details.map((detail) => (
                      <div key={detail.label}>
                        <strong>{detail.label}:</strong> {detail.value}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </section>
        ))}
      </div>
    </div>
    <section className="section-padding bg-brand-dark text-white text-center service-details-cta">
        <div className="container">
          <h2 className="display-5 font-serif mb-4">
            Begin your transformation with {serviceName}
          </h2>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link to="/contact" className="btn btn-light px-4 py-3 text-uppercase fw-bold">
              Book Consultation
            </Link>
            <Link to="/projects" className="btn btn-outline-light px-4 py-3 text-uppercase fw-bold">
              View Similar Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
