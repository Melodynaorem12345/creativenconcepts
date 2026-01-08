import React from 'react';
import { motion } from 'framer-motion';

const JourneyStep = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="section-padding position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center gy-4">
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`col-lg-6 ${isEven ? '' : 'order-lg-2'}`}
          >
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="display-4 font-serif text-brand-muted">0{step.id}</span>
              <div className="flex-grow-1 border-top muted-border" />
            </div>
            {step.badge && (
              <div className="imos-highlight mb-4">
                <span className="imos-chip">ENGINEERED WITH</span>
                <h6 className="imos-title">{step.badge}</h6>
                <p className="imos-sub">
                  Production-grade software converting designs into machine-ready precision.
                </p>
              </div>
            )}

            <h3 className="display-6 font-serif text-brand mb-3">{step.title}</h3>
            <p className="text-brand-muted lead">{step.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`col-lg-6 ${isEven ? '' : 'order-lg-1'}`}
          >
            <div className="ratio ratio-4x3 shadow-soft overflow-hidden">
              <img src={step.image} className="cover-image" alt={step.title} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JourneyStep;
