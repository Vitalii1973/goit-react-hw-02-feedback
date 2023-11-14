import React, { Component } from 'react';
import styles from '../styles/Notification.module.css';

class Notification extends Component {
  render() {
    const { message } = this.props;

    return (
      <div className={styles.notificationContainer}>
        <p>{message}</p>
      </div>
    );
  }
}

export default Notification;
