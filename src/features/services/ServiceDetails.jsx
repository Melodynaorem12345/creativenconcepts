import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { services } from '@shared/data/services';
import StickyHelpCard from './components/StickyHelpCard';
import ServiceHero from './components/ServiceHero';
import ServiceFeatures from './components/ServiceFeatures';
import ServiceGallery from './components/ServiceGallery';
import ServiceFAQ from './components/ServiceFAQ';
import './services.css';

const fallbackData = {
  phone: '+91 98765 43210',
  email: 'hello@creativenconcepts.com',
  ctaLabel: 'Get a Call Back',
  ctaHref: '/contact',
  features: [
    {
      title: 'Space Optimization',
      description: 'Layouts engineered to maximize flow, storage, and everyday functionality.'
    },
    {
      title: 'Flexible Layouts',
      description: 'Modular planning that adapts to future needs without sacrificing style.'
    },
    {
      title: 'Smart Technology',
      description: 'Integrated lighting, hardware, and smart systems for effortless living.'
    },
    {
      title: 'Cost Efficiency',
      description: 'Precise planning minimizes waste and keeps budgets transparent.'
    }
  ],
  faqs: [
    {
      question: 'How long does a typical project take?',
      answer: 'Timelines vary by scope, but most projects complete within 6–10 weeks after approval.'
    },
    {
      question: 'Can I customize finishes and materials?',
      answer: 'Yes. We curate options that match your taste, lifestyle, and maintenance preferences.'
    },
    {
      question: 'Do you provide after-installation support?',
      answer: 'Absolutely. We offer walkthroughs, care guidance, and responsive post-install support.'
    }
  ]
};

const ServiceDetails = ({ fixedId }) => {
  const { serviceId } = useParams();
  const slug = fixedId || serviceId;
  const service = services.find((item) => item.id === slug);

  if (!service) return <Navigate to="/services/kitchen" />;

  const galleryImages = service.gallery?.slice(0, 2) || [];
  const stickyImage = service.bannerImage;

  return (
    <div className="bg-white">
      <section className="service-banner">
        <div className="service-banner__media">
          <img src={service.bannerImage} alt={service.title} />
        </div>
        <div className="service-banner__overlay" />
        <div className="service-banner__content">
          <div className="container">
            <span className="section-heading d-block mb-2 text-white">Service</span>
            <h1 className="display-4 font-serif text-white mb-0">{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <StickyHelpCard
                image={stickyImage}
                phone={fallbackData.phone}
                email={fallbackData.email}
                ctaLabel={fallbackData.ctaLabel}
                ctaHref={fallbackData.ctaHref}
              />
            </div>
            <div className="col-lg-8">
              <div className="service-content d-grid gap-4">
                <ServiceHero title={service.title} image={service.bannerImage} />

                <div>
                  <h2 className="h4 font-serif mb-3">About the Service</h2>
                  <p className="text-brand-muted mb-0">{service.description}</p>
                </div>

                <ServiceFeatures features={fallbackData.features} />

                <ServiceGallery images={galleryImages} />

                <ServiceFAQ items={fallbackData.faqs} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
