import {SET_ITEMS_LIST} from './actionTypes';

export interface CART_ITEM_REDUCER_INITIAL_STATE_PROPS {
  itemAddedInCart: any[];
  id: number;
  name: string;
  price: number;
  ammount: number;
  items: any[];
  total: number;
}

export const CART_REDUCER_INITIAL_STATE = {
  itemAddedInCart: [],
  id: Math.random(),
  name: '',
  price: 0,
  ammount: 0,
  items: [],
  total: 0,
};

const productsReducer = (state = CART_REDUCER_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_ITEMS_LIST: {
      const setItemInProductsList = action.payload[0];

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
