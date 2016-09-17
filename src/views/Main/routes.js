import React from 'react';
import {IndexRoute, Route, IndexRedirect} from 'react-router';

import Container from './Container';
import Search from './Search/Search';

export const mainRoutes = () => {
  return (
    <Route path='/' component={Container}>
      <IndexRoute component={Search}/>
    </Route>
  )
}

export default mainRoutes;
