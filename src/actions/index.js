import * as types from '../constants/actionTypes';

export const action = (type, payload) => ({
  type,
  payload,
});

export function getProducts() {
  console.log('getProducts');
  return (dispatch) => {
    dispatch(action(types.PRODUCTS_LOADING));
    return fetch('http://localhost:3004/products')
      .then(res => res.json())
      .then(json => dispatch(action(types.LOAD_PRODUCTS_SUCCESS, json)))
      .catch(err => dispatch(action(types.PRODUCTS_ERROR, err)));
  };
}

export function saveProducts(product) {
  return (dispatch) => {
    dispatch(action(types.PRODUCTS_LOADING));
    console.log(product);
    return fetch('http://localhost:3004/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => dispatch(action(types.SAVE_PRODUCTS_SUCCESS, json)))
      .catch(err => dispatch(action(types.PRODUCTS_ERROR, err)));
  };
}

export default {
  getProducts,
  saveProducts,
};
