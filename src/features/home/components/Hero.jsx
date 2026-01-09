import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
      eyebrow: 'Bespoke Architectural Excellence',
      title: 'CreativeNconcepts',
      subtitle: 'Designing Spaces. Creating Experiences.'
    },
    {
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2000',
      eyebrow: 'Curated Interiors',
      title: 'Elevated Living Spaces',
      subtitle: 'Kitchen, wardrobe, and living solutions tailored to you.'
    },
    {
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=2000',
      eyebrow: 'From Vision To Reality',
      title: 'Luxury Meets Function',
      subtitle: 'Crafted details, thoughtful materials, timeless design.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goToSlide = useCallback(
    (index) => {
      const nextIndex = (index + slides.length) % slides.length;
      setCurrentSlide(nextIndex);
    },
    [slides.length]
  );

  const handleNext = () => goToSlide(currentSlide + 1);
  const handlePrev = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, [slides.length]);

  useEffect(() => {
    setAnimKey((key) => key + 1);
  }, [currentSlide]);

  const activeSlide = slides[currentSlide];

  return (
    <section className="hero-section position-relative text-white overflow-hidden d-flex align-items-center">
      <div className="hero-slides position-absolute top-0 start-0 w-100 h-100">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.image}
            className="hero-slide"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={index === currentSlide ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
          >
            <img
              src={slide.image}
              className="cover-image"
              alt={slide.title}
            />
          </motion.div>
        ))}
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay" />
      </div>
      <div className="container position-relative py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <div key={animKey} className="hero-copy">
              <span className="eyebrow d-block text-light mb-4 hero-anim hero-anim-1">{activeSlide.eyebrow}</span>
              <h1 className="display-3 fw-bold font-serif mb-3 hero-anim hero-anim-2">
                {activeSlide.title}
              </h1>
              <p className="lead text-light mb-4 text-uppercase hero-anim hero-anim-3">
                {activeSlide.subtitle}
              </p>
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 hero-anim hero-anim-4">
                <Link to="/contact" className="btn btn-light px-4 py-3 text-uppercase fw-bold">
                  Book Free Consultation
                </Link>
                <Link to="/projects" className="btn btn-outline-light px-4 py-3 text-uppercase fw-bold">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="hero-controls d-none d-md-flex">
              <button type="button" className="hero-control-btn" aria-label="Previous slide" onClick={handlePrev}>
                <FaChevronLeft />
              </button>
              <button type="button" className="hero-control-btn" aria-label="Next slide" onClick={handleNext}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
