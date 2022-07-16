import {combineReducers} from 'redux';

import cartReducer from './cart/reducer';
import favoriteReducer from './favorite/reducer';
import productsReducer from './products/reducer';

const rootReducer = combineReducers({
  cartReducer,
  favoriteReducer,
  productsReducer,
});

export default rootReducer;
