import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  render() {
    const { onSearch } = this.props;
    return (
      <form onSubmit={e => onSearch(e)}>
        <input
          type="text"
          ref={(ref) => {
            this.searchText = ref;
          }}
          name="search"
          onChange={(e) => {
            this.searchText.value = e.target.value;
          }}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
