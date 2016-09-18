import React from 'react';
import styles from './styles.module.css';
import Result from '../Result/Result';

// http://api.themoviedb.org/3/search/movie?api_key=7d8ffc3db64b7db3a3f44c5cb8a5e9ed&page=1&query=casa
// https://image.tmdb.org/t/p/w45_and_h67_bestv2/hmWiq9rVOQxJH1uFUitxzCzR5F8.jpg

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      showingResults: false,
      searchResults: []
    }
  }

  handleChange(e) {
    if(e.target.value.length < 1) {
      this.setState({showingResults: false});
      return;
    }

    fetch(
      'http://api.themoviedb.org/3/search/movie?api_key=7d8ffc3db64b7db3a3f44c5cb8a5e9ed&query='
      + e.target.value
    ).then((response) => {
      return response.json().then((json) => {
        this.createResults(json);
      });
    });

    this.setState({searchValue: e.target.value});
    this.setState({showingResults: true});
  }

  createResults(json) {
    let results = json.results;
    let limit = 15;
    let currentResults = [];
    let temp = {};

    if(results.length < 15)
      limit = results.length;

    for (var i = 0; i < limit; i++) {
      temp = {
        poster: results[i].poster_path,
        id: results[i].id,
        title: results[i].title,
        overview: results[i].overview,
        date: results[i].release_date
      };

      temp.date = temp.date.substring(0,4);

      if(temp.overview.length > 60) {
        temp.overview = temp.overview.substring(0, 60) + "...";
      } else {

      }

      currentResults.push(temp);
    }

    this.setState({searchResults: currentResults});
  }

  render() {
    let sectionStyle = styles.searchSection;
    let searchBarStyle = styles.searchBar;
    let searchResults = [];

    if(this.state.showingResults) {
      sectionStyle = sectionStyle + ' ' + styles.activeSearch;
      searchBarStyle = searchBarStyle + ' ' + styles.showingResults;

      if(this.state.searchResults.length) {
        for(var i=0; i<this.state.searchResults.length; i++) {
          searchResults.push(
            <Result
              key={this.state.searchResults[i].id}
              data={this.state.searchResults[i]}
            />
          );
        }
      }
    }

    return (
      <div className={sectionStyle}>
        <div className={searchBarStyle}>
          <input
            type="text"
            autoFocus
            placeholder={'Deepwater Horizon (2016)'}
            onChange={(e)=>this.handleChange(e)}
          />
        </div>

        <div className={styles.resultsSection}>
          {searchResults}
        </div>
      </div>
    );
  }
}

export default SearchBar;
