import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerTable = styled.div`
  overflow: auto;
`;

export const Container = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  @media screen and (max-width: 480px) {
    padding: 20px 10px;
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
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }

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
    color: #999;
    text-align: left;
    padding: 6px;
    @media screen and (max-width: 480px) {
      text-align: center;
    }
  }

  tbody td {
    color: #000;
    padding: 6px;
    border-bottom: 1px solid #ccc;
    @media screen and (max-width: 480px) {
      text-align: center;
    }
  }

  img {
    width: 100%;
    max-width: 100px;
    min-width: 60px;
  }

  strong {
    color: #333;
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
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
  div {
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
    input {
      border: 1px solid #ccc;
      border-radius: 4px;
      color: #666;
      padding: 6px 0;
      width: 100%;
      min-width: 25px;
      max-width: 50px;
      text-align: center;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
      @media screen and (max-width: 600px) {
        order: 2;
      }
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
    @media screen and (max-width: 600px) {
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
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
