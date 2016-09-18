import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';

import mainRoutes from './views/Main/routes';

export const makeRoutes = () => mainRoutes();

export default makeRoutes;
