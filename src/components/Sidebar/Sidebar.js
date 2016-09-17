import React from 'react';

import styles from './styles.module.css';

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.sidebar}>
          <h1>Sidebar</h1>
        </div>
    );
  }
}

export default Sidebar;
