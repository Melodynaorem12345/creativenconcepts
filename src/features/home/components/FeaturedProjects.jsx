import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@shared/data/projects';

const FeaturedProjects = () => {
  const featured = [];
  const seen = new Set();
  for (const p of projects) {
    if (featured.length === 3) break;
    if (seen.has(p.category)) continue;
    featured.push(p);
    seen.add(p.category);
  }

  return (
    <section className="section-padding project-hero">
      <div className="container">
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center mb-4">
          <span className="section-heading d-block">Our Project</span>
          <h2 className="display-5 fw-semibold font-serif text-brand mb-0">Crafting Spaces, Creating Memories</h2>
        </div>

        <div className="project-hero__grid">
          {featured.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-hero__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
            >
              <div className="project-hero__image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-hero__body">
                <h5 className="project-hero__title">{project.title}</h5>
                <p className="project-hero__meta text-uppercase small mb-2">{project.location} • {project.year}</p>
                <p className="project-hero__copy text-brand-muted mb-3">{project.description}</p>
                <Link to="/projects" className="project-hero__link">Explore More →</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
