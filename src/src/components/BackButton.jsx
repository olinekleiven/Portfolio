import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles/BackButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <motion.button
      className={styles.backButton}
      onClick={handleBack}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Back to home section"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className={styles.arrowTop}></span>
      <span className={styles.arrowBottom}></span>
    </motion.button>
  );
};

export default BackButton;
