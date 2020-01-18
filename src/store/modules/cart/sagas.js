import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSuccess, updateAmount } from './actions';

function* addToCart(action) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === action.id)
  );

  if (productExists) {
    const { amount } = productExists;
    yield put(updateAmount(action.id, amount + 1));
  } else {
    const { data } = yield call(api.get, `/products/${action.id}`);
    const product = {
      ...data,
      amount: 1,
    };
    yield put(addToCartSuccess(product));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
