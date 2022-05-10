const initialState = {
  items:[{

  }]
}

export default function cartReducer(state = initialState, action) {
  switch(action.type) {
    case "ADDTOCART":
      return{
        items: state.items
      }
    case "DELETEFROMCART":
      return {
        
      }
    default:
      return state;
  }
    
}