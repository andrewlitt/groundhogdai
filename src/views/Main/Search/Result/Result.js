import React from 'react';

import styles from './styles.module.css';

export class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  click(e) {
    console.log('doing movie', this.props.data.id);
  }

  render() {
    let imgSrc = 'https://image.tmdb.org/t/p/w45_and_h67_bestv2' + this.props.data.poster;
    let title = this.props.data.title;
    let overview = this.props.data.overview;
    let date = this.props.data.date;

    return (
      <div className={styles.result} onClick={(e) => this.click(e)}>
        <img src={imgSrc} />

        <div className={styles.resultText}>
          <h1>{title}</h1>
          <h2>{overview}</h2>
        </div>

        <h3>{date}</h3>
      </div>
    );
  }
}

export default Result;
