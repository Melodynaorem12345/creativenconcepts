import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const Contact = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="Get In Touch"
        subtitle="Contact Us"
        description="Ready to transform your vision into an architectural masterpiece? We are just a conversation away."
      />

      <section className="pb-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <h2 className="display-6 font-serif text-brand mb-3">Designing Your Future Starts Here.</h2>
                <p className="text-brand-muted mb-4">
                  Our principal architects are available for a detailed one-on-one session to understand your requirements and offer initial spatial insights.
                </p>
                <div className="row g-3">
                  {[
                    { label: 'Our Studio', val: 'No. 12, Design Avenue, Indiranagar, Bangalore, 560038' },
                    { label: 'Email Us', val: 'hello@creativenconcepts.com' },
                    { label: 'Call Us', val: '+91 98765 43210' },
                    { label: 'Social', val: '@creative_n_concepts' }
                  ].map((item) => (
                    <div className="col-12 col-md-6" key={item.label}>
                      <div className="p-3 bg-brand-light h-100">
                        <h6 className="text-uppercase small fw-bold text-brand mb-2">{item.label}</h6>
                        <p className="text-brand-muted mb-0 small">{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="card border-0 shadow-soft h-100"
              >
                <div className="card-body">
                  <h3 className="font-serif h4 text-brand mb-3">Send a Brief</h3>
                  <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
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
                      <button type="submit" className="btn btn-brand w-100 py-3 text-uppercase fw-bold">
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
    </div>
  );
};

export default Contact;
