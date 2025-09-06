import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Globe } from 'lucide-react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div 
        className={styles.glowEffect}
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      
      <div className={styles.content}>
        <div className={styles.nameContainer}>
          <h1 className={styles.firstName}>AKSHAT</h1>
          <h1 className={styles.lastName}>JAWNE</h1>
        </div>
        
        <p className={styles.bio}>
          3rd Year Computer Engineering at University of Waterloo
        </p>
        
        <div className={styles.socials}>
          <a href="mailto:ajawne@uwaterloo.ca" className={styles.socialLink}>
            <Mail size={20} />
          </a>
          <a href="https://linkedin.com/in/akshatjawne" className={styles.socialLink}>
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/akshatjawne" className={styles.socialLink}>
            <Github size={20} />
          </a>
          <a href="https://akshatjawne.tech" className={styles.socialLink}>
            <Globe size={20} />
          </a>
        </div>
      </div>
      
      <ChevronDown className={styles.scrollIndicator} size={30} />
    </section>
  );
};

export default Hero;