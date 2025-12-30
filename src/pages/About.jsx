import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import { motion } from 'framer-motion';

const AboutSubPage = () => {
  const { section } = useParams();

  if (section === 'who-we-are') {
    return (
      <div>
        <PageHeader
        title="Who We Are"
        image="/public/assets/contact-bg.jpg"
        imagePosition="center center"
        overlay={true}
        showSubtitle={false}
        showDescription={false}
      />
        <section className="section-padding bg-white">
          <div className="container">
            <div className="row align-items-center g-4 mb-5">
              <div className="col-lg-6">
                <h2 className="display-6 font-serif text-brand mb-3">Pioneers of Premium Interiors.</h2>
                <p className="lead text-brand-muted">
                  Founded in 2010, CreativeNconcepts was born out of a desire to merge high-end architectural discipline with human-centric interior design. We believe that a space is not just a structure; it's a reflection of the souls that inhabit it.
                </p>
                <p className="text-brand-muted">
                  Our team consists of visionary architects, meticulous project managers, and expert craftsmen dedicated to pushing the boundaries of what's possible in modern living.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="ratio ratio-1x1 shadow-soft overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                    className="cover-image"
                    alt="Studio"
                  />
                </div>
              </div>
            </div>
            <div className="row text-center bg-brand-light py-5 gx-4">
              {[
                { val: '250+', label: 'Projects Completed' },
                { val: '12', label: 'Design Awards' },
                { val: '50+', label: 'Expert Architects' }
              ].map((stat) => (
                <div className="col-12 col-md-4 mb-3" key={stat.label}>
                  <h3 className="display-6 font-serif text-brand mb-2">{stat.val}</h3>
                  <p className="small text-uppercase text-brand-muted mb-0">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (section === 'our-team') {
    const team = [
      { name: 'Ar. Sahil Verma', role: 'Principal Architect', img: 'https://i.pravatar.cc/500?u=sahil' },
      { name: 'Megha Roy', role: 'Head of Interiors', img: 'https://i.pravatar.cc/500?u=megha' },
      { name: 'Rohan Deshmukh', role: 'Project Director', img: 'https://i.pravatar.cc/500?u=rohan' },
      { name: 'Elena Gilbert', role: 'Senior Designer', img: 'https://i.pravatar.cc/500?u=elena' },
      { name: 'Vikram Singh', role: 'Modular Specialist', img: 'https://i.pravatar.cc/500?u=vikram' },
      { name: 'Priya Iyer', role: 'Client Relations', img: 'https://i.pravatar.cc/500?u=priya' }
    ];

    return (
      <div>
        <PageHeader
        title="Our Team"
        image="/public/assets/contact-bg.jpg"
        imagePosition="center center"
        overlay={true}
        showSubtitle={false}
        showDescription={false}
      />
        <section className="section-padding bg-white team-section">
          <div className="container">
               <motion.div
                className="sec-title d-flex flex-column justify-content-center align-items-center mb-5"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <span className="section-heading mb-3 d-block">Certified professionals</span>
                <h2>Our Dedicated Team</h2>
              </motion.div>
            <div className="row g-4">
              {team.map((member, i) => (
                <div className="col-12 col-md-6 col-lg-4" key={member.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="card h-100 teams-box"
                  >
                    <div className="overflow-hidden">
                      <img src={member.img} className="cover-image" alt={member.name} />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title font-serif text-brand mb-1">{member.name}</h5>
                      <p className="mb-0">{member.role}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (section === 'our-office') {
    return (
      <div>
        <PageHeader
          title="Our Office"
          subtitle="Our Hub"
          description="Where ideas transform into architectural reality."
        />
        <section className="section-padding bg-white">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <div className="ratio ratio-4x3 overflow-hidden shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=1200"
                    className="cover-image"
                    alt="Office"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="display-6 font-serif text-brand mb-3">A Studio of Possibilities.</h2>
                <p className="text-brand-muted">
                  Our design studio is equipped with collaborative zones, material libraries, and immersive visualization suites.
                </p>
                <div className="row g-3 mt-3">
                  {['Material Library', 'Experience Center', 'Client Lounge'].map((item) => (
                    <div className="col-12 col-md-4" key={item}>
                      <div className="p-3 bg-brand-light h-100 text-center">
                        <p className="small text-uppercase mb-0 text-brand">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <Navigate to="/about/who-we-are" />;
};

export default AboutSubPage;
