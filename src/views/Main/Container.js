import React from 'react';

import Header from 'components/Header/Header.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import styles from './styles.module.css';

export class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let children = null;

    if (this.props.children) {
      children = React.cloneElement(this.props.children, {});
    }

    return (
        <div className={styles.container}>
          <Header />

          <div className={styles.flexContainer}>
            <Sidebar />

            <div className={styles.content}>
              {children}
            </div>
          </div>
        </div>
    );
  }
}

export default Container;
