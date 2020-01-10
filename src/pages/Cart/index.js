import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ContainerTable, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ContainerTable>
        <ProductTable>
          <thead>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </thead>
          <tbody>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-caminhada-detalhes-em-couro-masculino/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis maneiro</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readyOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tbody>
        </ProductTable>
      </ContainerTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
