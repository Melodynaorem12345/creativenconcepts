import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '@shared/components/PageHeader';
import contactBg from '@assets/images/banners/contact-bg.jpg';
import { apiGet } from '../../services/api';

const CountUp = ({ end, suffix = '', duration = 1200 }) => {
  const [value, setValue] = useState(0);
  const frameRef = useRef();
  const startRef = useRef();
  const nodeRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startRef.current = performance.now();
            const animate = (now) => {
              const elapsed = now - startRef.current;
              const progress = Math.min(elapsed / duration, 1);
              setValue(Math.floor(progress * end));
              if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
              }
            };
            frameRef.current = requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [duration, end]);

  return (
    <span ref={nodeRef}>
      {value}
      {suffix}
    </span>
  );
};

const AnimatedDial = ({ value, label }) => {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef();
  const startRef = useRef(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const duration = 1200;
      const next = Math.min(value, Math.round((elapsed / duration) * value));
      setProgress(next);
      if (elapsed < duration) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startRef.current = 0;
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            frameRef.current = requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [value]);

  const angle = (progress / 100) * 360;

  return (
    <div className="dial" ref={nodeRef} aria-label={`${label} ${progress}%`}>
      <div
        className="dial__ring"
        style={{ background: `conic-gradient(var(--brand-500) ${angle}deg, #e4e1db ${angle}deg)` }}
      >
        <div className="dial__inner">
          <span className="h4 mb-0">{progress}%</span>
        </div>
      </div>
      <small className="text-uppercase text-brand-muted fw-semibold d-block mt-2">{label}</small>
    </div>
  );
};

const BeforeAfterSlider = ({ beforeSrc, afterSrc }) => {
  const containerRef = useRef(null);
  const afterRef = useRef(null);
  const handleRef = useRef(null);
  const draggingRef = useRef(false);

  const clamp = (val, min, max) => Math.min(max, Math.max(min, val));

  const setPosition = (xPx) => {
    const container = containerRef.current;
    if (!container || !afterRef.current || !handleRef.current) return;
    const rect = container.getBoundingClientRect();
    const clamped = clamp(xPx, 0, rect.width);
    afterRef.current.style.clip = `rect(0px, ${clamped}px, ${rect.height}px, 0px)`;
    handleRef.current.style.left = `${clamped}px`;
  };

  const startDrag = (clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    draggingRef.current = true;
    setPosition(clientX - rect.left);
  };

  useEffect(() => {
    const container = containerRef.current;
    const handle = handleRef.current;
    if (!container || !handle) return;

    const rect = container.getBoundingClientRect();
    setPosition(rect.width / 2);

    const stop = () => {
      draggingRef.current = false;
    };

    const onMove = (clientX) => {
      if (!draggingRef.current) return;
      const box = container.getBoundingClientRect();
      setPosition(clientX - box.left);
    };

    const onMouseMove = (e) => onMove(e.clientX);
    const onTouchMove = (e) => {
      const point = e.touches && e.touches[0];
      if (!point) return;
      onMove(point.clientX);
    };

    const onMouseDown = (e) => {
      e.preventDefault();
      startDrag(e.clientX);
    };
    const onTouchStart = (e) => {
      const point = e.touches && e.touches[0];
      if (!point) return;
      startDrag(point.clientX);
    };

    handle.addEventListener('mousedown', onMouseDown);
    handle.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', stop);

    return () => {
      handle.removeEventListener('mousedown', onMouseDown);
      handle.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stop);
    };
  }, []);

  return (
    <div className="ba-slider" ref={containerRef}>
      <img className="ba-slider__before" src={beforeSrc} alt="Before" loading="lazy" />
      <img className="ba-slider__after" ref={afterRef} src={afterSrc} alt="After" loading="lazy" />
      <div className="ba-slider__handle" ref={handleRef} role="slider" aria-valuemin={0} aria-valuemax={100} aria-valuenow={50} tabIndex={0}>
        <span className="ba-slider__arrow ba-slider__arrow--left" />
        <span className="ba-slider__arrow ba-slider__arrow--right" />
      </div>
    </div>
  );
};

