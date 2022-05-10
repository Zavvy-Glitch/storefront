import categoryReducer from '../component/categories/Categories';
import productsReducer from '../component/products/Products';
import { legacy_createStore as createStore, combineReducers } from 'redux'

describe('Testing the categories redux state features', () => {
  const reducers = combineReducers({
    categories: categoryReducer,
    products: productsReducer,
  })

  const store = createStore(reducers);

  test('Store should have categories, and a list of products', () => {

    const state = store.getState();

    expect(state.categories.categories[0].name).toBe('electronics')
    expect(state.products.products[0].category).toBe('electronics')
  })
})