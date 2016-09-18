import React from 'react';
import styles from './styles.module.css';

// this.props.params.id will have movieID
// post @ https://image.tmdb.org/t/p/w600_and_h900_bestv2/ + url

export class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toPass: {}
    }
  }

  componentDidMount() {
    fetch('http://api.themoviedb.org/3/movie/' + this.props.params.id
    + '?api_key=7d8ffc3db64b7db3a3f44c5cb8a5e9ed').then((result) => {
      result.json().then((json) => {
        console.log(json);
        toPass = {
          budget: json.budget,
          popularity: json.popularity,
          vote_average: json.vote_average,
          genre: json.genres,
          // actors:

        }

        console.log(toPass);
      });
    });
  }

  render() {
    return (
      <p>Movie</p>
    );
  }
}

export default Movie;
