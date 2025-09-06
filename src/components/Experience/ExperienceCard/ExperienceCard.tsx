import React from 'react';
import { ExternalLink } from 'lucide-react';
import SkillTag from '../../SkillTag/SkillTag';
import { type ExperienceItem } from '../../../types';
import styles from './ExperienceCard.module.scss';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div 
      className={styles.card}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={styles.marker} />
      
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.company}>
              {experience.companyUrl ? (
                <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                  {experience.company}
                  <ExternalLink size={14} className={styles.linkIcon} />
                </a>
              ) : (
                experience.company
              )}
            </h3>
            <p className={styles.role}>{experience.role}</p>
          </div>
          <div className={styles.meta}>
            <p className={styles.period}>{experience.period}</p>
            <p className={styles.location}>{experience.location}</p>
          </div>
        </div>
        
        <p className={styles.description}>{experience.description}</p>
        
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