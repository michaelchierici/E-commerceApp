import {
  ADD_AMMOUNT,
  ADD_TO_CART,
  DEL_AMMOUNT,
  REMOVE_FROM_CART,
  SET_ITEMS_LIST,
} from './actionTypes';

export interface CART_ITEM_REDUCER_INITIAL_STATE_PROPS {
  newItem: any[];
  id: number;
  name: string;
  price: number;
  ammount: number;
  items: any[];
  total: number;
}

export const CART_REDUCER_INITIAL_STATE = {
  newItem: [],
  id: Math.random(),
  name: '',
  price: 0,
  ammount: 0,
  items: [],
  total: 0,
};

const cartReducer = (state = CART_REDUCER_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action;
      const total = action.total;

      const items: any = state.items;
      state.items = items;

      items.push(total);
      const totalValue = items.reduce((prev: any, curr: any) => prev + curr, 0);

      return {
        ...state,
        newItem: [...state.newItem, newItem],
        total: totalValue,
      };
    }
    case SET_ITEMS_LIST: {
      const setItem = action.payload;

      return {
        ...state,
        setItem,
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
        newItem: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
