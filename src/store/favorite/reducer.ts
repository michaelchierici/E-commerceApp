import {ADD_TO_FAV, REMOVE_FROM_FAV} from './actionTypes';

export interface FAVORITE_ITEM_REDUCER_INITIAL_STATE_PROPS {
  id: number;
  isFavorite: boolean;
  favItem: any[];
}

export const FAVORITE_REDUCER_INITIAL_STATE: FAVORITE_ITEM_REDUCER_INITIAL_STATE_PROPS =
  {
    id: 0,
    isFavorite: false,
    favItem: [],
  };

const favoriteReducer = (
  state = FAVORITE_REDUCER_INITIAL_STATE,
  action: any,
): FAVORITE_ITEM_REDUCER_INITIAL_STATE_PROPS => {
  switch (action.type) {
    case ADD_TO_FAV: {
      const favItem = action.payload;
      return {
        ...state,
        favItem: [...state.favItem, favItem],
      };
    }
    case REMOVE_FROM_FAV: {
      return {
        ...state,
        favItem: action.payload,
      };
    }
    default:
      return state;
  }
};

export default favoriteReducer;
