import React from 'react';
import styles from './LoadingScreen.module.scss';

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.cube}>
        <div className={styles.face}></div>
        <div className={styles.face}></div>
        <div className={styles.face}></div>
        <div className={styles.face}></div>
        <div className={styles.face}></div>
        <div className={styles.face}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;