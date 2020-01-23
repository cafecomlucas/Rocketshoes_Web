import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import { ProductsSpinner, ProductList, AddButton } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { addToCartRequest } from '../../store/modules/cart/actions';

export default function Home() {
  const amount = useSelector(state =>
    state.cart.products.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const loadingProduct = useSelector(state =>
    state.cart.loading.reduce((loading, item) => {
      loading[item.id] = item.status;
      return loading;
    }, {})
  );

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products');

      const productsData = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(productsData);
      setLoadingProducts(false);
    }
    getProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(addToCartRequest(id));
  }

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
                onClick={() => handleAddToCart(product.id)}
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
