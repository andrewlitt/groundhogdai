import React from 'react';
import {  } from 'react-router';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        {this.props.children}
      </div>
    )
  }
}

export default App;
