import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import NotFound from './containers/404';
import PrivateRoute from './components/PrivateRoute';

const Loading = () => <h1>Loading...</h1>;

const AsyncProduct = Loadable({
  loader: () => import('./containers/Product'),
  loading: Loading,
});

const AsyncHome = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
});

const AsyncAbout = Loadable({
  loader: () => import('./containers/About'),
  loading: Loading,
});

class route extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route path="/about" component={AsyncAbout} />
        <PrivateRoute path="/products" component={AsyncProduct} isAuthenticated />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

route.propTypes = {};

export default route;
