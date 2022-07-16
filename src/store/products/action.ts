import {SET_ITEMS_LIST} from './actionTypes';

export function setItemsLists(
  id?: number,
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
