import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { Home, Signin, Signup, Browse } from './pages';

export function App() {
  return (
    <Router>
        <Switch>
            <Route path={ROUTES.SIGN_IN}>
                <Signin />
            </Route>
            <Route path={ROUTES.SIGN_UP}>
                <Signup />
            </Route>
            <Route path={ROUTES.BROWSE}>
                <Browse />
            </Route>
            <Route path={ROUTES.HOME}>
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}
