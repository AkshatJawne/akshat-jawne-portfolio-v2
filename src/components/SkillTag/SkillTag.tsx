import React from 'react';
import styles from './SkillTag.module.scss';

interface SkillTagProps {
  skill: string;
  variant?: 'default' | 'minimal';
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, variant = 'default' }) => {
  const color = '#0066CC';
  
  return (
    <span 
      className={`${styles.tag} ${styles[variant]}`}
      style={{
        '--skill-color': color
      } as React.CSSProperties}
    >
      {skill}
    </span>
  );
};

export default SkillTag;