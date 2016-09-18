import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';

import App from 'containers/App/App';
import Container from './views/Main/Container';
import Search from './views/Main/Search/Search';
import Movie from './views/Main/Movie/Movie';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import makeRoutes from './routes';

const routes = makeRoutes();

// Get the node created from the WebPack HTML gen to mount our react app to
console.log(ReactDOM.render);
ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <Route path="" component={Container} >
        <IndexRoute component={Search} />
        <Route path="movie/:id" component={Movie} />
      </Route>
    </Route>
  </Router>, 
  document.getElementById('root'));
