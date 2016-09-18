import React from 'react';
import SearchBar from './SearchBar/SearchBar';
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
            <SearchBar />
          </div>
        </div>
    );
  }
}

export default Search;
