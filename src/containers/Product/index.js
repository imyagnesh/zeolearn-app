import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action from '../../actions';
import * as types from '../../constants/actionTypes';

const styles = {
  wrapper: {
    margin: '5px',
  },
};

const initialProduct = {
  id: '',
  productName: '',
  productType: '',
  price: 0,
};

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: initialProduct,
      productList: [],
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.test = this.test.bind(this);
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.getProducts();
  }

  onChangeText(e) {
    const { product } = this.state;
    this.setState({ product: { ...product, [e.target.name]: e.target.value } });
  }

  onSubmitForm(e) {
    e.preventDefault();
    const { productList, product } = this.state;
    if (product.id) {
      const index = productList.findIndex(x => x.id === product.id);
      this.setState({
        productList: [...productList.splice(0, index), product, ...productList.splice(index + 1)],
        product: initialProduct,
      });
    } else {
      const { actions } = this.props;
      actions.saveProducts({
        productName: product.productName,
        productType: product.productType,
        price: product.price,
      });
      this.setState({
        product: initialProduct,
      });
    }
  }

  updateProduct(item) {
    this.setState({
      product: item,
    });
  }

  deleteProduct(item) {
    const { productList } = this.state;
    this.setState({
      productList: productList.filter(x => x.id !== item.id),
    });
  }

  onSearch(e) {
    e.preventDefault();
    const { productList } = this.state;
    console.log(this.searchText.name);
    this.setState({
      productList: productList.filter(
        x => x.productName.toLowerCase() === this.searchText.value.toLowerCase(),
      ),
    });
    this.searchText.value = '';
  }

  test() {
    const { actions } = this.props;
    // actions(types.LOAD_PRODUCTS);
    // setTimeout(() => {
    //   actions(types.LOAD_PRODUCTS_FAIL, 'Oops! something goes wrong');
    // }, 3000);
  }

  render() {
    const { product, productList } = this.state;
    const { products } = this.props;
    const { loading, data, error } = products;
    return (
      <div>
        {loading && <span>Loading.....</span>}
        {error && <span>{error.toString()}</span>}
        <form
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}
          onSubmit={this.onSubmitForm}
        >
          <input type="hidden" value={product.id} name="id" />
          <input
            ref={(ref) => {
              this.productName = ref;
            }}
            style={styles.wrapper}
            type="text"
            value={product.productName}
            name="productName"
            onChange={this.onChangeText}
          />
          <input
            style={styles.wrapper}
            type="text"
            value={product.productType}
            name="productType"
            onChange={this.onChangeText}
          />
          <input
            style={styles.wrapper}
            type="number"
            value={product.price}
            name="price"
            onChange={this.onChangeText}
          />
          <input style={styles.wrapper} type="submit" value="Submit" />
        </form>
        <form onSubmit={this.onSearch}>
          <input
            type="text"
            ref={(ref) => {
              this.searchText = ref;
            }}
            name="search"
            onChange={(e) => {
              this.searchText.value = e.target.value;
            }}
          />
          <input type="submit" value="Search" />
        </form>
        <table
          style={{
            width: '100%',
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Product Type</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.productType}</td>
                <td>{item.price}</td>
                <td>
                  <input type="button" value="edit" onClick={() => this.updateProduct(item)} />
                  <input type="button" value="delete" onClick={() => this.deleteProduct(item)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input type="button" value="test" onClick={this.test} />
      </div>
    );
  }
}

Product.propTypes = {};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
