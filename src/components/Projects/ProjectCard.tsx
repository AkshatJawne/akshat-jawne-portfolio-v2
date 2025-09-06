import React from 'react';
import SkillTag from '../SkillTag/SkillTag';
import { ExternalLink } from 'lucide-react';
import type { ProjectItem } from '../../types';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className={styles.card}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={styles.content}>
        <h3 className={styles.name}>
          {project.name}
          <ExternalLink className={styles.linkIcon} size={16} />
        </h3>
        
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.skills}>
          {project.skills.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;