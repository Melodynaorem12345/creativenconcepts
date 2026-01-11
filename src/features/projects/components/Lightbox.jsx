
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ isOpen, items = [], currentIndex = 0, onClose, onPrev, onNext }) => {
  const [zoomed, setZoomed] = useState(false);
  const safeIndex = useMemo(() => Math.min(currentIndex, Math.max(items.length - 1, 0)), [currentIndex, items.length]);
  const current = useMemo(() => items[safeIndex], [items, safeIndex]);
  const canPrev = items.length > 1 && safeIndex > 0;
  const canNext = items.length > 1 && safeIndex < items.length - 1;
  const imageSrc = useMemo(() => {
    if (!current?.image) return null;
    if (typeof current.image === 'string' && current.image.trim() === '') return null;
    return current.image;
  }, [current]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lightbox-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-95 p-3 p-md-5"
          onClick={onClose}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="position-absolute top-0 end-0 m-4 btn btn-light rounded-circle z-1 shadow"
            style={{ width: 44, height: 44, padding: 0 }}
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            aria-label="Close preview"
          >
            ×
          </motion.button>

          <div className="position-absolute top-50 start-0 translate-middle-y">
            <button
              className="btn btn-outline-light"
              disabled={!canPrev}
              onClick={(e) => { e.stopPropagation(); if (canPrev) onPrev(); }}
            >
              ‹
            </button>
          </div>
          <div className="position-absolute top-50 end-0 translate-middle-y">
            <button
              className="btn btn-outline-light"
              disabled={!canNext}
              onClick={(e) => { e.stopPropagation(); if (canNext) onNext(); }}
            >
              ›
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
            onClick={(e) => e.stopPropagation()}
          >
            {imageSrc ? (
              <motion.img
                src={imageSrc}
                alt={current.title || 'Preview'}
                className="img-fluid h-100 w-100"
                loading="lazy"
                style={{ objectFit: zoomed ? 'contain' : 'cover', transition: 'transform 0.2s ease' }}
                animate={{ scale: zoomed ? 1.1 : 1 }}
              />
            ) : (
              <div className="d-flex align-items-center justify-content-center w-100 h-100 text-white-50">
                Image unavailable
              </div>
            )}
            <div className="position-absolute bottom-0 start-0 end-0 p-3 text-center text-white bg-gradient">
              <div className="small text-uppercase">{current.category}</div>
              <div className="fw-bold">{current.title}</div>
            </div>
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 end-0 m-3"
              onClick={() => setZoomed((z) => !z)}
            >
              {zoomed ? 'Fit' : 'Zoom'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
