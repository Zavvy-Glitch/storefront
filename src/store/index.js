import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoryReducer from './Categories';
import productsReducer from './Products';
import cartReducer from './Cart'
import logger from '../store/middleware/logger';
import thunk from '../store/middleware/thunk';

let reducers = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default function initialStore() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));
}