import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (Xyz) => {
  class wrapper extends Component {
    state = {
      title: 'Products',
    };

    add(a, b) {
      return a + b;
    }

    render() {
      const data = {
        add: this.add,
      };
      return (
        <div style={{ padding: 20 }}>
          <h2>Hello John</h2>
          <Xyz {...data} {...this.state} {...this.props} />
        </div>
      );
    }
  }

  wrapper.propTypes = {};

  return wrapper;
};
