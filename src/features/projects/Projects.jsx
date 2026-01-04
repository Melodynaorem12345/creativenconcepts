import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@shared/data/projects';
import Lightbox from './components/Lightbox';
import ProjectCard from './components/ProjectCard';
import PageHeader from '@shared/components/PageHeader';
import contactBg from '@assets/images/banners/contact-bg.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(12);

  const categories = useMemo(() => {
    const order = ['Residential', 'Commercial', 'Retail', 'Healthcare', 'Institutional'];
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    const sorted = order.filter((cat) => unique.includes(cat));
    const remaining = unique.filter((cat) => !order.includes(cat));
    return ['All', ...sorted, ...remaining];
  }, []);

  const filteredProjects = useMemo(() => {
    return filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  }, [filter]);

  useEffect(() => {
    setItemsToShow(12);
    setSelectedIndex(null);
  }, [filter]);

  const displayedProjects = useMemo(() => filteredProjects.slice(0, itemsToShow), [filteredProjects, itemsToShow]);

  return (
    <div className="bg-white min-vh-100">
      <PageHeader
        title="Portfolio"
        image={contactBg}
        imagePosition="center center"
        overlay={true}
        showSubtitle={false}
        showDescription={false}
      />

      <section className="section-padding">
          <div className="container">
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

        <motion.div
          key={filter}
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="row g-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={project.id}>
                <ProjectCard project={project} onClick={() => setSelectedIndex(index)} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {displayedProjects.length === 0 && (
          <div className="py-5 text-center">
            <p className="font-serif text-brand-muted h4 mb-3">No projects found in this category.</p>
            <button onClick={() => setFilter('All')} className="btn btn-outline-brand">
              View All Projects
            </button>
          </div>
        )}

        {displayedProjects.length < filteredProjects.length && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-brand"
              onClick={() =>
                setItemsToShow((prev) => Math.min(prev + 12, filteredProjects.length))
              }
            >
              Show More
            </button>
          </div>
        )}
      </div>
      </section>
      

      <Lightbox
        isOpen={selectedIndex !== null}
        items={displayedProjects}
        currentIndex={selectedIndex ?? 0}
        onClose={() => setSelectedIndex(null)}
        onPrev={() =>
          setSelectedIndex((idx) =>
            idx === null ? null : Math.max(idx - 1, 0)
          )
        }
        onNext={() =>
          setSelectedIndex((idx) =>
            idx === null ? null : Math.min(idx + 1, displayedProjects.length - 1)
          )
        }
      />
    </div>
  );
};

export default Projects;
