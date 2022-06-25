import {ADD_TO_CART, REMOVE_TO_CART, SET_ITEMS_LIST} from '../cart/actionTypes';

export function setItemsLists(
  id?: any,
  name?: string,
  price?: number,
  ammount?: number,
) {
  return {
    type: SET_ITEMS_LIST,
    payload: id,
    name,
    price,
    ammount,
  };
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
