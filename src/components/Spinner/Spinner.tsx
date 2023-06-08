import React from 'react';
import { CircularProgress } from '@mui/material';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.container}>
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Spinner;
