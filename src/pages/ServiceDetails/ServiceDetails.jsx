import React, { useEffect, useMemo, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { categoryLabels, getService, legacyRouteMap } from './serviceData';

const ServiceDetails = ({ fixedSlug }) => {
  const { category, serviceSlug } = useParams();
  const resolvedSlug = fixedSlug || serviceSlug;
  const rootRef = useRef(null);
  const { resolvedCategory, finalSlug, redirectTo } = useMemo(() => {
    if (!category && resolvedSlug) {
      const legacy = legacyRouteMap[resolvedSlug];
      if (legacy) {
        return {
          resolvedCategory: legacy.category,
          finalSlug: legacy.serviceSlug,
          redirectTo: `/services/${legacy.category}/${legacy.serviceSlug}`
        };
      }
    }

    if (category && resolvedSlug) {
      const legacy = legacyRouteMap[resolvedSlug];
      if (legacy && legacy.category === category) {
        return {
          resolvedCategory: legacy.category,
          finalSlug: legacy.serviceSlug,
          redirectTo: `/services/${legacy.category}/${legacy.serviceSlug}`
        };
      }
    }

    return { resolvedCategory: category, finalSlug: resolvedSlug, redirectTo: null };
  }, [category, resolvedSlug]);

  const service = resolvedCategory ? getService(resolvedCategory, finalSlug) : null;

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
  }, [finalSlug, resolvedCategory]);

  if (redirectTo) return <Navigate to={redirectTo} replace />;
  if (!service) return <Navigate to="/services/kitchen/acrylic-kitchen" replace />;

  const subtitle = categoryLabels[resolvedCategory] || 'Services';
  const detailItems = [
    { label: 'Highlights', value: service.highlights.join(', ') },
    { label: 'Materials', value: service.materials.join(', ') },
    { label: 'Best for', value: service.bestFor.join(', ') },
    { label: 'Design tone', value: service.designTone }
  ];

  return (
    <div className='bg-white'>
        <div className="service-details section-padding" ref={rootRef}>
      <div className="container">
        <section className="hero">
          <span>{subtitle}</span>
          <h1>{service.title}</h1>
        </section>

        <section className="service">
          <div className="media">
            <Swiper
              modules={[Pagination, Keyboard, A11y]}
              slidesPerView={1}
              spaceBetween={16}
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              className="service-gallery"
            >
              {service.gallery.map((imageSrc, index) => (
                <SwiperSlide key={`${service.title}-image-${index}`}>
                  <div className="service-gallery__frame">
                    <img src={imageSrc} alt={`${service.title} ${index + 1}`} loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="content">
            <span>{service.shortLabel}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="details">
              {detailItems.map((detail) => (
                <div key={detail.label}>
                  <strong>{detail.label}:</strong> {detail.value}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
    <section className="section-padding bg-brand-dark text-white text-center service-details-cta">
        <div className="container">
          <h2 className="display-5 font-serif mb-4">
            Begin your transformation with {service.title}
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
