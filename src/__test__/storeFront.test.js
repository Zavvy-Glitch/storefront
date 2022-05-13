import { waitFor } from "@testing-library/react";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import categoryReducer, {
  updateCategory,
  setCategory,
  getCategory,
} from "../store/Categories";
import productsReducer, { setProduct, updateProduct } from "../store/Products";
import cartReducer, { addToCart, deleteFromCart } from "../store/Cart";
import thunk from "../store/middleware/thunk";

describe("Testing the categories redux state features", () => {
  const reducers = combineReducers({
    categories: categoryReducer,
    products: productsReducer,
    cart: cartReducer,
  });

  const store = createStore(reducers, applyMiddleware(thunk));

  test("Should be able to activate a category", () => {
    let getState = store.getState();
    store.dispatch(updateCategory("electronics"));
    getState = store.getState();

    expect(getState.categories.active).toBe("electronics");
  });

  xtest("Should be able to set categories", () => {
    let category = store.getState();
    expect(category.categories.categories).toEqual({});

    store.dispatch(setCategory({ results: ["clothes"] }));
    console.log(category);
    expect(true).toEqual(false);
  });

  test("Should be able to filter products", () => {
    store.dispatch(
      setProduct([
        { category: "electronics", name: "blackberry", quantity: 20 },
        { category: "test", name: "test", quantity: 13 },
      ])
    );
    store.dispatch(updateProduct(["test"]));

    let { products } = store.getState();

    expect(products).toEqual(false);
  });

  test("Should fetch categories from API", async () => {
    await waitFor(() => store.dispatch(getCategory()));

    // let { categories } = store.getState();

    expect(true).toBe(false);
  });
});
