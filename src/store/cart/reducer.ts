import {
  ADD_AMMOUNT,
  ADD_TO_CART,
  DEL_AMMOUNT,
  REMOVE_TO_CART,
  SET_ITEMS_LIST,
} from './actionTypes';

export interface CART_ITEM_REDUCER_INITIAL_STATE_PROPS {
  newItem: any[];
  id: number;
  name: string;
  price: number;
  ammount: number;
  delItem: any[];
}

export const CART_REDUCER_INITIAL_STATE = {
  newItem: [],
  id: Math.random(),
  name: '',
  price: 0,
  ammount: 0,
  delItem: [],
};

const cartReducer = (state = CART_REDUCER_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action;

      return {
        ...state,
        newItem: [...state.newItem, newItem],
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
      const ammount = action.payload;

      return {
        ...state,
        ammount: ammount + 1,
      };
    }

    case DEL_AMMOUNT: {
      const ammount = action.payload;

      return {
        ...state,
        ammount: ammount - 1,
      };
    }

    case REMOVE_TO_CART: {
      const delItem = action.payload;
      const filtered = delItem.filter((item: any) => delItem.id !== item.id);
      console.log(delItem, 'reducer');
      return {
        ...state,
        delItem: filtered,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
