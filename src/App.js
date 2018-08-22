import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Product from './containers/Product';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Product
          ref={(ref) => {
            this.product = ref;
          }}
        />
        <input type="button" value="Text" onClick={() => this.product.test()} />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
