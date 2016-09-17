import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';

import mainRoutes from './views/Main/routes';

export const makeRoutes = () => {
  const main = mainRoutes();

  return (
    <Router history={browserHistory} >
      {main}
    </Router>
  )
}

export default makeRoutes;
