import React from 'react';

import styles from './styles.module.css';

export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.about}>
          <h1>Movie Mystic</h1>
        </div>
    );
  }
}

export default About;
