import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class About extends Component {
  static propTypes = {};

  render() {
    const { match, location, history } = this.props;
    return (
      <div>
        <h1>About</h1>
        <h1>{location.state && location.state.data}</h1>
      </div>
    );
  }
}
