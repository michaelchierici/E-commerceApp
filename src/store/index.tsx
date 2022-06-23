import {createStore} from 'redux';

import {StateType} from 'typesafe-actions';

import rootReducer from './reducers';

const store = createStore(rootReducer);

export type StoreType = StateType<typeof rootReducer>;

export default store;
