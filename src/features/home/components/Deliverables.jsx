import React from 'react';

const leadPoints = [
  { title: 'Well Considered Design' },
  { title: 'We Create For You' },
  { title: 'Leave The Details To Us' }
];

const cards = [
  { title: 'Experienced Team', copy: 'Seasoned leads across design, procurement, and site delivery.', tone: 'primary', icon: '👷‍♂️' },
  { title: 'Guaranteed Works', copy: 'Benchmarked quality with vetted vendors and clear approvals.', tone: 'light', icon: '🛡️' },
  { title: 'Free Consultation', copy: 'Discovery workshops to map needs before you commit.', tone: 'light', icon: '🤝' },
  { title: 'Reasonable Price', copy: 'Value-engineered specs balancing craft, durability, and cost.', tone: 'dark', icon: '💱' }
];

const Deliverables = () => {
  return (
    <section className="deliverables section-padding">
      <div className="container">
        <div className="deliverables__grid">
          <div className="deliverables__lead">
            <div className="delhead">
              <div className="deliverables__logo">⌂</div>
              <h3 className="deliverables__title">Our Service Commitments</h3>
              <ul className="deliverables__list">
                {leadPoints.map((item) => (
                  <li key={item.title}>{item.title}</li>
                ))}
              </ul>
            </div>
            <a href="/contact" className="commitments-cta">
              <span className="commitments-cta__text">Make An Appointment</span>
              <span className="commitments-cta__arrow">→</span>
            </a>
          </div>
          <div className="deliverables__cards">
            {cards.map((item, idx) => (
              <div
                key={item.title}
                className={`deliverables__card deliverables__card--${item.tone}`}
              >
                <div className="deliverables__icon">{item.icon}</div>
                <h5 className="deliverables__card-title">{item.title}</h5>
                <p className="deliverables__card-copy">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
