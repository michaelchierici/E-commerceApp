import {ADD_TO_FAV, REMOVE_TO_FAV} from '../favorite/actionTypes';

export function addToFav(id: any, name: string, price: number) {
  return {
    type: ADD_TO_FAV,
    payload: {id, name, price},
  };
}

export function removeToFav(id: any, name: string, price: number) {
  return {
    type: REMOVE_TO_FAV,
    payload: {id, name, price},
  };
}
