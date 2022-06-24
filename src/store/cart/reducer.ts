import {ADD_TO_CART, REMOVE_TO_CART} from './actionTypes';

export interface CART_ITEM_REDUCER_INITIAL_STATE_PROPS {
  newItem: any[];
  id: number;
  name: string;
  price: number;
  ammount: number;
}

export const CART_REDUCER_INITIAL_STATE = {
  newItem: {},
  id: 0,
  name: '',
  price: 0,
  ammount: 0,
};

const cartReducer = (state = CART_REDUCER_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;

      return {
        ...state,
        newItem,
      };
    }
    case REMOVE_TO_CART: {
      const {newItem} = action.payload;
      newItem.filter((id: number) => newItem.id !== id);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
