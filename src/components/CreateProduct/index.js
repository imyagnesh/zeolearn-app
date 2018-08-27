import React, { Component } from 'react';
import PropTypes from 'prop-types';
import wrapper from '../../HOC/wrapper';

const styles = {
  wrapper: {
    margin: '5px',
  },
};

class CreateProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
  };

  render() {
    const { product, onSubmitForm, onChangeText } = this.props;
    return (
      <form
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        }}
        onSubmit={e => onSubmitForm(e)}
      >
        <h1>{this.props.add(1, 3)}</h1>
        <input type="hidden" value={product.id} name="id" />
        <input
          ref={(ref) => {
            this.productName = ref;
          }}
          style={styles.wrapper}
          type="text"
          value={product.productName}
          name="productName"
          onChange={e => onChangeText(e)}
        />
        <input
          style={styles.wrapper}
          type="text"
          value={product.productType}
          name="productType"
          onChange={e => onChangeText(e)}
        />
        <input
          style={styles.wrapper}
          type="number"
          value={product.price}
          name="price"
          onChange={e => onChangeText(e)}
        />
        <input style={styles.wrapper} type="submit" value="Submit" />
      </form>
    );
  }
}

export default wrapper(CreateProduct);
