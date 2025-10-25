import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme.jsx';
import SearchComponent from '../components/SearchComponent';
import styles from '../styles/Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navItems = [
    { path: '/about', text: 'About Me' },
    { path: '/contact', text: 'Contact' },
    { path: '/skills', text: 'Skills' },
    { path: '/jobs', text: 'Jobs' },
    { path: '/gallery', text: 'Gallery' },
    { path: '/hobbies', text: 'Hobbies' }
  ];

  const zoomAndNavigate = (path) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <motion.header 
        className={`${styles.header} ${isTransitioning ? styles.fadeOut : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Explore My Portfolio</h1>
      </motion.header>

      <section className={styles.navigation}>
        <motion.div 
          className={`${styles.circleNav} ${isTransitioning ? styles.zooming : ''}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.path}
              href={item.path}
              className={styles.navItem}
              onClick={(e) => {
                e.preventDefault();
                zoomAndNavigate(item.path);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && zoomAndNavigate(item.path)}
              aria-label={`Navigate to ${item.text}`}
            >
              {item.text}
            </motion.a>
          ))}

          <div className={styles.profileImageContainer}>
            <img 
              src="/src/assets/images/profil.png" 
              alt="Profile Image" 
              className={`${styles.profileImage} ${isTransitioning ? styles.fadeOut : ''}`}
            />
          </div>
        </motion.div>
      </section>

      <SearchComponent />
    </div>
  );
};

export default Home;
