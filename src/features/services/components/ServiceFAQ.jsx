import React from 'react';

const ServiceFAQ = ({ items }) => {
  const accordionId = 'service-faq-accordion';
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2 className="h4 font-serif mb-0">FAQ</h2>
        <span className="text-uppercase text-brand-muted small">Answers at a glance</span>
      </div>
      <div className="accordion service-faq" id={accordionId}>
        {items.map((item, index) => {
          const headingId = `${accordionId}-heading-${index}`;
          const collapseId = `${accordionId}-collapse-${index}`;
          return (
            <div className="accordion-item service-faq__item" key={item.question}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className={`accordion-button ${index === 0 ? '' : 'collapsed'} service-faq__question`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={collapseId}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={collapseId}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={headingId}
                data-bs-parent={`#${accordionId}`}
              >
                <div className="accordion-body service-faq__answer">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceFAQ;
