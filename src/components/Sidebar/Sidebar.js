import React from 'react';
import superagent from 'superagent';

import styles from './styles.module.css';
import Upcoming from './Upcoming/Upcoming';

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
      fetch('http://10.21.227.72:3000/top10').then((result) =>{
        result.json().then(json => {
        //console.log(json);
        this.setState({
          data: json
        });
      });
    });
  }
    // superagent.get('http://10.21.227.72:3000/top10')
    // .then(response => { console.log(response); resolve(response);} )
    // .then((response) => {
    //     console.log("response valid");
    //     this.setState({
    //       data: response
    //     });
    // }, (err) => {
    //   console.log("fuck");
    // });

    // fetch('http://10.21.227.72:3000/top10').then((result) => {
    //   result.json().then(json => console.log(json)});
    // });
    //
    // fetch('')


  render() {
    return (
        <div className={styles.sidebar}>
          <h1>Upcoming Movies</h1>
          <Upcoming items={this.state.data} />
        </div>
    );
  }
}

export default Sidebar;
