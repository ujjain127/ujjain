import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .min(10, 'Must be at least 10 characters')
        .required('Required')
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        // Add your form submission logic here
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        setSubmitStatus('success');
        resetForm();
      } catch (error) {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
    }
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="contact" id="contact">
      <motion.div 
        className="contact-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div 
          className="contact-header"
          variants={containerVariants}
        >
          <span className="section-subtitle">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description">
            Whether you're interested in my projects, have a collaboration idea, 
            or just want to connect, feel free to reach out through any of these platforms.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.form 
            className="contact-form"
            onSubmit={formik.handleSubmit}
            variants={containerVariants}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...formik.getFieldProps('name')}
                className={formik.touched.name && formik.errors.name ? 'error' : ''}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="error-message">{formik.errors.name}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...formik.getFieldProps('email')}
                className={formik.touched.email && formik.errors.email ? 'error' : ''}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error-message">{formik.errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                {...formik.getFieldProps('message')}
                className={formik.touched.message && formik.errors.message ? 'error' : ''}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="error-message">{formik.errors.message}</div>
              )}
            </div>

            <motion.button 
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus && (
              <motion.div
                className={`submit-status ${submitStatus}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {submitStatus === 'success' 
                  ? 'Message sent successfully!' 
                  : 'Error sending message. Please try again.'}
              </motion.div>
            )}
          </motion.form>

          <motion.div 
            className="contact-info"
            variants={containerVariants}
          >
            <div className="info-item">
              <h3>Email</h3>
              <p>ujjainsriganesh@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
            <div className="info-item">
              <h3>Social Media</h3>
              <div className="social-links">
                <a 
                  href="https://github.com/ujjain127" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ujjain-s-41b577242/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a 
                  href="https://www.instagram.com/ujjain127._/#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact; 