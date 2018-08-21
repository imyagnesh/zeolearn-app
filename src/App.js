import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header';

const Xyz = () => <h1>Hello</h1>;

class App extends Component {
  state = {
    name: 'Yagnesh',
    lastname: 'Modh',
  };

  render() {
    return (
      <div className="App">
        <input type="button" value="click me" onClick={() => this.setState({ name: 'Gopinath' })} />
        <Header title={this.state.name} caption="Hello world" />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
