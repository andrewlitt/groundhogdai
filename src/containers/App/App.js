import React from 'react';
import { Router } from 'react-router';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render () {
    return (
      <div style={{ height: '100vh' }}>
        <Router
          routes={this.props.routes}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default App;