const OfficeSection = ({
  imgSrc = 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=80',
  title = 'Bengaluru',
  eyebrow = 'Our Office',
  address = '📍 Shed No. 9, Ramaraju Garden, Ganapathipura Kanakapura Road, Bengaluru, Karnataka, 560062',
  mapsQuery = 'https://maps.app.goo.gl/WiJMbY3sb62xtn4x8'
}) => {
  return (
    <section className="office-section">
      <div className="container">
        <div className="office-image-wrap">
          <div className="office-overlay" aria-hidden="true" />
          <motion.img
            src={imgSrc}
            alt="Office Location"
            className="office-hero"
            loading="lazy"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />

          <motion.div
            className="office-card"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.35 }}
          >
            <div className="office-eyebrow">{eyebrow}</div>

            <h2 className="office-title">{title}</h2>

            <p className="office-address" style={{ whiteSpace: 'pre-line' }}>
              {address}
            </p>

            <a
              href={`${mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="office-btn"
            >
              Get Directions <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutSubPage = () => {
  const { section } = useParams();
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamError, setTeamError] = useState(null);
  const [teamStatus, setTeamStatus] = useState('idle');

  useEffect(() => {
    setTeamStatus('loading');
    apiGet('/api/v1/team').then(({ data, error }) => {
      if (data) {
        setTeamMembers(Array.isArray(data.team) ? data.team : []);
        setTeamStatus('success');
        return;
      }
      if (error) {
        console.error('Team error:', error);
        setTeamError('Unable to load team');
        setTeamStatus('error');
      }
      setTeamMembers([]);
    });
  }, []);

  if (section === 'who-we-are') {
    const reasons = [
      { title: '5 Years Warranty', copy: 'Extended protection on modular builds and fittings.', icon: '🛡️' },
      { title: 'Transparent Pricing', copy: 'Clear BOQs, milestone-linked payments, zero surprises.', icon: '📑' },
      { title: 'Latest technologies', copy: '3D viz, material libraries, and precise factory builds.', icon: '💻' },
      { title: 'Professional Team', copy: 'Specialists across design, procurement, and site delivery.', icon: '🧑‍💼' },
      { title: 'High-Quality Designs', copy: 'Design language tailored to your lifestyle and aesthetic.', icon: '✨' },
      { title: 'Award winning', copy: 'Recognized for craft, innovation, and client satisfaction.', icon: '🏆' }
    ];

    return (
      <div>
        <PageHeader
        title="Who We Are"
        image={contactBg}
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
                  Founded in 2006, CreativeNconcepts was born out of a desire to merge high-end architectural discipline with human-centric interior design. We believe that a space is not just a structure; it's a reflection of the souls that inhabit it.
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
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-brand-light">
          <div className="container">
            <div className="row text-center gx-4">
              {[
                { val: 2500, suffix: '+', label: 'Projects Completed' },
                { val: 100, suffix: '+', label: 'Design Awards' },
                { val: 12, suffix: '+', label: 'Expert Architects' }
              ].map((stat) => (
                <div className="col-12 col-md-4 mb-3" key={stat.label}>
                  <h3 className="display-6 font-serif text-brand mb-2">
                    <CountUp end={stat.val} suffix={stat.suffix} />
                  </h3>
                  <p className="small text-uppercase text-brand-muted mb-0">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-5">
                <div className="why-choose__header mb-4">
                  <span className="section-heading d-block mb-3 text-uppercase">Since 1986</span>
                  <h2 className="display-5 fw-semibold font-serif text-brand mb-3">We design thoughtful, livable spaces.</h2>
                  <p className="text-brand-muted mb-4">
                    Design, engineering, and delivery teams in one studio to craft spaces that feel intentional and ready for life.
                  </p>
                  <div className="d-flex flex-wrap gap-4">
                    <AnimatedDial value={87} label="Clients Satisfaction" />
                    <AnimatedDial value={89} label="Work Experiences" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200"
                  afterSrc="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding why-choose-light">
          <div className="container">
            <div className="d-flex flex-column gap-3 justify-content-center align-items-center mb-5">
              <span className="section-heading d-block text-brand">Why Choose Us</span>
              <h2 className="display-5 fw-semibold font-serif text-brand mb-0">Crafted confidence, transparent delivery.</h2>
              <p className="text-brand-muted mb-0">Warranty-backed work, clear pricing, and a team that owns every detail.</p>
            </div>
            <div className="why-grid">
              <div className="why-grid__column">
                {reasons.slice(0, 3).map((item) => (
                  <div className="why-feature" key={item.title}>
                    <div className="why-feature__icon" aria-hidden="true">{item.icon}</div>
                    <div>
                      <h5 className="why-feature__title">{item.title}</h5>
                      <p className="why-feature__copy">{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="why-grid__center">
                <div className="why-circle">
                  <img
                    src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200"
                    alt="Lounge vignette"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="why-grid__column">
                {reasons.slice(3, 6).map((item) => (
                  <div className="why-feature" key={item.title}>
                    <div className="why-feature__icon" aria-hidden="true">{item.icon}</div>
                    <div>
                      <h5 className="why-feature__title">{item.title}</h5>
                      <p className="why-feature__copy">{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (section === 'our-team') {
    return (
      <div>
        <PageHeader
        title="Our Team"
        image={contactBg}
        imagePosition="center center"
        overlay={true}
        showSubtitle={false}
        showDescription={false}
      />
        <section className="section-padding bg-white team-section team-section--stable">
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
              {teamError && (
                <p className="text-warning small text-center mb-4">
                  ⚠️ Some content may be outdated. Please try again later.
                </p>
              )}
            {teamStatus === 'loading' ? (
              <div className="text-center text-brand-muted small">Loading team...</div>
            ) : teamMembers.length > 0 ? (
              <div className="row g-4">
                {teamMembers.map((member, i) => (
                  <div className="col-12 col-md-6 col-lg-4" key={`${member.name}-${i}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="card teams-box"
                    >
                      <div className="overflow-hidden">
                        {member.photo ? (
                          <img src={member.photo} className="cover-image" alt={member.name} loading="lazy" />
                        ) : (
                          <div className="ratio ratio-1x1 bg-brand-mid d-flex align-items-center justify-content-center text-brand-muted">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="card-body text-center">
                        <h5 className="card-title font-serif text-brand mb-1">{member.name}</h5>
                        <p className="mb-0">{member.role}</p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-brand-muted text-center mb-0">No team members found.</p>
            )}
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
        image={contactBg}
        imagePosition="center center"
        overlay={true}
        showSubtitle={false}
        showDescription={false}
      />

        {/* Inserted OfficeSection that mirrors your HTML design & animations */}
        <OfficeSection
          imgSrc="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=80"
          title="Bengaluru"
          eyebrow="Our Office"
          address={`📍 Shed No. 9, Ramaraju Garden, Ganapathipura Kanakapura Road, Bengaluru, Karnataka, 560062`}
          mapsQuery="https://maps.app.goo.gl/WiJMbY3sb62xtn4x8"
        />

        {/* optionally keep other about sections below */}
      </div>
    );
  }

  return <Navigate to="/about/who-we-are" />;
};

export default AboutSubPage;
