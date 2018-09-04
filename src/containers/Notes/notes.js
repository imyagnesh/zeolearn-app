import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import NoteList from "../../components/NoteList/noteList";
import TextInput from "../../components/TextInput";
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
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
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
  }

  onCreteNote() {
    const { history } = this.props;
    history.push({
      pathname: "/createNote"
    });
  }

  deleteNote(note) {
    this.props.actions.deleteNote(note);
  }

  editNote(note) {
    const { history } = this.props;
    history.push({
      pathname: "/createNote",
      state: { note }
    });
  }

  render() {
    const { searchText } = this.state;
    const { loading, data, error } = this.props.notes;

    const newData = data.filter(
      x =>
        x.note.toLowerCase().includes(searchText.toLowerCase()) ||
        x.description.toLowerCase().includes(searchText.toLowerCase())
    );
    if (loading) {
      return <h1>Loading....</h1>;
    }
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSearch}>
          <TextInput
            type="text"
            placeholder="search"
            name="searchText"
            value={searchText}
            onChange={this.onChangeText}
          />
          <input type="submit" value="Search" />
        </form>
        <input type="button" value="Create Note" onClick={this.onCreteNote} />
        <NoteList
          data={newData}
          editNote={this.editNote}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

notes.propTypes = {};

export default withRouter(notes);
