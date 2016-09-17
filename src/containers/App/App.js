import React from 'react';
import { Router, hashHistory } from 'react-router';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <Router
          routes={this.props.routes}
          history={this.props.history}
        />
      </div>
    )
  }
}

export default App;
