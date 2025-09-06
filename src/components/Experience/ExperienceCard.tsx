import React from 'react';
import SkillTag from '../SkillTag/SkillTag';
import type { ExperienceItem } from '../../types';
import styles from './ExperienceCard.module.scss';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div 
      className={styles.card}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={styles.marker} />
      
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.company}>{experience.company}</h3>
            <p className={styles.role}>{experience.role}</p>
          </div>
          <div className={styles.meta}>
            <p className={styles.period}>{experience.period}</p>
            <p className={styles.location}>{experience.location}</p>
          </div>
        </div>
        
        <ul className={styles.highlights}>
          {experience.highlights.map((highlight, idx) => (
            <li key={idx} className={styles.highlight}>
              <span className={styles.bullet} />
              {highlight}
            </li>
          ))}
        </ul>
        
        <div className={styles.skills}>
          {experience.skills.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;