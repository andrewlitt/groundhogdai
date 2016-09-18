import React from 'react';
import styles from './styles.module.css';

export class Upcoming extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul>
          {
            this.props.items.map((item) => {
              return <li>{item.title}</li>;
            })
          }
        </ul>;
  }
}

export default Upcoming;
