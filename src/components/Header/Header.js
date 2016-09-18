import React from 'react';
import {Link} from 'react-router';

import styles from './styles.module.css';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className={styles.header}>
          <Link to='/upcoming'>Upcoming</Link>
          <Link to='/'>Groundhog d.AI</Link>
          <Link to='/about'>About</Link>
        </div>
    );
  }
}

export default Header;
