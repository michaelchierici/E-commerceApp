import {all} from 'redux-saga/effects';
import getPokemnos from './products/saga';

// public

export default function* rootSaga() {
  yield all([
    // public
    getPokemnos(),
  ]);
}
