import {combineReducers} from 'redux';

import cartReducer from './cart/reducer';
import favoriteReducer from './favorite/reducer';
import productsReducer from './products/reducer';
import loadingReducer from './loading/reducer';

const rootReducer = combineReducers({
  cartReducer,
  favoriteReducer,
  productsReducer,
  loadingReducer,
});

export default rootReducer;
