import React from 'react';
import superagent from 'superagent';

import styles from './styles.module.css';
import Upcoming from './Upcoming/Upcoming';
import numeral from 'numeral';

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData:[],
      toPass: {}
    };
  }

  componentDidMount() {
    // fetch('http://10.21.227.72:3000/top10').then((result) =>{
    fetch('http://146.148.60.217/top10').then((result) => {
      result.json().then((json) => {
          for (var i = 0; i < json.length; i++) {
            json[i].revenue = numeral(json[i].revenue * Math.random() * (100.15 - 90.5) + 90.5).format('0.00 a');
          }

          this.setState({
            movieData: json
          });
        });
    });
  }

  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>
            <h1>Upcoming Movies</h1>
            <Upcoming items={this.state.movieData} />
        </div>
      </div>
    )
  }
}

export default Sidebar;
