import React from 'react';

import styles from './styles.module.css';

export class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.container}>
          <p>Search here</p>
        </div>
    );
  }
}

export default Search;
