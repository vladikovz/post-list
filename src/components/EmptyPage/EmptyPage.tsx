import React from 'react';
import styles from './EmptyPage.module.css';

interface EmptyPageProps {
  children: React.ReactNode;
}
const EmptyPage = (props: EmptyPageProps) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{children}</h3>
    </div>
  );
};

export default EmptyPage;
