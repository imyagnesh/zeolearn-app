import * as types from "../constants/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.NOTES_LOADING:
      return { ...state, loading: true };

    case types.NOTES_ERROR:
      return { ...state, loading: false, error: payload };

    case types.NOTES_LOADED:
      return { ...state, loading: false, data: payload };

    case types.NOTE_SAVED:
      return { ...state, loading: false, data: [...state.data, payload] };

    case types.NOTE_UPDATED: {
      const index = state.data.findIndex(x => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [
          ...state.data.slice(0, index),
          payload,
          ...state.data.slice(index + 1)
        ]
      };
    }

    case types.NOTE_DELETED: {
      const index = state.data.findIndex(x => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)]
      };
    }

    default:
      return state;
  }
};
