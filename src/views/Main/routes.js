import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import Container from './Container';
import Search from './Search/Search';
import Movie from './Movie/Movie';

import Sidebar from 'components/Sidebar/Sidebar.js';
import About from 'components/About/About.js';

export const mainRoutes = () => {
  return (
    <Route path='/' component={Container}>
      <Route path='search' component={Search} />
      <Route path='movie/:id' component={Movie} />
      <Route path='upcoming' component={Sidebar} />
      <Route path='about' component={About} />
      <IndexRedirect to="search" />
    </Route>
  )
}

export default mainRoutes;
