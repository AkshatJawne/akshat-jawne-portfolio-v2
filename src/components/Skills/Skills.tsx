import React from 'react';
import { skillsData } from '../../data/skills';
import SkillTag from '../SkillTag/SkillTag';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        
        <div className={styles.categories}>
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Languages</h3>
            <div className={styles.skillList}>
              {skillsData.languages.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>
          
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Frameworks</h3>
            <div className={styles.skillList}>
              {skillsData.frameworks.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>
          
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Tools</h3>
            <div className={styles.skillList}>
              {skillsData.tools.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;