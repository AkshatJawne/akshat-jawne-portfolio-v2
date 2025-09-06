import React from 'react';
import { GraduationCap } from 'lucide-react';
import styles from './Education.module.scss';

const Education: React.FC = () => {
  const courses = [
    "Data Structures", "Algorithms", "Distributed Systems", 
    "Networks", "Databases", "Operating Systems", 
    "Concurrency", "Fullstack Development", "Machine Learning"
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <GraduationCap className={styles.icon} size={28} />
          <h2 className={styles.title}>Education</h2>
        </div>
        
        <div className={styles.content}>
          <div className={styles.timeline}>
            <div className={styles.marker} />
            <div className={styles.details}>
              <h3 className={styles.university}>University of Waterloo</h3>
              <p className={styles.degree}>Bachelor of Applied Science in Computer Engineering</p>
              <p className={styles.period}>Sept 2022 – Apr 2027 | Waterloo, ON</p>
              
              <div className={styles.coursework}>
                <p className={styles.courseTitle}>Core Coursework:</p>
                <div className={styles.courses}>
                  {courses.map((course) => (
                    <span key={course} className={styles.course}>
                      {course}
                    </span>
                  ))}
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