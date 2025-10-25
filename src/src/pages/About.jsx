import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme.jsx';
import BackButton from '../components/BackButton';
import styles from '../styles/About.module.css';

const About = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <BackButton />

      <motion.main 
        className={styles.gridContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.section 
          className={styles.textContent}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>So, who am I?</h1>
          <article>
            <p>
              Hi, my name is Oline, I am 22 years old, and I am from Leikanger in Sogn. 
              I am a student at the University of Bergen with a creative mind and a passion for visual design.
              I like to make things that look visually beautiful, and that can also make it easier for everyone to use. 
              I can find interest in a lot of things, as soon as something about making things 
              look visually good I find this interesting, everything from making maps in ArcGIS to creating web pages in HTML. 
              My passion is universal design.
            </p>
          </article>
          
          <motion.button 
            className={styles.contactButton}
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Navigate to contact page"
          >
            Contact me
          </motion.button>
        </motion.section>

        <motion.figure 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src="/src/assets/images/profil.png" 
            alt="Profile Image" 
            className={styles.profileImage}
            loading="lazy"
          />
        </motion.figure>
      </motion.main>
    </div>
  );
};

export default About;
