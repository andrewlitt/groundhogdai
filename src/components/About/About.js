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
            <p>
              Groundhog d.AI is an Azure-cloud-powered, mobile-un-ready, online only, ReactJS powered movie artificial intelligence.

              With Groundhog you can:
            </p>
            <p>
              Predict whether future movies will be box office successes and test our ground(h0g) breaking model on past movies to see how well we perform.            
            </p>
          </div>
        </div>
    );
  }
}

export default About;
