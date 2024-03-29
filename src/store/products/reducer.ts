import {SET_ITEMS_LIST} from './actionTypes';

export interface CART_ITEM_REDUCER_INITIAL_STATE_PROPS {
  itemAddedInCart: any[];
  name: string;
  price: number;
  ammount: number;
  items: any[];
  total: number;
}

export const CART_REDUCER_INITIAL_STATE = {
  itemAddedInCart: [],
  name: '',
  price: 0,
  ammount: 0,
  items: [],
  total: 0,
};

const productsReducer = (state = CART_REDUCER_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_ITEMS_LIST: {
      const setItemInProductsList = action.item;
      return {
        ...state,
        setItemInProductsList,
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
