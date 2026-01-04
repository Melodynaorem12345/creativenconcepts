import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '@shared/data/services';

const ServiceDetail = ({ fixedId }) => {
  const { serviceId: paramId } = useParams();
  const idToFind = fixedId || paramId;
  const service = services.find((s) => s.id === idToFind);

  if (!service) return <Navigate to="/services/kitchen" />;

  return (
    <div className="bg-white">
      <section className="position-relative">
        <div className="ratio ratio-21x9">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={service.bannerImage}
            className="cover-image"
            alt={service.title}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay" />
          <div className="position-absolute top-0 start-0 end-0 bottom-0 text-white d-flex align-items-center">
            <div className="container">
              <h1 className="display-4 fw-bold font-serif mb-0">{service.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <h2 className="display-5 font-serif text-brand mb-3">The Architectural Soul of {service.title}</h2>
              <p className="lead text-brand-muted">{service.description}</p>
              <p className="fst-italic text-brand-muted">
                Our approach to {service.title.toLowerCase()} is rooted in the philosophy that utility and beauty are inseparable. We use technology and tradition to build spaces that feel timeless.
              </p>
              <div className="row g-3 mt-4">
                <div className="col-6">
                  <div className="p-3 border muted-border">
                    <div className="h3 font-serif text-brand mb-1">100%</div>
                    <small className="text-uppercase text-brand-muted">Custom Built</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border muted-border">
                    <div className="h3 font-serif text-brand mb-1">05yr</div>
                    <small className="text-uppercase text-brand-muted">Service Plan</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card bg-brand-dark text-white border-0 h-100">
                <div className="card-body">
                  <h4 className="card-title font-serif mb-4 text-brand-muted">Design Specifications</h4>
                  <ul className="list-group list-group-flush">
                    {[
                      { t: 'Precision Joinery', d: 'Millimetric accuracy in every cut.' },
                      { t: 'Luxury Materials', d: 'Handpicked veneers and stones.' },
                      { t: 'Smart Hardware', d: 'Premium German & Italian fittings.' },
                      { t: 'Sustainable Focus', d: 'Eco-friendly, low-VOC finishes.' },
                      { t: 'Seamless Integration', d: 'Perfect fit for your specific floorplan.' }
                    ].map((item) => (
                      <li key={item.t} className="list-group-item bg-transparent text-white d-flex gap-3 align-items-start">
                        <span className="badge bg-light text-brand">{item.t}</span>
                        <span className="text-white-50">{item.d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <span className="section-heading d-block mb-2">Visual Evidence</span>
              <h3 className="font-serif h2 text-brand mb-0">Curated Gallery</h3>
            </div>
            <p className="text-brand-muted small mb-0">Explore the finer details of our work</p>
          </div>
          <div className="row g-3">
            {service.gallery.map((img, i) => (
              <div className="col-12 col-md-4" key={i}>
                <motion.div whileHover={{ y: -5 }} className="gallery-tile bg-white shadow-soft h-100">
                  <div className="ratio ratio-1x1">
                    <img src={img} className="cover-image" alt={`Detail ${i + 1}`} />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                {service.gallery.slice(0, 3).map((img, i) => (
                  <div className="col-6" key={`extra-${i}`}>
                    <div className="ratio ratio-4x3 overflow-hidden shadow-soft">
                      <img src={img} className="cover-image" alt={`${service.title} view ${i + 1}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="font-serif text-brand mb-3">What to expect</h4>
              <ul className="list-unstyled text-brand-muted">
                <li className="mb-2">• Tailored layouts and material recommendations for your space.</li>
                <li className="mb-2">• Coordinated finishes, lighting, and hardware selections.</li>
                <li className="mb-2">• Precision drawings and on-site guidance for smooth execution.</li>
                <li className="mb-2">• Transparent timelines and milestone check-ins.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-dark text-white text-center">
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="display-5 font-serif mb-4">Begin your transformation with {service.title}</h2>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Link to="/contact" className="btn btn-light px-4 py-3 text-uppercase fw-bold">
                Book Consultation
              </Link>
              <Link to="/projects" className="btn btn-outline-light px-4 py-3 text-uppercase fw-bold">
                View Similar Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
