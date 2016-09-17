import React from 'react';

import styles from './styles.module.css';

export class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let children = null;

    if (this.props.children) {
      children = React.cloneElement(this.props.children, {});
    }

    return (
        <div>
          <div>
            <h1>Test</h1>
            {children}
          </div>
        </div>
    );
  }
}

export default Container;
