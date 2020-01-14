import { produce } from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        draft.push(action.product);
      });
    default:
      return state;
  }
}
