import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from './route';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route />
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;
