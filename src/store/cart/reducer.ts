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
      const items: any = state.items;
      const newItem = action;
      const total = action.total;
      items.push(total);
      state.items = items;
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
      const items: any = state.items;
      const ammount = action.ammount;
      const totalSum = action.sumTotal;
      items.push(totalSum);
      state.items = items;
      const totalValue = items.reduce((prev: any, curr: any) => prev + curr, 0);

      return {
        ...state,
        ammount: ammount + 1,
        totalSum: totalValue,
      };
    }

    case DEL_AMMOUNT: {
      const items: any = state.items;
      const ammount = action.ammount;
      const totalSub = action.subTotal;
      items.push(totalSub);
      state.items = items;
      const totalValue = items.reduce((prev: any, curr: any) => prev + curr, 0);

      return {
        ...state,
        ammount: ammount - 1,
        totalSub: totalValue,
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
