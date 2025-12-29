import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ServicesPreview = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      gsap.set(card, {
        transformOrigin: 'center bottom',
        transformPerspective:500,
        willChange: 'transform'
      });

      gsap.fromTo(
        card,
        {
          rotateX: -26,
          z: -260,
          y: 40
        },
        {
          rotateX: 0,
          z: 0,
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top 96%',
            end: 'top 34%',
            scrub: 1.1,
            invalidateOnRefresh: true
          }
        }
      );
    });
  }, sectionRef);

  ScrollTrigger.refresh();
  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} className="section-padding bg-brand-light what-we-offer">
      <div className="container">

        <div className="what-we-offer__header text-center">
          <span className="section-heading d-block mb-3">What We Offer</span>
          <h2 className="architecture-title mb-3">
            Architectural Design Solutions
          </h2>
          <p className="architecture-description mx-auto mb-4">
            Precision-led, human-centered environments shaped with material richness,
            balanced geometry, and carefully orchestrated lighting.
          </p>
        </div>

        <div className="what-we-offer__grid">
          {services.slice(0, 4).map((service, index) => (
            <div className="arch-offer-slot" key={service.id}>
              <article
                className="arch-offer-card"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="arch-offer-card__image">
                  <img src={service.bannerImage} alt={service.title} />
                </div>

              <div className="arch-offer-card__caption">
                  <span className="arch-offer-card__eyebrow">
                    {service.category}
                  </span>
                  <h5 className="arch-offer-card__title">{service.title}</h5>
                  <p className="arch-offer-card__copy">
                    {service.shortDescription}
                  </p>
                  <Link to={`/services/${service.id}`} className="arch-offer-card__cover" aria-label={`View ${service.title}`}>
                    <span aria-hidden="true"></span>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
