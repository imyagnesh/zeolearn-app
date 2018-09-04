import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../../components/ErrorBoundary';

export default class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  makeError() {
    throw new Error('I crashed!');
  }

  render() {
    const { match, location, history } = this.props;
    const val = 'abcc';
    return (
      <div>
        <ErrorBoundary>
          <h1>About</h1>
          <input type="button" onClick={this.makeError} value="Click to get error" />
          {val === 'abc' && <h3>Hello</h3>}
          <h1>{location.state && location.state.data}</h1>
        </ErrorBoundary>
      </div>
    );
  }
}
