import {
  ADD_AMMOUNT,
  ADD_TO_CART,
  DEL_AMMOUNT,
  REMOVE_FROM_CART,
} from '../cart/actionTypes';

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
    ammount,
  };
}

export function delAmmount(ammount: number) {
  return {
    type: DEL_AMMOUNT,
    ammount,
  };
}

export function removeFromCart(delItem: any) {
  return {
    type: REMOVE_FROM_CART,
    delItem,
  };
}
