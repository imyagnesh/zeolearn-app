import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as types from "../constants/actionTypes";
import { action, getProducts } from "./index";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create a dynamic action ", () => {
    const text = "Finish docs";
    const expectedAction = {
      type: types.PRODUCTS_LOADING,
      payload: undefined
    };
    expect(action(types.PRODUCTS_LOADING)).toEqual(expectedAction);
  });
});

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it("testing getProducts", () => {
    fetchMock.getOnce("http://localhost:3004/products", {
      body: { todos: ["do something"] },
      headers: { "content-type": "application/json" }
    });
    const expectedActions = [
      { type: types.PRODUCTS_LOADING, payload: undefined },
      {
        type: types.LOAD_PRODUCTS_SUCCESS,
        payload: { todos: ["do something"] }
      }
    ];
    const store = mockStore({ todos: [] });
    return store.dispatch(getProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
