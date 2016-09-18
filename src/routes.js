import React from 'react';
import {Router, hashHistory} from 'react-router';

import mainRoutes from './views/Main/routes';

export const makeRoutes = () => {
  const main = mainRoutes();

  return (
    <Router history={hashHistory}>
      {main}
    </Router>
  )
}

export default makeRoutes;
