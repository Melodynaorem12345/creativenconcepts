import React from 'react';

const ServiceGallery = ({ images }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 className="h4 font-serif mb-0">Gallery</h2>
        <span className="text-uppercase text-brand-muted small">Detail snapshots</span>
      </div>
      <div className="row g-3">
        {images.map((image, index) => (
          <div className="col-md-6" key={image}>
            <div className="service-gallery card border-0 shadow-sm h-100">
              <img src={image} alt={`Service detail ${index + 1}`} className="service-gallery__img" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGallery;
