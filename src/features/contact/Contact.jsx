import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import PageHeader from '@shared/components/PageHeader';
import contactBg from '@assets/images/contact-bg.jpg';
import contactHero from '@assets/images/contact-us-image.jpg';

const Contact = () => {
    const infoItems = [
      { key: 'location', label: 'Our Studio', val: 'No. 12, Design Avenue, Indiranagar, Bangalore, 560038', Icon: FiMapPin },
      { key: 'email', label: 'Email Us', val: 'hello@creativenconcepts.com', Icon: FiMail },
      { key: 'phone', label: 'Call Us', val: '+91 98765 43210', Icon: FiPhone }
    ];

    const leftVariant = {
      hidden: { opacity: 0, x: -80 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } }
    };

    const rightVariant = {
      hidden: { opacity: 0, x: 80 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.08 } }
    };

    const detailsVariant = {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.35 } }
    };

  return (
    <div className="bg-white">
      <PageHeader
        title="Contact Us"
        image={contactBg}
        imagePosition="center center"
        overlay={true}
        showSubtitle={false}
        showDescription={false}
      />

      <section className="section-padding">
        <div className="container">
          <div className="row g-4 align-items-stretch">
             <div className="col-lg-6">
              <motion.div
                variants={leftVariant}
                initial="hidden"
                animate="visible"
                className="h-100 overflow-hidden pe-5"
                aria-hidden="true"
              >
                <img
                  src={contactHero}
                  alt="Contact us image"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </motion.div>
            </div>
            <div className="col-lg-6 d-flex flex-column">
              <motion.div variants={rightVariant} initial="hidden" animate="visible" className="mb-2 section-title">
                <h2 className="contact-head">Designing <span className='fst-italic text-brand-muted'>Your Future</span> Starts Here.</h2>
                <p className="text-brand-muted mb-0">
                  Our principal architects are available for a detailed one-on-one session to understand your requirements.
                </p>
              </motion.div>

              <motion.div
                variants={rightVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.12 }}
                className="card border-0 flex-grow-1"
              >
                <div className="card-body h-100 d-flex flex-column p-0">
                  <form className="row g-3 mt-auto contact-form" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
                    <div className="col-md-6">
                      <label className="form-label small text-uppercase fw-semibold text-brand-muted">Name</label>
                      <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small text-uppercase fw-semibold text-brand-muted">Email</label>
                      <input type="email" className="form-control" placeholder="email@address.com" />
                    </div>
                    <div className="col-12">
                      <label className="form-label small text-uppercase fw-semibold text-brand-muted">Service Required</label>
                      <select className="form-select">
                        <option>Residential Interior</option>
                        <option>Commercial Space</option>
                        <option>Modular Kitchen</option>
                        <option>Architecture Service</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label small text-uppercase fw-semibold text-brand-muted">Project Message</label>
                      <textarea rows={4} className="form-control" placeholder="Tell us about your space..." />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-brand w-100 py-3 text-uppercase">
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        className="section-padding pt-0"
        variants={detailsVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="row g-3">
            {infoItems.map((item) => (
              <div className="col-12 col-md-6 col-lg-4 custom-apply" key={item.key}>
                <div className="p-4 h-100 contact-info-item d-flex align-items-start gap-3">
                  <div className="text-brand icon-box" aria-hidden="true">
                    <item.Icon />
                  </div>
                  <div>
                    <h6 className="info-heading mb-1">{item.label}</h6>
                    <p className="info-subheading mb-0">{item.val}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
