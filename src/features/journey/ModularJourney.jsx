import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { journeySteps } from '@shared/data/journey';
import JourneyStep from './components/JourneyStep';

const ModularJourney = () => {
  return (
    <div className="bg-white">
      <section className="section-padding d-flex align-items-center justify-content-center text-center bg-brand-darker text-white">
        <div className="container">
          <motion.div
          className="d-flex align-items-center flex-column gap-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <span className="section-heading d-block">The Creative Choreography</span>
            <h1 className="display-3 font-serif mb-0">The Modular <span className="fst-italic text-brand-muted-new">Journey</span></h1>
            <p className="lead text-white-90 mb-0">From the initial abstract thought to the final millimetric precision. We engineer emotions into every square inch.</p>
            <div className="mt-4 text-uppercase small text-brand-muted-new">Scroll to begin ↓</div>
          </motion.div>
        </div>
      </section>

      <div className="bg-white">
        {journeySteps.map((step, index) => (
          <JourneyStep key={step.id} step={step} index={index} />
        ))}
      </div>

      <section className="section-padding bg-brand-darker text-white text-center">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <h2 className="display-5 font-serif mb-4">The result is always <span className="fst-italic text-brand-muted-new">Exceptional</span>.</h2>
            <Link to="/contact" className="btn btn-light px-4 py-3 text-uppercase fw-bold">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModularJourney;
