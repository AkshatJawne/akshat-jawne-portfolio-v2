import React, { type ReactNode } from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;