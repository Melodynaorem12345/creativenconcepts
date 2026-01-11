import React from 'react';

const ServiceFeatures = ({ features }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 className="h4 font-serif mb-0">Key Design Advantages</h2>
        <span className="text-uppercase text-brand-muted small">Built for modern living</span>
      </div>
      <div className="row g-3">
        {features.map((feature) => (
          <div className="col-md-6" key={feature.title}>
            <div className="service-feature card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h6 text-uppercase mb-2">{feature.title}</h3>
                <p className="mb-0 text-brand-muted">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
