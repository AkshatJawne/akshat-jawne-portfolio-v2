import React from 'react';
import SkillTag from '../../SkillTag/SkillTag';
import { type ProjectItem } from '../../../types';
import styles from './ProjectCard.module.scss';
import { ExternalLink } from 'lucide-react';

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
        <div className={styles.header}>
          <h3 className={styles.projectName}>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                {project.name}
                <ExternalLink size={14} className={styles.linkIcon} />
              </a>
            ) : (
              project.name
            )}
          </h3>
        </div>

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
