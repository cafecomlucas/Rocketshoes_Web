import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart(action) {
  const { id } = action;

  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const {
    data: { amount: stockAmount },
  } = yield call(api.get, `/stock/${id}`);
  const currentAmount = productExists ? productExists.amount : 0;

  const nextAmount = currentAmount + 1;

  if (nextAmount > stockAmount) {
    console.tron.warn('Erro ao adicionar no carrinho');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, nextAmount));
  } else {
    const { data } = yield call(api.get, `/products/${id}`);
    const product = {
      ...data,
      amount: 1,
    };
    yield put(addToCartSuccess(product));
  }
}

function* updateAmount(action) {
  const { id, amount: nextAmount } = action;
  if (nextAmount <= 0) return;

  const {
    data: { amount: stockAmount },
  } = yield call(api.get, `/stock/${id}`);

  if (nextAmount > stockAmount) {
    console.tron.warn('Erro ao adicionar no carrinho');
    return;
  }
  yield put(updateAmountSuccess(id, nextAmount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
