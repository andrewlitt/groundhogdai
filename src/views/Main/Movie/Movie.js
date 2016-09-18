import React from 'react';
import styles from './styles.module.css';
import {hashHistory} from 'react-router';

import Rating from 'components/Rating/Rating';

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
          id: this.props.params.id,
          budget: json.budget,
          popularity: json.popularity,
          vote_average: json.vote_average,
          genre: json.genres
        };

        tempMovie = {
          posterLink: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + json.poster_path,
          title: json.title,
          overview: json.overview,
          theirRating: json.vote_average,
          releaseDate: json.release_date
        }

        tempMovie.releaseDate = tempMovie.releaseDate.substring(0,4);

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

  backOut(e) {
    hashHistory.push('/search');
  }

  render() {
    return (
      <div className={styles.moviePage}>
        <i
          className="fa fa-arrow-left"
          onClick={(e) => this.backOut(e)}
        />

        <div className={styles.outerLayoutFlex}>
          <div className={styles.poster}>
            <img src={this.state.data.posterLink}/>
          </div>

          <div className={styles.textFlex}>
            <h1>{this.state.data.title}</h1>
            <h2>{this.state.data.overview}</h2>
            <h3>{this.state.data.releaseDate}</h3>
          </div>

          <div className={styles.ratingFlex}>
            <p>Our rating:</p>
            <Rating />

            <p>Their rating:</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Movie;
