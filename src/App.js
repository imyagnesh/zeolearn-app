import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from './route';
import Header from './components/Header';
import Footer from './components/Footer';

export const LocaleContext = React.createContext();

// const {Provider, Consumer} = React.createContext(defaultValue);

class LocaleProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
      changeLocale: locale => this.setState({ locale }),
    };
  }

  render() {
    return (
      <LocaleContext.Provider value={this.state}>{this.props.children}</LocaleContext.Provider>
    );
  }
}

// class LocaleProvider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       locale: 'en',
//       changeLocale: (locale) => {
//         this.setState({ locale });
//       },
//     };
//   }

//   render() {
//     return (
//       <LocaleContext.Provider value={this.state}>{this.props.children}</LocaleContext.Provider>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
    };
  }

  render() {
    const { locale } = this.state;
    return (
      <Router>
        <LocaleProvider>
          <LocaleContext.Consumer render>
            {context => (
              <Fragment>
                <select value={context.locale} onChange={e => context.changeLocale(e.target.value)}>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                </select>
                <Header locale={context.locale} />
                <Route locale={context.locale} />
                <Footer locale={context.locale} />
              </Fragment>
            )}
          </LocaleContext.Consumer>
        </LocaleProvider>
        {/* </LocaleProvider> */}
      </Router>
    );
  }
}

App.propTypes = {};

export default App;
