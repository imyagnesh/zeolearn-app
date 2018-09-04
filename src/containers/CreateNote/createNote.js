import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./style.css";
import Notes from "../Notes";

const initialState = {
  note: "",
  description: ""
};

class createNote extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChangeText = this.onChangeText.bind(this);
    this.createNote = this.createNote.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  createNote(e) {
    e.preventDefault();
    this.props.actions.saveNote(this.state).then(() => {
      const { history } = this.props;
      history.push({
        pathname: "/notes"
      });
    });
  }

  onReset(e) {
    this.setState({ ...initialState });
  }

  render() {
    const { loading } = this.props.notes;
    if (loading) {
      return <h1>Creating Notes....</h1>;
    }
    return (
      <form
        className="wrapper"
        onSubmit={this.createNote}
        onReset={this.onReset}
      >
        <input
          type="text"
          placeholder="Note"
          name="note"
          className="verticalMargin"
          onChange={this.onChangeText}
        />
        <textarea
          rows="4"
          placeholder="Description"
          name="description"
          className="verticalMargin"
          onChange={this.onChangeText}
        />
        <div className="buttons verticalMargin">
          <input
            type="submit"
            value="Create Note"
            style={{ marginRight: 20 }}
          />
          <input type="reset" value="Reset" />
        </div>
      </form>
    );
  }
}

createNote.propTypes = {};

export default withRouter(createNote);
