import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding-top: 20px;
  list-style: none;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    min-width: 122px;
    > img {
      align-self: center;
      width: 100%;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
      color: #333;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      color: #000;
    }
    @media screen and (max-width: 880px) {
      > strong {
        font-size: 14px;
      }
      > span {
        font-size: 16px;
      }
    }

    button {
      margin-top: auto;
      display: flex;
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      align-items: center;
      font-size: 14px;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
        transition: background 0.2s;
      }

      @media screen and (max-width: 880px) {
        flex-direction: column;
        align-items: stretch;
        font-size: 12px;
      }

      div {
        display: flex;
        background: rgba(0, 0, 0, 0.2);
        padding: 12px;
        align-self: stretch;
        justify-content: center;
        align-items: center;
        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        padding: 10px;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
