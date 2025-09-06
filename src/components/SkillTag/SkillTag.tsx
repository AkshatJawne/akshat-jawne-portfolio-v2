import React from 'react';
import { skillColors } from '../../data/skillColors';
import styles from './SkillTag.module.scss';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  const color = skillColors[skill] || '#6B7280';
  
  return (
    <span 
      className={styles.tag}
      style={{
        backgroundColor: `${color}15`,
        borderColor: color,
        color: color
      }}
    >
      {skill}
    </span>
  );
};

export default SkillTag;