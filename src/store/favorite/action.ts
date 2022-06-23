import {ADD_TO_FAV, REMOVE_TO_FAV} from '../favorite/actionTypes';

export function addToFav(newItem: any) {
  return {
    type: ADD_TO_FAV,
    payload: {newItem},
  };
}

export function removeToFav(removedItem: any) {
  return {
    type: REMOVE_TO_FAV,
    payload: {removedItem},
  };
}
