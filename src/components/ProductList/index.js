import React, { Component } from 'react';
import PropTypes from 'prop-types';
import wrapper from '../../HOC/wrapper';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, updateProduct, deleteProduct } = this.props;
    return (
      <div>
        <h1>{this.props.title}</h1>
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
                  <input type="button" value="edit" onClick={() => updateProduct(item)} />
                  <input type="button" value="delete" onClick={() => deleteProduct(item)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
  updateProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default wrapper(ProductList);
