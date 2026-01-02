import React from 'react';
import { motion } from 'framer-motion';

// ✅ Vite-safe absolute path
const logos = Object.values(
  import.meta.glob(
    '/src/assets/images/material-brands/*.{png,jpg,jpeg,svg}',
    {
      eager: true,
      import: 'default',
    }
  )
).map((src, i) => ({
  src,
  name: `brand-${i}`,
}));

const Brands = () => {
  // 🔍 Debug safety
  console.log('Loaded brand logos:', logos);

  if (!logos.length) return null;

  return (
    <motion.section
      className="brands-section section-padding bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="section-heading-row mb-4 d-flex flex-column align-items-center gap-3">
          <span className="section-heading d-block">Materials & Brands</span>
          <h3 className="display-5 font-serif fw-semibold mb-4">Trusted partners we work with</h3>
        </div>

        <div className="brands-grid">
          {logos.map((item, i) => (
            <motion.div
              key={i}
              className="brand-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <img
                src={item.src}
                alt={item.name}
                className="brand-logo"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Brands;
