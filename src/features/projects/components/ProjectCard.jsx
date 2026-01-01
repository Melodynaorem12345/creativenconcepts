import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="card border-0 shadow-soft h-100 card-lift"
      role="button"
      onClick={onClick}
    >
      <div className="position-relative overflow-hidden">
        <img src={project.image} className="card-img-top cover-image" alt={project.title} />
        <div className="position-absolute top-0 end-0 m-3 badge bg-light text-brand fw-semibold text-uppercase">
          {project.category}
        </div>
      </div>
      <div className="card-body d-flex justify-content-between align-items-start">
        <div>
          <h5 className="card-title font-serif text-brand mb-1">{project.title}</h5>
          <p className="small text-uppercase text-muted mb-0">{project.location}</p>
        </div>
        <span className="text-brand-muted fst-italic">{project.year}</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
