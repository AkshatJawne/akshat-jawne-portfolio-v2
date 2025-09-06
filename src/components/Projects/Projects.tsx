import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import { Code } from 'lucide-react';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Code className={styles.icon} size={28} />
          <h2 className={styles.title}>Projects</h2>
        </div>
        
        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;