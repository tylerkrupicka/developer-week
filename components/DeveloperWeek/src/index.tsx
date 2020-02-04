import React from 'react';
import styles from './DeveloperWeek.css';

interface DeveloperWeekProps {
  /** The first text to display */
  first: string;
  /** The second text to display */
  second: string;
}

/** A simple component. */
export const DeveloperWeek = (props: DeveloperWeekProps) => {
  return (
    <h1 className={styles.developerWeek}>
      <span className={styles.developer}>{props.first}</span>
      <span className={styles.week}>{props.second}</span>
    </h1>
  );
};

export default DeveloperWeek;
