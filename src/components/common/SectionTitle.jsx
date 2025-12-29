import React from 'react';

const SectionTitle = ({ eyebrow, title, description, align = 'start', className = '' }) => {
  const alignment = align === 'center' ? 'text-center' : align === 'end' ? 'text-end' : 'text-start';
  return (
    <div className={`${alignment} ${className}`.trim()}>
      {eyebrow && <span className="section-heading d-block mb-2">{eyebrow}</span>}
      {title && <h2 className="section-title display-6 fw-bold font-serif text-brand mb-2">{title}</h2>}
      {description && <p className="text-brand-muted lead mb-0">{description}</p>}
    </div>
  );
};

export default SectionTitle;
