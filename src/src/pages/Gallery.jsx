import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme.jsx';
import BackButton from '../components/BackButton';
import { LazyImage } from '../utils/lazyImage.jsx';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  // All images from the original gallery
  const galleryImages = [
    { src: '/src/assets/images/split_board.jpg', alt: 'Me on splitboard', size: 'normal' },
    { src: '/src/assets/images/marius_ski.jpg', alt: 'Marius on ski', size: 'wide' },
    { src: '/src/assets/images/ski_orsta.jpg', alt: 'Ski in Ørsta', size: 'normal' },
    { src: '/src/assets/images/lars_and_me.jpg', alt: 'Me and my little brother on ski', size: 'tall' },
    { src: '/src/assets/images/Hoddevika.jpg', alt: 'Me in Hoddavika', size: 'large' },
    { src: '/src/assets/images/aleksandra.jpg', alt: 'Me and Aleksandra', size: 'normal' },
    { src: '/src/assets/images/Lofoten.jpg', alt: 'Ski in Lofoten', size: 'normal' },
    { src: '/src/assets/images/nordnes.jpg', alt: 'View to Nordes', size: 'normal' },
    { src: '/src/assets/images/party.jpg', alt: 'Me and my friend Aleksandra', size: 'normal' },
    { src: '/src/assets/images/skiing.jpg', alt: 'Me skiing down from Skogshorn', size: 'large' },
    { src: '/src/assets/images/marius_and_me.jpg', alt: 'Me and my boyfriend', size: 'tall' },
    { src: '/src/assets/images/ida.jpg', alt: 'Me and Ida', size: 'normal' },
    { src: '/src/assets/images/me_holding_surfboard.jpg', alt: 'Me holding surfboard', size: 'large' },
    { src: '/src/assets/images/blaafjell.jpg', alt: 'Mari on Blåfjell', size: 'wide' },
    { src: '/src/assets/images/me_and_vilde.jpg', alt: 'Me and Vilde', size: 'normal' },
    { src: '/src/assets/images/liverpool.jpg', alt: 'We like Liverpool', size: 'normal' },
    { src: '/src/assets/images/me_and_mom.jpg', alt: 'Me and mom', size: 'normal' },
    { src: '/src/assets/images/skiiiiii.jpg', alt: 'Me on ski', size: 'normal' },
    { src: '/src/assets/images/fam.jpg', alt: 'Family', size: 'wide' },
    { src: '/src/assets/images/meonski.jpg', alt: 'Me on ski', size: 'normal' },
    { src: '/src/assets/images/top.jpg', alt: 'Me and Aleksandra made this top', size: 'large' },
    { src: '/src/assets/images/nordnes.jpg', alt: 'View from Nordnes', size: 'normal' },
    { src: '/src/assets/images/ski_lines.jpg', alt: 'Blåfjell', size: 'wide' },
    { src: '/src/assets/images/parents.jpg', alt: 'Mom and dad', size: 'wide' },
    { src: '/src/assets/images/skiing_up.jpg', alt: 'Skiing at home', size: 'normal' },
    { src: '/src/assets/images/marius_jakob.jpg', alt: 'Some cool guys in Hoddevika', size: 'tall' },
    { src: '/src/assets/images/digdir.jpg', alt: 'Digdir camp', size: 'normal' },
    { src: '/src/assets/images/iver.jpg', alt: 'IverPiver', size: 'normal' },
    { src: '/src/assets/images/hemsedal.jpg', alt: 'Drowning in Hemsedal', size: 'large' },
    { src: '/src/assets/images/klatre.jpg', alt: 'Via ferrata in Stryn', size: 'tall' },
    { src: '/src/assets/images/skydive.jpg', alt: 'Skydive', size: 'wide' },
    { src: '/src/assets/images/hiking.jpg', alt: 'Me', size: 'normal' },
    { src: '/src/assets/images/nordnes_bath.jpg', alt: 'Nordnes badet', size: 'normal' },
    { src: '/src/assets/images/17MAI.jpg', alt: '17. Mai', size: 'large' },
    { src: '/src/assets/images/IMG_5079 2.jpg', alt: 'Swimming after surfing', size: 'normal' },
    { src: '/src/assets/images/bsi.jpg', alt: 'BSI', size: 'wide' },
    { src: '/src/assets/images/summer_party.jpg', alt: 'Garden-party 17. Mai', size: 'normal' },
    { src: '/src/assets/images/beach_lofoten.jpg', alt: 'Me in Lofoten', size: 'large' },
    { src: '/src/assets/images/veronica.jpg', alt: 'Me and Veronica', size: 'normal' },
    { src: '/src/assets/images/bunad.jpg', alt: 'Bunad', size: 'tall' },
    { src: '/src/assets/images/downhill.jpg', alt: 'Downhill', size: 'wide' },
    { src: '/src/assets/images/flakstad.jpg', alt: 'Flakstad in Lofoten', size: 'large' },
    { src: '/src/assets/images/saudehorn.jpg', alt: 'Saudehornet', size: 'normal' },
    { src: '/src/assets/images/melshornet.jpg', alt: 'Melshornet', size: 'wide' },
    { src: '/src/assets/images/kaiakk.jpg', alt: 'Folkehøgskule', size: 'normal' },
    { src: '/src/assets/images/hermini.jpg', alt: 'Drowning in Sogndal', size: 'large' },
    { src: '/src/assets/images/sofie.jpg', alt: 'Sofie', size: 'normal' },
    { src: '/src/assets/images/price.jpg', alt: 'Oda and Vilde in BSI', size: 'normal' },
    { src: '/src/assets/images/mememe.jpg', alt: 'Me in Mallorca', size: 'tall' },
    { src: '/src/assets/images/soller.jpg', alt: 'Mallorca', size: 'normal' },
    { src: '/src/assets/images/bsi_football.jpg', alt: 'BSI', size: 'wide' },
    { src: '/src/assets/images/slogen.jpg', alt: 'Mountain-hiking', size: 'normal' },
    { src: '/src/assets/images/loulou.jpg', alt: 'Some friends', size: 'wide' },
    { src: '/src/assets/images/oorsta.jpg', alt: 'Reunion', size: 'normal' },
    { src: '/src/assets/images/IMG_5076.jpg', alt: 'Lofoten bath', size: 'normal' },
  ];

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
        <h1>Gallery</h1>
        
        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`${styles.galleryItem} ${styles[image.size]}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <LazyImage 
                src={image.src} 
                alt={image.alt}
                className={styles.galleryImage}
              />
              <div className={styles.caption}>{image.alt}</div>
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
};

export default Gallery;
