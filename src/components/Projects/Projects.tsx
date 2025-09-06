import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import { projectsData } from '../../data/projects';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        
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
