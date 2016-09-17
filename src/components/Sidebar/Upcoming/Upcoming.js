import React from 'react';
import styles from './styles.module.css';

export class Upcoming extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.items);
    //  console.log(this.props.items.length);

    return (
        <table>
          <tbody>
            <tr>
                <th>Title</th>
                <th>Release Date</th>
                <th>Predicted Rating</th>
            </tr>
              {
                ((self) => {
                  console.log(self);
                  if (self.props.items && self.props.items.length > 0){
                    console.log('items');
                    console.log(self.props.items);
                    self.props.items.map((item, i) => {
                      console.log(item.title, item.releaseDate, item.revenue);
                      console.log(i);
                        return <tr key={i}>
                            <td className="title">{item.title}</td>
                            <td className="date">{item.releaseDate}</td>
                            <td className="rating">{item.revenue}</td>
                          </tr>;
                      });
                  } else {
                    return <tr><td></td><td></td><td></td></tr>;
                  }
              })(this)
              }
            </tbody>
        </table>
    );
  }
}

export default Upcoming;
