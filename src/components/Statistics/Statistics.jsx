import PropTypes from 'prop-types';
import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        Good: <span className={styles.number}>{good}</span>
      </li>
      <li className={styles.item}>
        Neutral: <span className={styles.number}>{neutral}</span>
      </li>
      <li className={styles.item}>
        Bad: <span className={styles.number}>{bad}</span>
      </li>
      <li className={styles.item}>
        Total: <span className={styles.number}>{total}</span>
      </li>
      <li className={styles.item}>
        Positive feedback: <span className={styles.number}>{positiveFeedback}</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;

