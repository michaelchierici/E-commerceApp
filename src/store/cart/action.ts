import {ADD_TO_CART, REMOVE_TO_CART} from '../cart/actionTypes';

export function addToCart(newItem: any) {
  return {
    type: ADD_TO_CART,
    payload: {newItem},
  };
}

export function removeToCard(removedItem: any) {
  return {
    type: REMOVE_TO_CART,
    payload: {removedItem},
  };
}
