import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { journeySteps } from '@shared/data/journey';

const JourneyPreview = () => {
  return (
    <section className="section-padding bg-brand-dark text-white position-relative overflow-hidden">
      <div className="container position-relative">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="position-relative overflow-hidden rounded">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                alt="Manufacturing"
                className="img-fluid w-100 rounded shadow-soft"
              />
              <div className="position-absolute top-50 start-50 translate-middle bg-brand-dark bg-opacity-75 text-center p-4">
                <h4 className="font-serif fst-italic mb-2">Crafted with precision.</h4>
                <p className="text-white-50 small mb-0">Every modular component is manufactured in our zero-tolerance German-standard facility.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <span className="section-heading text-light d-block mb-3">Process Engineering</span>
            <h2 className="display-5 font-serif fw-semibold mb-4">The Modular Journey</h2>
            <p className="text-white-50 lead mb-4">
              We believe that the process is as important as the outcome. Our 6-step modular journey ensures total transparency, unwavering quality, and a stress-free delivery experience.
            </p>
            <div className="d-grid gap-4 mb-4">
              {journeySteps.slice(0, 3).map((step) => (
                <div key={step.id} className="d-flex gap-3 align-items-start">
                  <span className="h4 font-serif text-brand-muted mb-0">0{step.id}</span>
                  <div>
                    <h5 className="mb-1 text-white text-uppercase">{step.title}</h5>
                    <p className="small text-white-50 mb-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/modular-journey" className="btn btn-brand text-uppercase px-4 py-3">
              Explore The Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyPreview;
