const initialState = {
    cartItems: [],
    cartCount: 0
}

export default function cartReducer(state = initialState, action) {
  switch(action.type) {
    case "ADDTOCART":
      return{
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartCount: state.cartCount + 1,
      }
    case "DELETEFROMCART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item !== action.payload),
        cartCount: state.cartCount - 1,
      }
    default:
      return state;
  }
    
}

export const addToCart = (item) => {
  return {
    type: "ADDTOCART",
    payload: item,
  }
}

export const deleteFromCart = (item) => {
  return {
    type: "DELETEFROMCART",
    payload: item,
  }
}