import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

const FeaturedProjects = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="mb-5">
          <span className="section-heading d-block mb-2">Project Showcase</span>
          <h2 className="display-5 fw-semibold font-serif text-brand mb-3">Architectural Landmarks</h2>
          <p className="lead text-brand-muted">From minimalist urban lofts to sprawling corporate headquarters, our portfolio defines modern excellence.</p>
        </div>
        <div className="row g-4">
          {projects.slice(0, 2).map((project, i) => (
            <div className="col-12 col-lg-6" key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="card border-0 shadow-soft h-100"
              >
                <div className="ratio ratio-16x9 overflow-hidden">
                  <img src={project.image} className="cover-image" alt={project.title} />
                </div>
                <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-start border-top muted-border">
                  <div>
                    <h5 className="card-title font-serif text-brand mb-1">{project.title}</h5>
                    <p className="small text-uppercase text-muted mb-0">{project.location} • {project.year}</p>
                  </div>
                  <Link to="/projects" className="btn btn-link text-uppercase fw-bold p-0 mt-3 mt-md-0">
                    Explore Space →
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/projects" className="btn btn-outline-brand px-4 py-3">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
