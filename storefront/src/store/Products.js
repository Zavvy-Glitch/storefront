const initialState = {
  products: [
    { 
      id: 1,
      category: 'electronics', 
      name:'Computer' , 
      description: 'NEWLY USED / 2016 HP', 
      price:'FREE', 
      inventoryCount: 100,
    }, 
    {
      id: 2,
      category: 'food',
      name: 'Banana',
      description: 'It\'s yellow',
      price:'FREE',
      inventoryCount: 50,
    }
  ],
  filterProduct: []
}

function productsReducer (state = initialState, action) {

  switch (action.type) {
    case 'UPDATEACTIVE':
      return {
        ...state,
        filterProduct: state.products.filter(product => product.category === action.payload.name)
      }
      case 'RESET':
        return {
          ...state,
          filterProduct: []
        }
      default:
        return state;
    } 
  }



export const updateList = (category) => {
  return {
    type: 'UDPATEACTIVE',
    payload: category
  }
}

export const reset = () => {
  return{
    type: "RESET"
  }
}


export default productsReducer;