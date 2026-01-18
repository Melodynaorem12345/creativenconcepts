import React, { useEffect, useMemo, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { services } from '@shared/data/services';
import { categoryLabels, getService, legacyRouteMap, servicesData } from './serviceData';

const ServiceDetails = ({ fixedSlug }) => {
  const { category, serviceSlug } = useParams();
  const resolvedSlug = fixedSlug || serviceSlug;
  const rootRef = useRef(null);
  const { resolvedCategory, finalSlug, redirectTo, isCategoryLanding } = useMemo(() => {
    if (!category && resolvedSlug && servicesData[resolvedSlug]) {
      return {
        resolvedCategory: resolvedSlug,
        finalSlug: null,
        redirectTo: null,
        isCategoryLanding: true
      };
    }

    if (!category && resolvedSlug) {
      const legacy = legacyRouteMap[resolvedSlug];
      if (legacy) {
        return {
          resolvedCategory: legacy.category,
          finalSlug: legacy.serviceSlug,
          redirectTo: `/services/${legacy.category}/${legacy.serviceSlug}`,
          isCategoryLanding: false
        };
      }
    }

    if (category && resolvedSlug) {
      const legacy = legacyRouteMap[resolvedSlug];
      if (legacy) {
        const needsRedirect =
          legacy.category !== category || legacy.serviceSlug !== resolvedSlug;
        return {
          resolvedCategory: legacy.category,
          finalSlug: legacy.serviceSlug,
          redirectTo: needsRedirect ? `/services/${legacy.category}/${legacy.serviceSlug}` : null,
          isCategoryLanding: false
        };
      }
    }

    return { resolvedCategory: category, finalSlug: resolvedSlug, redirectTo: null, isCategoryLanding: false };
  }, [category, resolvedSlug]);

  const service = resolvedCategory && finalSlug ? getService(resolvedCategory, finalSlug) : null;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sections = root.querySelectorAll('.service');
    if (!sections.length) return;

    const revealSection = (section) => {
      section.classList.add('reveal');
    };

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      sections.forEach(revealSection);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealSection(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    sections.forEach((section) => io.observe(section));
    requestAnimationFrame(() => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          revealSection(section);
          io.unobserve(section);
        }
      });
    });

    return () => io.disconnect();
  }, [finalSlug, resolvedCategory]);

  if (redirectTo) return <Navigate to={redirectTo} replace />;
  if (!service && !isCategoryLanding) {
    return <Navigate to="/services/kitchen/acrylic-kitchen" replace />;
  }

  const getCategoryHero = (categoryId) =>
    services.find((item) => item.id === categoryId);

  const buildDetails = (item) => {
    const details = [];
    if (item.highlights?.length) {
      details.push({ label: 'Highlights', value: item.highlights.join(', ') });
    }
    if (item.materials?.length) {
      details.push({ label: 'Materials', value: item.materials.join(', ') });
    }
    if (item.bestFor?.length) {
      details.push({ label: 'Best for', value: item.bestFor.join(', ') });
    }
    if (item.designTone) {
      details.push({ label: 'Design tone', value: item.designTone });
    }
    return details;
  };

  if (isCategoryLanding) {
    const hero = getCategoryHero(resolvedCategory) || {};
    const sections = Object.entries(servicesData[resolvedCategory] || {}).map(
      ([slug, item], index) => ({
        key: slug,
        slug,
        label: item.shortLabel || item.title,
        title: item.title,
        description: item.description,
        details: buildDetails(item),
        image: item.gallery?.[0] || null,
        reverse: index % 2 === 1
      })
    );

    return (
      <div className="bg-white">
        <div className="service-details section-padding" ref={rootRef}>
          <div className="container">
            <section className="hero">
              <span>{categoryLabels[resolvedCategory] || 'Services'}</span>
              <h1>{hero.title || resolvedCategory}</h1>
              <p>{hero.shortDescription || hero.description}</p>
            </section>

            {sections.map((section) => (
              <section
                key={section.key}
                className={`service${section.reverse ? ' reverse' : ''}`}
              >
                {section.reverse ? (
                  <>
                    <div className="content">
                      <span>{section.label}</span>
                      <h2>
                        <Link
                          to={`/services/${resolvedCategory}/${section.slug}`}
                          className="text-decoration-none text-black"
                        >
                          {section.title}
                        </Link>
                      </h2>
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
                      {section.image && (
                        <img src={section.image} alt={section.title} loading="lazy" />
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="media">
                      {section.image && (
                        <img src={section.image} alt={section.title} loading="lazy" />
                      )}
                    </div>
                    <div className="content">
                      <span>{section.label}</span>
                      <h2>
                        <Link
                          to={`/services/${resolvedCategory}/${section.slug}`}
                          className="text-decoration-none text-black"
                        >
                          {section.title}
                        </Link>
                      </h2>
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
            {!sections.length && (
              <div className="service-gallery__empty">
                No services available yet.
              </div>
            )}
          </div>
        </div>
        <section className="section-padding bg-brand-darker text-white text-center service-details-cta">
          <div className="container">
            <h2 className="display-5 font-serif mb-4">
              Begin your transformation with {hero.title || resolvedCategory}
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
  }

  const subtitle = categoryLabels[resolvedCategory] || 'Services';
  const galleryImages = service.gallery?.length ? service.gallery : [];
  const detailItems = buildDetails(service);

  return (
    <div className='bg-white'>
        <div className="service-details section-padding" ref={rootRef}>
      <div className="container">
        <section className="hero">
          <span>{subtitle}</span>
          <h1>{service.title}</h1>
        </section>

        <section className="service reveal">
          <div className="media">
            {galleryImages.length ? (
              <Swiper
                modules={[Pagination, Keyboard, A11y, Autoplay]}
                slidesPerView={1}
                spaceBetween={16}
                pagination={{ clickable: true }}
                keyboard={{ enabled: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                className="service-gallery"
              >
                {galleryImages.map((imageSrc, index) => (
                  <SwiperSlide key={`${service.title}-image-${index}`}>
                    <div className="service-gallery__frame">
                      <img src={imageSrc} alt={`${service.title} ${index + 1}`} loading="lazy" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="service-gallery__empty">
                No images available for this service yet.
              </div>
            )}
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
    <section className="section-padding bg-brand-darker text-white text-center service-details-cta">
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
