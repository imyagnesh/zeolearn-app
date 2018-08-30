import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import CreateProduct from "../../components/CreateProduct";
import ProductList from "../../components/ProductList";

import configureStore from "../../store/configureStore";

import { Product } from "./index";

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
      getProducts: jest.fn()
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
    //   expect(enzymeWrapper.find('header').hasClass('header')).toBe(true);
    //   expect(enzymeWrapper.find('h1').text()).toBe('todos');
    //   const todoInputProps = enzymeWrapper.find('TodoTextInput').props();
    //   expect(todoInputProps.newTodo).toBe(true);
    //   expect(todoInputProps.placeholder).toEqual('What needs to be done?');
  });
});
