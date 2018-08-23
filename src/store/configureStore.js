import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

let middleware = [];

middleware = [...middleware];

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
  return store;
}
