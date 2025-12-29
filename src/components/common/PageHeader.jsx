import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, description }) => {
  return (
    <section className="bg-brand-light section-padding border-bottom position-relative overflow-hidden">
      <div className="container position-relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="col-lg-9"
        >
          <span className="section-heading d-block mb-3">{subtitle}</span>
          <h1 className="display-4 fw-bold font-serif text-brand mb-3">{title}</h1>
          {description && <p className="lead text-brand-muted">{description}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
