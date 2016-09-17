import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import Container from './Container';
import Search from './Search/Search';

export const mainRoutes = () => {
  return (
    <Route path="/dashboard" component={Container}>
      <Route path="search" component={Search}/>

      <IndexRedirect to="search" />
    </Route>
  )
}

export default mainRoutes;
