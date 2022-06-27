import {
  ADD_AMMOUNT,
  ADD_TO_CART,
  DEL_AMMOUNT,
  REMOVE_FROM_CART,
  SET_ITEMS_LIST,
} from '../cart/actionTypes';

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
  id: number,
  name: string,
  price: number,
  ammount: number,
) {
  return {
    type: ADD_TO_CART,
    id,
    name,
    price,
    ammount,
  };
}

export function addAmmount(ammount: number) {
  return {
    type: ADD_AMMOUNT,
    payload: ammount,
  };
}

export function delAmmount(ammount: number) {
  return {
    type: DEL_AMMOUNT,
    payload: ammount,
  };
}

export function removeFromCart(delItem: any) {
  return {
    type: REMOVE_FROM_CART,
    payload: delItem,
  };
}
