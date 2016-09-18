import React from 'react';
import styles from './styles.module.css';

export class Upcoming extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <table>
               <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Predicted Revenue</th>
                        <th>Predicted Rating </th>
                    </tr>
                    {
                      this.props.items.map((item) => {
                        return <tr>
                                  <td className={styles.title}>{item.title}</td>
                                  <td className={styles.releaseDate}>{item.releaseDate}</td>
                                  <td className={styles.revenue}>${item.revenue}</td>
                                  <td className={styles.rating}>%</td>
                               </tr>;
                      })
                    }
                </tbody>
            </table>
  }
}

export default Upcoming;
