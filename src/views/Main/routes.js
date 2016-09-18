import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Container from './Container';
import Search from './Search/Search';
import Movie from './Movie/Movie';

export const mainRoutes = () => {
  return (
    <Route path="" component={Container}>
      <IndexRoute component={Search} />
      <Route path="movie/:id" component={Movie} />
    </Route>
  );
}

export default mainRoutes;
