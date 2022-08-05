import {
  ADD_AMMOUNT,
  ADD_TO_CART,
  DEL_AMMOUNT,
  REMOVE_FROM_CART,
} from './actionTypes';

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

const cartReducer = (state = CART_REDUCER_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const itemAddedInCart = action;
      console.log(itemAddedInCart);
      return {
        ...state,
        itemAddedInCart: [...state.itemAddedInCart, itemAddedInCart],
      };
    }

    case ADD_AMMOUNT: {
      const ammount = action.ammount;

      return {
        ...state,
        ammount: ammount + 1,
      };
    }

    case DEL_AMMOUNT: {
      const ammount = action.ammount;
      return {
        ...state,
        ammount: ammount - 1,
      };
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        itemAddedInCart: action.delItem,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
