import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ProductsSpinner, ProductList, AddButton } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
    loadingProducts: true,
  };

  async componentDidMount() {
    const response = await api.get('products');

    const products = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products, loadingProducts: false });
  }

  handleAddToCart(id) {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  }

  render() {
    const { products, loadingProducts } = this.state;
    const { amount, loadingProduct } = this.props;

    return (
      <>
        {loadingProducts ? (
          <ProductsSpinner>
            <FaSpinner className="spinner" size={48} color="#fff" />
          </ProductsSpinner>
        ) : (
          <ProductList>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{product.formattedPrice}</span>

                <AddButton
                  type="button"
                  loading-data={loadingProduct[product.id]}
                  onClick={() => this.handleAddToCart(product.id)}
                >
                  <div>
                    {loadingProduct[product.id] ? (
                      <FaSpinner className="spinner" size={16} color="#fff" />
                    ) : (
                      <>
                        <MdAddShoppingCart size={16} color="#fff" />{' '}
                        <span>{amount[product.id] || 0}</span>
                      </>
                    )}
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
                </AddButton>
              </li>
            ))}
          </ProductList>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.products.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
  loadingProduct: state.cart.loading.reduce((loading, item) => {
    loading[item.id] = item.status;
    return loading;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
