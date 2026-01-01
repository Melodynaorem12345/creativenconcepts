import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@shared/data/projects';
import Lightbox from './components/Lightbox';
import ProjectCard from './components/ProjectCard';
import PageHeader from '@shared/components/PageHeader';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = useMemo(() => ['All', 'Residential', 'Commercial', 'Kitchen', 'Retail'], []);

  const filteredProjects = useMemo(() => {
    return filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="bg-white min-vh-100">
      <PageHeader
        title="Portfolio"
        subtitle="Signature Spaces"
        description="A curated selection of architectural landmarks and bespoke interiors that redefine modern living."
      />

      <div className="container pb-5">
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn ${filter === cat ? 'btn-brand text-white' : 'btn-outline-brand'} text-uppercase small px-3`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="row g-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <div className="col-12 col-md-6 col-lg-4" key={project.id}>
                <ProjectCard project={project} onClick={() => setSelectedImage(project.image)} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-5 text-center">
            <p className="font-serif text-brand-muted h4 mb-3">No projects found in this category.</p>
            <button onClick={() => setFilter('All')} className="btn btn-outline-brand text-uppercase">
              View All Projects
            </button>
          </div>
        )}
      </div>

      <Lightbox isOpen={!!selectedImage} imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default Projects;
