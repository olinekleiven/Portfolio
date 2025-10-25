import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme.jsx';
import styles from '../styles/Welcome.module.css';

const Welcome = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  const handleTouchStart = (event) => {
    const startY = event.touches[0].clientY;
    event.target.startY = startY;
  };

  const handleTouchEnd = (event) => {
    const endY = event.changedTouches[0].clientY;
    const startY = event.target.startY;
    if (startY - endY > 50) {
      startTransition();
    }
  };

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      startTransition();
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <motion.section 
        className={styles.welcomeSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm Oline Kleiven</h1>
        <p>Click the arrow or swipe down to continue</p>
      </motion.section>

      <motion.section 
        className={styles.customArrow}
        onClick={startTransition}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && startTransition()}
        aria-label="Continue to portfolio"
      >
        <span className={styles.arrow}></span>
      </motion.section>

      <motion.div 
        className={`${styles.overlay} ${isTransitioning ? styles.active : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isTransitioning ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Welcome;
