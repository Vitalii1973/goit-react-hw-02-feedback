import React, { Component } from 'react';
import styles from '../styles/Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={styles.statisticsContainer}>
        <ul className={styles.statisticsList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positivePercentage}%</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
