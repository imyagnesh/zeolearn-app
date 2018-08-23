import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Product from './containers/Product';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Product />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
