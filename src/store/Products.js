import axios from 'axios';

const initialState = {
  products: [],
  filterProduct: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT": 
      return {
        ...state,
        products: action.payload,
      };
    case "UPDATEACTIVE":
      return {
        ...state,
        filterProduct: state.products.filter(
          (product) => product.category === action.payload.name
          ),
        };
    case "ADDTOCART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.name === action.payload.name) {
            product.inStock = product.inStock - 1;
          }
          return product;
        }),
      };
    case "DELETEFROMCART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.name === action.payload.name) {
            product.inStock = product.inStock + 1;
          }
          return product;
        }),
      };

    case "RESET":
      return {
        ...state,
        filterProduct: [],
      };
    default:
      return state;
  }
}


export const updateProduct = (category) => {
  return {
    type: "UDPATEACTIVE",
    payload: category,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const getProduct = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProduct(response.data.results));
};

export const setProduct = (data) => {
  return {
    type: "GET_PRODUCT",
    payload: data
  }
}

export default productsReducer;
