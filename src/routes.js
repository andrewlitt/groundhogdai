import React from 'react';
import {Route, Redirect} from 'react-router';

import mainRoutes from './views/Main/routes';

export const makeRoutes = () => {
  const main = mainRoutes();

  return (
    <Route path=''>
      {main}
      <Redirect from="/*" to="dashboard" />
    </Route>
  )
}

export default makeRoutes;
