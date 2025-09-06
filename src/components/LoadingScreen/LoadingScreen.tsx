import React from 'react';
import styles from './LoadingScreen.module.scss';

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}>
        <div className={styles.ring1} />
        <div className={styles.ring2} />
        <div className={styles.ring3} />
      </div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default LoadingScreen;