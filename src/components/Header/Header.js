import React from 'react';

import styles from './styles.module.css';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.header}>
          <h1>Header</h1>
        </div>
    );
  }
}

export default Header;
