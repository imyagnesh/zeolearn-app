import * as types from "../constants/actionTypes";

export const initialState = {
  loading: false,
  data: [],
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_LOADING:
      return { ...state, loading: true };

    case types.PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case types.LOAD_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case types.SAVE_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload]
      };

    default:
      return state;
  }
};
