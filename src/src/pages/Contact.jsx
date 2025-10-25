import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme.jsx';
import BackButton from '../components/BackButton';
import styles from '../styles/Contact.module.css';

const Contact = () => {
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

      <h1>Contact Info</h1>

      <motion.main 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className={styles.connectGrid}>
          <article className={styles.infoSection}>
            <ul className={styles.detailsList}>
              <li className={styles.detailItem}>
                <img src="/src/assets/images/home.png" alt="Home" className={styles.icon} />
                <span className={styles.detailText}>
                  <a href="https://www.google.com/maps/search/?api=1&query=Magnus+Barfots+Gate+35,+5011+Bergen" target="_blank" rel="noopener noreferrer">
                    Magnus Barfots Gate 35
                  </a>
                </span>
              </li>
              <li className={styles.detailItem}>
                <img src="/src/assets/images/phone.png" alt="Phone" className={styles.icon} />
                <span className={styles.detailText}>
                  <a href="tel:+4748360425">+47 483 60 425</a>
                </span>
              </li>
              <li className={styles.detailItem}>
                <img src="/src/assets/images/mail.png" alt="Mail" className={styles.icon} />
                <span className={styles.detailText}>
                  <a href="mailto:olinefk@outlook.com">olinefk@outlook.com</a>
                </span>
              </li>
            </ul>
          </article>

          <section className={styles.socialMedia}>
            <a href="https://www.linkedin.com/in/oline-kleiven-99852b264" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="/src/assets/images/LinkedIn.jpg" alt="LinkedIn" className={styles.socialIconImg} />
            </a>
            <a href="https://www.facebook.com/oline.kleiven/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="/src/assets/images/Facebook.png" alt="Facebook" className={styles.socialIconImg} />
            </a>
            <a href="https://www.instagram.com/olinekleiven/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="/src/assets/images/INSTA.png" alt="Instagram" className={styles.socialIconImg} />
            </a>
            <a href="https://github.com/olinekleiven" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="/src/assets/images/github.png" alt="GitHub" className={styles.socialIconImg} />
            </a>
          </section>
        </section>
      </motion.main>
    </div>
  );
};

export default Contact;
