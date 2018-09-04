import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./styles.css";

class notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.onSearch = this.onSearch.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onCreteNote = this.onCreteNote.bind(this);
  }

  componentWillMount = () => {
    this.props.actions.getNotes();
  };

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSearch(e) {
    e.preventDefault();
    alert(this.state.searchText);
  }

  onCreteNote() {
    const { history } = this.props;
    history.push({
      pathname: "/createNote"
    });
  }

  render() {
    const { searchText } = this.state;
    const { loading, data, error } = this.props.notes;
    if (loading) {
      return <h1>Loading....</h1>;
    }
    return (
      <div>
        <form onSubmit={this.onSearch}>
          <input
            type="text"
            placeholder="search"
            name="searchText"
            value={searchText}
            onChange={this.onChangeText}
          />
          <input type="submit" value="Search" />
        </form>
        <input type="button" value="Create Note" onClick={this.onCreteNote} />

        <table>
          <thead>
            <tr>
              <th>Note</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.note}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

notes.propTypes = {};

export default withRouter(notes);
