import React from 'react';
import Header from 'components/Header/Header';

import styles from './styles.module.css';

export class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.container}>
          <Header />
        </div>
    );
  }
}

export default Container;
