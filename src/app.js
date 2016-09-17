import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';

import App from 'containers/App/App';

import {hashHistory} from 'react-router';
import makeRoutes from './routes';

const routes = makeRoutes();

// Get the node created from the WebPack HTML gen to mount our react app to
const mountNode = document.querySelector('#root');

ReactDOM.render(<App history={hashHistory} routes={routes} />, mountNode);
