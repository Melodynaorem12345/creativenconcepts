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
      className="card border-0 shadow-soft h-100 card-lift project-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
    >
      <div className="project-card__media">
        <img
          src={project.image}
          className="card-img-top cover-image"
          alt={project.title}
          loading="lazy"
        />
        <div className="position-absolute top-0 end-0 m-2 small badge bg-light text-brand fw-semibold text-uppercase project-badge">
          {project.sub_category || project.category}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
