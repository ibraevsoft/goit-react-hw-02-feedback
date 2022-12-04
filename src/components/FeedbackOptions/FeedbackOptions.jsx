import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const onClickBtn = feedbackType => () => {
    onLeaveFeedback(feedbackType);
  };

  return (
    <ul className={styles.list}>
      {Object.keys(options).map(feedbackType => {
        return (
          <li className={styles.item} key={feedbackType}>
            <button onClick={onClickBtn(feedbackType)}>{feedbackType}</button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
