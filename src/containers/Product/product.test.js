import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateProduct from '../../components/CreateProduct';
import ProductList from '../../components/ProductList';

import configureStore from '../../store/configureStore';

import Product from './index';

const store = configureStore();

configure({ adapter: new Adapter() });

function setup() {
  const props = {
    products: {},
    actions: {},
  };
  const enzymeWrapper = mount(<Product store={store} {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('Product', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    const createProduct = enzymeWrapper.find(CreateProduct).props();
    expect(createProduct.product).toBe(true);
    //   expect(enzymeWrapper.find('header').hasClass('header')).toBe(true);
    //   expect(enzymeWrapper.find('h1').text()).toBe('todos');
    //   const todoInputProps = enzymeWrapper.find('TodoTextInput').props();
    //   expect(todoInputProps.newTodo).toBe(true);
    //   expect(todoInputProps.placeholder).toEqual('What needs to be done?');
  });
});

// it('renders without crashing', () => {
//   shallow(
//     <Provider store={store}>
//       <Product />
//     </Provider>,
//   );
// });
