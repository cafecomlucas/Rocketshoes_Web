import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSuccess } from './actions';

function* addToCart(action) {
  const { data: product } = yield call(api.get, `/products/${action.id}`);

  yield put(addToCartSuccess(product));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
