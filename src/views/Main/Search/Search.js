import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import styles from './styles.module.css';

export class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var logo = require('images/logo.png');
    return (
        <div className={styles.search}>
          <h1 className={styles.subheading}>Type in an upcoming movie to see if it will be a hit!</h1>

          <div className={styles.searchBar}>
            <SearchBar />
          </div>
          <img className={styles.logoPic} src={logo}/>
        </div>
    );
  }
}

export default Search;
