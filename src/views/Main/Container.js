import React from 'react';

import Header from 'components/Header/Header.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import About from 'components/About/About.js';
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
      <div>
        <Header />
        <div className={styles.container}>
            <div className={styles.children}>
              {children}
            </div>

            {/* <div className={styles.info}>
              <Sidebar />
              <About />
            </div> */}
        </div>
      </div>
    );
  }
}

export default Container;
