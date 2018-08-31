import product, { initialState } from "./productReducer";
import * as types from "../constants/actionTypes";

describe("product reducer", () => {
  it("product loading test case", () => {
    expect(
      product(initialState, {
        type: types.PRODUCTS_LOADING,
        payload: undefined
      })
    ).toEqual({
      loading: true,
      data: [],
      error: false
    });
  });

  it("product error test case", () => {
    expect(
      product(initialState, {
        type: types.PRODUCTS_ERROR,
        payload: "oops! something goes wrong"
      })
    ).toEqual({
      loading: false,
      data: [],
      error: "oops! something goes wrong"
    });
  });

  it("product error test case", () => {
    expect(
      product(
        {
          loading: false,
          error: false,
          data: [
            {
              productName: "nexus1",
              productType: "Mobile1",
              price: 20,
              id: 1
            }
          ]
        },
        {
          type: types.SAVE_PRODUCTS_SUCCESS,
          payload: {
            productName: "asdfasdf",
            productType: "sadfasdf",
            price: "40",
            id: 3
          }
        }
      )
    ).toEqual({
      data: [
        {
          productName: "nexus1",
          productType: "Mobile1",
          price: 20,
          id: 1
        },
        {
          productName: "asdfasdf",
          productType: "sadfasdf",
          price: "40",
          id: 3
        }
      ],
      error: false,
      loading: false
    });
  });
});
