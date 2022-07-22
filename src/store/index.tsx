import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {StateType} from 'typesafe-actions';

import rootReducer from './reducers';
import rootSaga from './saga';
const sagaMiddleware = createSagaMiddleware();

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export type StoreType = StateType<typeof rootReducer>;

export default store;
