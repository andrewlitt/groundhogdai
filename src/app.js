import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';

import App from 'containers/App/App';
import Container from './views/Main/Container';
import Search from './views/Main/Search/Search';
import Movie from './views/Main/Movie/Movie';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import makeRoutes from './routes';

const routes = makeRoutes();

// Get the node created from the WebPack HTML gen to mount our react app to
const mountNode = document.querySelector('#root');

ReactDOM.render(<App history={hashHistory} routes={routes} />, mountNode);
