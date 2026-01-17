import React, { useEffect, useMemo, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { apiGet } from '../../services/api';

const FloatingWhatsapp = () => {
  const fallbackMobile = '+919844036316';

  const [mobile, setMobile] = useState(fallbackMobile);

  useEffect(() => {
    apiGet('/api/v1/company-settings').then(({ data, error }) => {
      if (data?.mobile) {
        setMobile(data.mobile);
      }
      if (error) {
        console.error('WhatsApp mobile fetch error:', error);
      }
    });
  }, []);

  /**
   * WhatsApp requires digits only
   * +91 98440 36316 → 919844036316
   */
  const whatsappNumber = useMemo(() => {
    if (!mobile) return null;
    return mobile.replace(/[^\d]/g, '');
  }, [mobile]);

  if (!whatsappNumber) return null;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsapp;
