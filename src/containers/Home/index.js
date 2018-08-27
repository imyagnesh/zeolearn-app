import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Wrapper from '../../HOC/wrapper';

class Home extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.changeRoute = this.changeRoute.bind(this);
  }

  changeRoute() {
    const { match, location, history } = this.props;
    console.log(match);
    console.log(location);
    console.log(history);
    history.push({
      pathname: '/about',
      state: {
        data: 'Test Data',
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">About</Link>
        <input type="button" value="Go to About" onClick={this.changeRoute} />
      </div>
    );
  }
}

export default withRouter(Wrapper(Home));
