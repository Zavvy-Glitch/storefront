import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoryReducer from '../component/categories/Categories';
import productsReducer from '../component/products/Products'

let reducers = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
});

export default function initialStore() {
  return createStore(reducers, composeWithDevTools());
}