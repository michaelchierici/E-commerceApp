import {ADD_TO_FAV, REMOVE_FROM_FAV} from '../favorite/actionTypes';

export function addToFav(newItem: any[]) {
  return {
    type: ADD_TO_FAV,
    payload: newItem,
  };
}

export function removeFromFav(newItem: any[]) {
  return {
    type: REMOVE_FROM_FAV,
    payload: newItem,
  };
}
