import React from 'react';
import styles from './Education.module.scss';

const Education: React.FC = () => {
  const coursework = [
    "Data Structures", "Algorithms", "Operating Systems", "Networks", "Databases", "Concurrency", "Systems Programming"
  ];
  
  const concepts = [
    "Distributed Systems", "Fullstack Development", "System Design", "Machine Learning", "App Development", "Agile Software Development Life Cycle"
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        
        <div className={styles.content}>
          <div className={styles.timeline}>
            <div className={styles.marker} />
            <div className={styles.details}>
              <h3 className={styles.university}>University of Waterloo</h3>
              <p className={styles.degree}>Bachelor of Applied Science in Computer Engineering</p>
              <p className={styles.period}>Sept 2022 – Apr 2027 | Waterloo, ON</p>
              
              <div className={styles.academicContent}>
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Coursework</h4>
                  <div className={styles.items}>
                    {coursework.map((course) => (
                      <span key={course} className={styles.item}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Concepts</h4>
                  <div className={styles.items}>
                    {concepts.map((concept) => (
                      <span key={concept} className={styles.item}>
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;