import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import PageHeader from '@shared/components/PageHeader';
import contactBg from '@assets/images/banners/contact-bg.jpg';
import contactHero from '@assets/images/banners/contact-us-image.jpg';
import { apiGet, apiPost } from '../../services/api';

const Contact = () => {
    const fallbackSettings = {
      address: 'Shed No. 9, Ramaraju Garden, Ganapathipura Kanakapura Road, Bengaluru, Karnataka, 560062',
      mobile: '+91 98765 43210',
      email: 'hello@creativenconcepts.com'
    };
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    const [errors, setErrors] = useState({});
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [submitError, setSubmitError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [settings, setSettings] = useState(fallbackSettings);
    const [settingsError, setSettingsError] = useState(null);

    useEffect(() => {
      apiGet('/api/v1/company-settings').then(({ data, error }) => {
        if (data) {
          setSettings({ ...fallbackSettings, ...data });
        }
        if (error) {
          console.error('Company settings error:', error);
          setSettingsError('Unable to load company details');
        }
      });
    }, []);

    const infoItems = useMemo(() => ([
      { key: 'location', label: 'Our Studio', val: settings.address || fallbackSettings.address, Icon: FiMapPin },
      { key: 'email', label: 'Email Us', val: settings.email || fallbackSettings.email, Icon: FiMail },
      { key: 'phone', label: 'Call Us', val: settings.mobile || fallbackSettings.mobile, Icon: FiPhone }
    ]), [settings, fallbackSettings.address, fallbackSettings.email, fallbackSettings.mobile]);

    const leftVariant = {
      hidden: { opacity: 0, x: -80 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } }
    };

    const rightVariant = {
      hidden: { opacity: 0, x: 80 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.08 } }
    };

    const detailsVariant = {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.35 } }
    };

    const getErrorText = (value) => (Array.isArray(value) ? value.join(' ') : value);

    const validate = () => {
      const nextErrors = {};
      if (!formData.name.trim()) {
        nextErrors.name = 'Please enter your full name.';
      }
      if (!formData.email.trim()) {
        nextErrors.email = 'Email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        nextErrors.email = 'Enter a valid email address.';
      }
      if (!formData.message.trim()) {
        nextErrors.message = 'Tell us about your project.';
      }
      return nextErrors;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[name];
          return updated;
        });
      }
      if (submittedMessage) setSubmittedMessage('');
      if (submitError) setSubmitError('');
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (isSubmitting) return;
      setSubmittedMessage('');
      setSubmitError('');
      const validationErrors = validate();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) return;

      setIsSubmitting(true);
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      };
      const { data, error, errors: apiErrors } = await apiPost('/api/v1/contact-us', payload);
      setIsSubmitting(false);

      if (apiErrors && Object.keys(apiErrors).length) {
        setErrors(apiErrors);
        return;
      }

      if (error) {
        console.error('Lead submission error:', error);
        setSubmitError('Something went wrong. Please try again later.');
        return;
      }

      const successText = data?.message || 'Thanks for reaching out. We’ll get back to you shortly.';
      setSubmittedMessage(successText);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

  return (
    <div className="bg-white">
      <PageHeader
        title="Contact Us"
        image={contactBg}
        imagePosition="center center"
        overlay={true}
        showSubtitle={false}
        showDescription={false}
      />

      <section className="section-padding">
        <div className="container">
          <div className="row g-4 align-items-stretch">
             <div className="col-lg-6">
              <motion.div
                variants={leftVariant}
                initial="hidden"
                animate="visible"
                className="h-100 overflow-hidden pe-5"
                aria-hidden="true"
              >
                <img
                  src={contactHero}
                  alt="Contact us image"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </motion.div>
            </div>
            <div className="col-lg-6 d-flex flex-column">
              <motion.div variants={rightVariant} initial="hidden" animate="visible" className="mb-2 section-title">
                <h2 className="contact-head">Designing <span className='fst-italic text-brand-muted'>Your Future</span> Starts Here.</h2>
                <p className="text-brand-muted mb-0">
                  Our principal architects are available for a detailed one-on-one session to understand your requirements.
                </p>
              </motion.div>

              <motion.div
                variants={rightVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.12 }}
                className="card border-0 flex-grow-1"
              >
                <div className="card-body h-100 d-flex flex-column p-0">
                  <form className="row g-3 mt-auto contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <div className="col-md-6">
                      <label className="form-label small text-uppercase fw-semibold text-brand-muted">Name</label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      />
                      {errors.name && (
                        <div id="contact-name-error" className="invalid-feedback d-block small">
                          {getErrorText(errors.name)}
                        </div>
                      )}
                    </div>
                    <input type="text" name="company" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />

                    <div className="col-md-6">
                      <label className="form-label small text-uppercase fw-semibold text-brand-muted">Email</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="email@address.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      />
                      {errors.email && (
                        <div id="contact-email-error" className="invalid-feedback d-block small">
                          {getErrorText(errors.email)}
                        </div>
                      )}
                    </div>
                    <div className="col-12">
                      <label className="form-label small text-uppercase fw-semibold text-brand-muted">Service Required</label>
                      <select
                        className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? 'contact-service-error' : undefined}
                      >
                        <option value="">Select a service</option>
                        <option value="Residential Interior">Residential Interior</option>
                        <option value="Commercial Space">Commercial Space</option>
                        <option value="Modular Kitchen">Modular Kitchen</option>
                        <option value="Architecture Service">Architecture Service</option>
                      </select>
                      {errors.service && (
                        <div id="contact-service-error" className="invalid-feedback d-block small">
                          {getErrorText(errors.service)}
                        </div>
                      )}
                    </div>
                    <div className="col-12">
                      <label className="form-label small text-uppercase fw-semibold text-brand-muted">Project Message</label>
                      <textarea
                        rows={4}
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        placeholder="Tell us about your space..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      />
                      {errors.message && (
                        <div id="contact-message-error" className="invalid-feedback d-block small">
                          {getErrorText(errors.message)}
                        </div>
                      )}
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-brand w-100 py-3 text-uppercase" disabled={isSubmitting} aria-busy={isSubmitting}>
                        Submit Request
                      </button>
                      {submittedMessage && (
                        <div className="alert alert-success rounded-3 mt-3 mb-0 py-2 px-3 small" role="status">
                          {submittedMessage}
                        </div>
                      )}
                      {submitError && (
                        <div className="alert alert-danger rounded-3 mt-3 mb-0 py-2 px-3 small" role="status">
                          {submitError}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        className="section-padding pt-0"
        variants={detailsVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="row g-3">
            {infoItems.map((item) => (
              <div className="col-12 col-md-6 col-lg-4 custom-apply" key={item.key}>
                <div className="p-4 h-100 contact-info-item d-flex align-items-start gap-3">
                  <div className="text-brand icon-box" aria-hidden="true">
                    <item.Icon />
                  </div>
                  <div>
                    <h6 className="info-heading mb-1">{item.label}</h6>
                    <p className="info-subheading mb-0">{item.val}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {settingsError && (
            <p className="text-warning small mt-3 mb-0">
              ⚠️ Some content may be outdated. Please try again later.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
