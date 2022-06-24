import {ADD_TO_CART, REMOVE_TO_CART} from '../cart/actionTypes';

export interface newItem {
  id: number;
}

export function addToCart(
  id: any,
  name: string,
  price: number,
  ammount: number,
) {
  return {
    type: ADD_TO_CART,
    payload: {id, name, price, ammount},
  };
}

export function removeToCard(removedItem: any) {
  return {
    type: REMOVE_TO_CART,
    payload: {removedItem},
  };
}
