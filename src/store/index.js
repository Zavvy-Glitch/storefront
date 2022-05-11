import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoryReducer from '../component/categories/Categories';
import productsReducer from '../component/products/Products';
import cartReducer from '../component/cart/Cart'

let reducers = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default function initialStore() {
  return createStore(reducers, composeWithDevTools());
}