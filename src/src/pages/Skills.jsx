import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme.jsx';
import BackButton from '../components/BackButton';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const skills = [
    {
      title: 'Frontend Development',
      description: 'HTML, CSS, JavaScript, React',
      icon: '💻',
      projects: [
        {
          title: 'Drikkelek',
          description: 'Interactive drinking game with JavaScript',
          link: '/Pages/Drikkelek/index.html'
        }
      ]
    },
    {
      title: 'Web Design',
      description: 'UI/UX, Responsive Design, Visual Design',
      icon: '🎨',
      projects: [
        {
          title: 'Website of another student',
          description: 'Student website showcase',
          link: '/Pages/Styrk/Student.html'
        }
      ]
    },
    {
      title: 'Learning Tools',
      description: 'Educational applications and study aids',
      icon: '📚',
      projects: [
        {
          title: 'Diagram Flashcards',
          description: 'System development exam flashcards',
          link: '/Pages/Flashcards/flashcards.html'
        },
        {
          title: 'Long task flashcards',
          description: 'Long task question flashcards',
          link: '/Pages/Longtask/Longtask.html'
        }
      ]
    },
    {
      title: 'Coming Soon',
      description: 'More projects will be added here',
      icon: '🚀',
      projects: []
    }
  ];

  const handleProjectClick = (project) => {
    window.open(project.link, '_blank', 'noopener,noreferrer');
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
        <h1>Skills</h1>
        <p>Explore my technical skills and project portfolio. Each category contains related projects and assignments.</p>
        
        <section className={styles.skillsContainer}>
          {skills.map((skill, skillIndex) => (
            <motion.article 
              key={skill.title}
              className={styles.skillCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
            >
              <div className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillIconContainer}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                  </div>
                  <div className={styles.skillInfo}>
                    <h2 className={styles.skillTitle}>{skill.title}</h2>
                    <p className={styles.skillDescription}>{skill.description}</p>
                    <div className={styles.projectCount}>
                      {skill.projects.length} project{skill.projects.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
                
                <div className={styles.projectsSection}>
                  <h3 className={styles.projectsTitle}>Projects</h3>
                  <div className={styles.projectsGrid}>
                    {skill.projects.map((project, projectIndex) => (
                        <motion.div
                          key={project.title}
                          className={styles.projectCard}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: (skillIndex * 0.1) + (projectIndex * 0.05) }}
                          onClick={() => handleProjectClick(project)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && handleProjectClick(project)}
                        >
                          <div className={styles.projectIconContainer}>
                            <img 
                              src="/src/assets/images/folder.png" 
                              alt={project.title}
                              className={styles.projectIcon}
                            />
                          </div>
                          <div className={styles.projectInfo}>
                            <h4 className={styles.projectTitle}>{project.title}</h4>
                            <p className={styles.projectDescription}>{project.description}</p>
                          </div>
                          <div className={styles.projectArrow}>→</div>
                        </motion.div>
                    ))}
                    
                    {skill.projects.length === 0 && (
                      <div className={styles.emptyState}>
                        <span className={styles.emptyIcon}>📁</span>
                        <p>No projects yet</p>
                        <small>More projects coming soon...</small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </motion.main>
    </div>
  );
};

export default Skills;