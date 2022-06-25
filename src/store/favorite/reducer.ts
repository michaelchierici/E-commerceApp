import {ADD_TO_FAV, REMOVE_TO_FAV} from './actionTypes';

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
    case REMOVE_TO_FAV: {
      return {
        ...state,
        isFavorite: false,
      };
    }
    default:
      return state;
  }
};

export default favoriteReducer;
