import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerNoProducts = styled.div`
  padding-bottom: 10px;
  text-align: center;
  h2 {
    color: #1a1a1a;
    font-size: 32px;
    line-height: 35px;
    padding: 20px 0 5px 0;
  }
  h3 {
    color: #1a1a1a;
    font-size: 22px;
    line-height: 25px;
    padding: 0 0 40px 0;
  }

  a {
    display: inline-block;
    margin-top: 20px;
    background: #4f86bd;
    color: #e6e6e6;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.2s;
    margin: 0 auto;
    &:hover {
      background: ${darken(0.2, '#4f86bd')};
    }
  }
`;

export const ContainerTable = styled.div`
  overflow: auto;
`;

export const Container = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  @media screen and (max-width: 480px) {
    padding: 20px 5px;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }

    button {
      background: #bdbdbd;
      color: #e6e6e6;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      cursor: default;

      @media screen and (max-width: 480px) {
        order: 1;
        margin-top: 20px;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  thead th {
    color: #808080;
    text-align: left;
    padding: 6px;
    font-size: 16px;
    @media screen and (max-width: 480px) {
      text-align: center;
      font-size: 12px;
    }
  }

  tbody td {
    color: #1a1a1a;
    padding: 6px;
    border-bottom: 1px solid #bdbdbd;
    &:first-child {
      text-align: center;
    }
    @media screen and (max-width: 480px) {
      text-align: center;
      padding: 0;
    }
  }
`;

export const ProductLine = styled.tr`
  opacity: ${props => (props['data-loading'] ? 0.6 : 1)};
  height: 118px;

  img {
    width: 100%;
    max-width: 100px;
    min-width: 60px;
    min-height: 60px;
    background: #e6e6e6;
  }

  strong {
    color: #1a1a1a;
    display: block;
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    @media screen and (max-width: 640px) {
      font-size: 14px;
    }
  }
  div {
    display: flex;
    align-items: center;
    @media screen and (max-width: 640px) {
      flex-direction: column;
    }
    input {
      border: 1px solid #bdbdbd;
      border-radius: 4px;
      color: #808080;
      padding: 6px 0;
      width: 100%;
      min-width: 25px;
      max-width: 50px;
      text-align: center;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
      @media screen and (max-width: 640px) {
        order: 2;
      }
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
    &[disabled] {
      cursor: default;
      opacity: 0.6;
      svg {
        color: #bdbdbd !important;
      }
    }
    @media screen and (max-width: 640px) {
      &:first-child {
        order: 3;
      }
      &:last-child {
        order: 1;
      }
    }
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;
  color: #333;
  text-align: right;

  span {
    color: #808080;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
