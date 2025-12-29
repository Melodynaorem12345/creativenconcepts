
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ isOpen, imageSrc, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && imageSrc && (
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
            className="position-absolute top-0 end-0 m-4 btn btn-link text-white fs-2"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
          >
            &times;
          </motion.button>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={imageSrc} alt="Preview" className="img-fluid h-100 w-100 object-contain shadow" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
