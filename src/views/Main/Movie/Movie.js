import React from 'react';
import styles from './styles.module.css';

// this.props.params.id will have movieID
// post @ https://image.tmdb.org/t/p/w600_and_h900_bestv2/ + url

export class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toPass: {},
      data: {}
    }
  }

  componentDidMount() {
    let temp = {};
    let tempMovie = {};

    fetch('http://api.themoviedb.org/3/movie/' + this.props.params.id
    + '?api_key=7d8ffc3db64b7db3a3f44c5cb8a5e9ed').then((result) => {
      result.json().then((json) => {
        temp = {
          budget: json.budget,
          popularity: json.popularity,
          vote_average: json.vote_average,
          genre: json.genres
        };

        tempMovie = {
          posterLink: json.poster_path,
          title: json.title,
          overview: json.overview,
          releaseDate: json.releaseDate
        }

        fetch('http://api.themoviedb.org/3/movie/' + this.props.params.id
        + '/credits?api_key=7d8ffc3db64b7db3a3f44c5cb8a5e9ed').then((result) => {
          result.json().then((json) => {
            let limit = 15;
            let tempCast = [];
            temp.cast = json.cast;

            if(json.cast.length < 15)
              limit = json.cast.length;

            for (var i = 0; i < limit; i++) {
              tempCast.push(json.cast[i]);
            }

            tempMovie.cast = tempCast;

            this.setState({toPass: temp});
            this.setState({data: tempMovie});
          });
        });
      });
    });
  }

  render() {
    return (
      <div className={styles.backWrapper}>
        
      </div>
    );
  }
}

export default Movie;
