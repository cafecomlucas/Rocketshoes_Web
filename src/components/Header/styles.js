import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const blinkColor = keyframes`
  from{
    opacity:0;
  }
  10%{
    opacity:0;
    color:#fff;
    text-shadow: 0 0 20px #fff;
  }
  11%{opacity:1;}
`;

export const Container = styled.header`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
  min-width: 264px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }

  strong,
  span,
  svg {
    ${props =>
      props.newItem &&
      css`
        animation: ${blinkColor} ease-out 1200ms;
      `}
  }

  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }

  div {
    margin-right: 10px;
    text-align: right;

    strong {
      display: block;
      color: #e6e6e6;
    }

    span {
      font-size: 12px;
      color: #808080;
    }
  }
`;
