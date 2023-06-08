import React from 'react';
import styles from './Title.module.css';

interface TitleProps {
  children: React.ReactNode;
}
const Title = (props: TitleProps) => {
  const { children } = props;
  return <div className={styles.title}>{children}</div>;
};

export default Title;
