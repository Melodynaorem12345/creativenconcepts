import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@shared/data/testimonials';
import PageHeader from '@shared/components/PageHeader';
import contactBg from '@assets/images/contact-bg.jpg';

const Testimonials = () => {
  return (
    <div className="bg-brand-light">
      <PageHeader
        title="Client Stories"
        image={contactBg}
        imagePosition="center center"
        overlay={true}
        showSubtitle={false}
        showDescription={false}
      />

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div className="col-12 col-lg-6" key={`${t.id}-${i}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
                  className="card h-100 border-0 shadow-soft position-relative"
                >
                  <div className="card-body testimonial-body">
                    <div className="mb-3 text-warning">
                      {'★★★★★'}
                    </div>
                    <p className="mb-4">
                      “{t.content}”
                    </p>
                    <div className="d-flex align-items-center gap-3 pt-3 border-top muted-border">
                      <div className="rounded-circle overflow-hidden avatar-64">
                        <img src={t.avatar} className="cover-image" alt={t.name} />
                      </div>
                      <div>
                        <h6 className="mb-0 text-brand">{t.name}</h6>
                        <small className="text-uppercase text-brand-muted">{t.role}</small>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
