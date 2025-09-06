import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../data/experience';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.scss';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Briefcase className={styles.icon} size={28} />
          <h2 className={styles.title}>Experience</h2>
        </div>
        
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