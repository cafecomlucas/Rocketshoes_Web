import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/images/rocketshoes-logo.svg';

export default function Header() {
  const cartSize = useSelector(state => state.cart.products.length);
  const newItemStatus = useSelector(state => state.cart.newItemStatus);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Ir para o início" />
      </Link>
      <Cart to="/cart" newItem={newItemStatus}>
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#e6e6e6" />
      </Cart>
    </Container>
  );
}
