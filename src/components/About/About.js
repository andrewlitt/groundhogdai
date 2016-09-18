import React from 'react';

import styles from './styles.module.css';

export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.about}>
          <h1>What is Groundhog d.AI?</h1>
          <div className={styles.aboutContent}>
              <p>Here we have to write a little blurb about our site.</p>
              <p>It will touch on technical details, funny shit, and other cool stuff.</p>
          </div>
        </div>
    );
  }
}

export default About;
