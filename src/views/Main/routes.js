import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import Container from './Container';
import Search from './Search/Search';
import Movie from './Movie/Movie';

export const mainRoutes = () => {
  return (
    <Route path='/' component={Container}>
      <Route path='search' component={Search} />
      <Route path='movie/:id' component={Movie} />

      <IndexRedirect to="search" />
    </Route>
  )
}

export default mainRoutes;
