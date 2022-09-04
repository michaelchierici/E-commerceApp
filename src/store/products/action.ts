import {SET_ITEMS_LIST} from './actionTypes';

interface Product {
  id?: number;
  name?: string;
  price?: number;
  ammount?: number;
}

export function setItemsLists(item: Product) {
  return {
    type: SET_ITEMS_LIST,
    item,
  };
}
