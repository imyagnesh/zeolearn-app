import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import CreateProduct from "../../components/CreateProduct";
import ProductList from "../../components/ProductList";

import configureStore from "../../store/configureStore";

import { Product, initialProduct } from "./index";

const store = configureStore();

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    products: {
      loading: false,
      data: [],
      error: false
    },
    actions: {
      getProducts: jest.fn(),
      saveProducts: jest.fn()
    }
  };
  const enzymeWrapper = shallow(<Product store={store} {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("Product", () => {
  it("renders correctly", () => {
    const { props } = setup();
    const tree = renderer.create(<Product {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render self and subcomponents", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(CreateProduct).exists()).toBe(true);
    expect(enzymeWrapper.find(ProductList).exists()).toBe(true);
    const createProduct = enzymeWrapper.find(CreateProduct).props();
    expect(createProduct.product).toEqual(initialProduct);
  });

  it("should search product", () => {
    const { enzymeWrapper, props } = setup();
    const form = enzymeWrapper.find("form").props();
    form.onSubmit({ preventDefault: jest.fn() });
    expect(props.actions.saveProducts.mock.calls.length).toBe(1);
    form.onSubmit({ preventDefault: jest.fn() });
    expect(props.actions.saveProducts.mock.calls.length).toBe(2);
  });
});
