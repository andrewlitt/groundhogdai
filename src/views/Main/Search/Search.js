import React from 'react';

import styles from './styles.module.css';

export class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.search}>
          <h1>Type in an upcoming movie to see if it will be a hit!</h1>

          <div className={styles.searchBar}>
            <input type="text" autoFocus placeholder={'Deepwater Horizon (2016)'} />
          </div>
        </div>
    );
  }
}

export default Search;
