import React from 'react';
import styles from './MainPageLayout.module.css';

interface MainPageLayoutProps {
  children: React.ReactNode;
}
const MainPageLayout = (props: MainPageLayoutProps) => {
  const { children } = props;
  const childrenArray: React.ReactNode[] = React.Children.toArray(children);

  if (childrenArray.length !== 3) {
    throw new Error('MainPageLayout requires exactly three children.');
  }

  return (
    <div className={styles.container}>
      <section className={styles.s}>{childrenArray[0]}</section>
      <section>{childrenArray[1]}</section>
      <section>{childrenArray[2]}</section>
    </div>
  );
};

export default MainPageLayout;
