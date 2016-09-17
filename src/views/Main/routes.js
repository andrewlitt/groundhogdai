import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import Container from './Container';

export const mainRoutes = () => {
  return (
    <Route path="/dashboard" component={Container}>

    </Route>
  )
}

export default mainRoutes;
