import React from 'react';

import styles from './styles.module.css';


export class Upcoming extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("fuck");
    return (
        <ul className={styles.upcoming}>
            {this.props.items.map((item, i) => {
                    return (
                      <li key={i}>{item.title} {item.rating}</li>
                    );
            })}
        </ul>
    );
  }
}

export default Upcoming;
