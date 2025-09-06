import React from 'react';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import { experienceData } from '../../data/experience';
import styles from './Experience.module.scss';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        
        <div className={styles.timeline}>
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;