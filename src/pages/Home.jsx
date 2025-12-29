import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import JourneyPreview from '../components/home/JourneyPreview';
import ContactCTA from '../components/common/ContactCTA';
import Deliverables from '../components/home/Deliverables';

const Home = () => {
  return (
    <div className="bg-brand-light overflow-hidden">
      <Hero />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="section-heading d-block mb-3">Our Ethos</span>
                
                <h2 className="display-5 fw-semibold font-serif text-brand mb-3">We build narratives through structure and light.</h2>
                <p className="lead text-brand-muted mb-4">
                  At CreativeNconcepts, we transcend traditional interior design. Every modular unit, every material choice, and every light fixture serves a greater spatial purpose.
                </p>
                <Link to="/about/who-we-are" className="btn btn-outline-brand px-4 py-3">
                  The Creative Story
                </Link>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 d-flex flex-column gap-3">
                  <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800" className="img-fluid shadow-soft rounded" alt="Design detail" />
                  <div className="bg-brand-dark text-white text-center py-4 rounded shadow-soft">
                    <div className="h2 font-serif mb-1 text-brand-muted">12+</div>
                    <div className="small text-uppercase">Design Awards</div>
                  </div>
                </div>
                <div className="col-6 d-flex flex-column gap-3">
                  <div className="bg-brand-mid text-brand text-center py-4 rounded shadow-soft">
                    <div className="h2 font-serif mb-1">500+</div>
                    <div className="small text-uppercase">Happy Clients</div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" className="img-fluid shadow-soft rounded" alt="Kitchen detail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesPreview />
      <Deliverables />
      <JourneyPreview />
      <FeaturedProjects />
      <ContactCTA />
    </div>
  );
};

export default Home;
