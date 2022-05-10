import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoryReducer from './Categories';
import productsReducer from './Products'

let reducers = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}