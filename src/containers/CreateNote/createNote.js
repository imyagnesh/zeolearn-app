import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./style.css";
import Notes from "../Notes";

let initialState = {
  note: "",
  description: "",
  error: []
};

class createNote extends Component {
  constructor(props) {
    super(props);

    if (props.location.state) {
      initialState = { ...initialState, ...props.location.state.note };
    }

    console.log(initialState);

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

    const error = [];

    if (!this.state.note) {
      error.push("Note is required");
    }
    if (!this.state.description) {
      error.push("Description is required");
    }
    if (error.length <= 0) {
      if (this.state.id) {
        this.props.actions.updateNote(this.state).then(() => {
          const { history } = this.props;
          history.push({
            pathname: "/notes"
          });
        });
      } else {
        this.props.actions.saveNote(this.state).then(() => {
          const { history } = this.props;
          history.push({
            pathname: "/notes"
          });
        });
      }
    } else {
      this.setState({
        error: error
      });
    }
  }

  onReset(e) {
    this.setState({ ...initialState });
  }

  render() {
    const { loading, error } = this.props.notes;
    // const { state } = this.props.location;
    // if (state) {
    //   console.log(state.note);
    // }
    if (loading) {
      return <h1>Creating Notes....</h1>;
    }
    return (
      <form
        className="wrapper"
        onSubmit={this.createNote}
        onReset={this.onReset}
        noValidate
      >
        {error && <p>{error}</p>}
        {this.state.error.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
        <input type="hidden" value={this.state.id} />
        <input
          type="text"
          placeholder="Note"
          name="note"
          value={this.state.note}
          className="verticalMargin"
          onChange={this.onChangeText}
          required
        />
        <textarea
          rows="4"
          placeholder="Description"
          name="description"
          value={this.state.description}
          className="verticalMargin"
          onChange={this.onChangeText}
          required
        />
        <div className="buttons verticalMargin">
          <input
            type="submit"
            value={this.state.id ? "Update Note" : "Create Note"}
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
