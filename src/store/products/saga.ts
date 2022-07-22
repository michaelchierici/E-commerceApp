/* eslint-disable quotes */
import {call, all, fork, put, takeLatest} from 'redux-saga/effects';
import {api} from '../../services/api';
import {isLoading} from '../actions';
import {setItemsLists} from './action';

import {SET_ITEMS_LIST} from './actionTypes';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getProductstoList({payload}: any) {
  try {
    const {id, name, ammount, price} = payload;

    const response: ResponseGenerator = yield call(api.get, `/pokemons`);
    const pokemons = response;

    yield put(setItemsLists(response as any));

    yield put(isLoading(false));
    console.log(response);
    return pokemons;
  } catch (error) {
    const message = 'falha ao obter dados';

    console.log(error, message);
  }
}

export function* watchGetPokemons() {
  yield takeLatest(SET_ITEMS_LIST, getProductstoList);
}

function* getPokemnos() {
  yield all([fork(watchGetPokemons)]);
}

export default getPokemnos;
