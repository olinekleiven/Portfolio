import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme.jsx';
import BackButton from '../components/BackButton';
import styles from '../styles/Jobs.module.css';

const Jobs = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const jobs = [
    {
      year: '2025',
      title: 'Statens Vegvesen',
      description: 'I had a summer job as an consultant at Statens Vegvesen. I worked within the transport administration west 1 within "Transport og samfunn", and worked with water obstacles for fish and mapping these. In addition, I digitized an application process for roadside parking. I also registered roadside parking and service signs.',
      side: 'right'
    },
    {
      year: '2024',
      title: 'DigDir',
      description: 'I had a summer job as an IT consultant at the Digitization Directorate, also called "Digicamp". I worked for eight weeks with seven others on a project about the "EU Digital Wallet".',
      side: 'left'
    },
    {
      year: '2020-2023',
      title: 'Assistant nurse',
      description: 'I Worked as an assistant nurse at "Leikanger Sjukeheim" as a substitute.',
      side: 'right'
    },
    {
      year: '2022',
      title: 'Environmental Worker',
      description: 'I have worked as an environmental worker at Leikanger Ungdomsskule, and as an education assistent.',
      side: 'left'
    },
    {
      year: '2022',
      title: 'Substitute Teacher',
      description: 'I worked as a substitute teacher in January 2022 and volunteered for the same role on later occasions.',
      side: 'right'
    },
    {
      year: '2018',
      title: 'Leikanger Motel',
      description: 'I had a summerjob as a cleaner and receptionist at "Leikanger Motel". This was my first summerjob, and I started as a 15 years old.',
      side: 'left'
    }
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

      <h1 className={styles.title}>Job experience</h1>

      <main className={styles.main}>
        <section className={styles.timeline}>
          {jobs.map((job, index) => (
            <motion.article 
              key={`${job.year}-${job.title}`}
              className={`${styles.timelineContainer} ${styles[job.side]}`}
              initial={{ opacity: 0, x: job.side === 'left' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.content}>
                <header className={styles.jobHeader}>
                  <h2 className={styles.year}>{job.year}</h2>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                </header>
                <p className={styles.description}>{job.description}</p>
              </div>
            </motion.article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Jobs;