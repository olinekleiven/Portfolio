import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme.jsx';
import BackButton from '../components/BackButton';
import styles from '../styles/Hobbies.module.css';

const Hobbies = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const skiingRef = useRef(null);
  const surfingRef = useRef(null);
  const footballRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      <BackButton />

      <motion.main 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.introSection}>
          <h1>My Hobbies</h1>
          <p>When I am not studying, I like to fill my sparce time with different hobbies. This makes me happy, inspires me, and fill my spare time with energy and passion!</p>
          
          <div className={styles.buttonContainer}>
            <motion.button 
              className={styles.hobbyButton}
              onClick={() => scrollToSection(skiingRef)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skiing
            </motion.button>
            <motion.button 
              className={styles.hobbyButton}
              onClick={() => scrollToSection(surfingRef)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Surfing
            </motion.button>
            <motion.button 
              className={styles.hobbyButton}
              onClick={() => scrollToSection(footballRef)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Football
            </motion.button>
          </div>
        </div>

        {/* Skiing Section */}
        <section ref={skiingRef} className={styles.hobbySection}>
          <h2>Skiing</h2>
          <p>Skiing connects me to nature, and nothing beats the feeling of gliding through powder snow.</p>
          <p><strong>Why do I like it?</strong> Its fun, and you can go very fast if you want to</p>
          <p><strong>How long have i liked it?</strong> Always liked to, but got a bigger interest after "Folkehøgskule"</p>
          <div className={styles.sportImage} style={{backgroundImage: "url('/src/assets/images/skiing.jpg')"}} aria-label="Skiing"></div>
        </section>

        {/* Surfing Section */}
        <section ref={surfingRef} className={styles.hobbySection}>
          <h2>Surfing</h2>
          <p>Surfing is really fun, i and learned it on Folkehøgskule. I really love to bath with the suit after i have surfed aswell. This picture is captured i Lofoten, a magic moment after a suring lesson.</p>
          <p><strong>Why do I like it?</strong> Its really fun to glide on waves</p>
          <p><strong>How long have i liked it?</strong> Since 2021, when i managed to stand on the board</p>
          <div className={styles.sportImage} style={{backgroundImage: "url('/src/assets/images/IMG_5081 3.jpg')"}} aria-label="Swimming"></div>
        </section>

        {/* Football Section */}
        <section ref={footballRef} className={styles.hobbySection}>
          <h2>Football</h2>
          <p>Football is my passion. I love the team spirit and the excitement of the game. I play on a team named BSI here in Bergen with other students.</p>
          <p><strong>Why do I like it?</strong> It's simply fun and keeps me active!</p>
          <p><strong>How long have i liked it?</strong> since i was 6 years old</p>
          <div className={styles.sportImage} style={{backgroundImage: "url('/src/assets/images/bsi_football.jpg')"}} aria-label="Football"></div>
        </section>

        {/* Scroll to top button */}
        <motion.button 
          className={styles.scrollToTop}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      </motion.main>
    </div>
  );
};

export default Hobbies;