import * as types from "../constants/actionTypes";

export const action = (type, payload) => ({
  type,
  payload
});

export function getNotes() {
  return dispatch => {
    dispatch(action(types.NOTES_LOADING));
    return fetch("http://localhost:3004/notes")
      .then(res => res.json())
      .then(json => dispatch(action(types.NOTES_LOADED, json)))
      .catch(err => dispatch(action(types.NOTES_ERROR, err)));
  };
}

export function saveNote(note) {
  return dispatch => {
    dispatch(action(types.NOTES_LOADING));
    return fetch("http://localhost:3004/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => dispatch(action(types.NOTE_SAVED, json)))
      .catch(err => dispatch(action(types.NOTES_ERROR, err)));
  };
}

export function updateNote(note) {
  return dispatch => {
    dispatch(action(types.NOTES_LOADING));
    return fetch(`http://localhost:3004/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => dispatch(action(types.NOTE_UPDATED, json)))
      .catch(err => dispatch(action(types.NOTES_ERROR, err)));
  };
}

export function deleteNote(note) {
  return dispatch => {
    dispatch(action(types.NOTES_LOADING));
    return fetch(`http://localhost:3004/notes/${note.id}`, {
      method: "DELETE"
    })
      .then(json => dispatch(action(types.NOTE_DELETED, note)))
      .catch(err => dispatch(action(types.NOTES_ERROR, err)));
  };
}

export default {
  getNotes,
  saveNote,
  deleteNote,
  updateNote
};
