import React, { Component } from 'react';
import styles from '../styles/Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className={styles.sectionContainer}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
