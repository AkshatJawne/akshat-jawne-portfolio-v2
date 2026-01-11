import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.nameWrapper}>
          <h1 className={styles.name}>
            <span className={styles.firstName}>Akshat</span>
            <span className={styles.lastName}>Jawne</span>
          </h1>
          <div className={styles.bioLine}>
            4th Year Computer Engineering Student @ University of Waterloo
          </div>
        </div>
        
        <div className={styles.socials}>
          <a href="mailto:ajawne@uwaterloo.ca" className={styles.socialLink} aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://linkedin.com/in/akshatjawne" className={styles.socialLink} aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/akshatjawne" className={styles.socialLink} aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;