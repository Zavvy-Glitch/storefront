const initialState = {
  products: [
    { 
      id: 1,
      category: 'Electronics', 
      name:'Computer' , 
      description: 'NEWLY USED / 2016 HP', 
      price:'FREE', 
      inventoryCount: '1',
    }, 
    {
      id: 2,
      category: 'Food',
      name: 'Banana',
      description: 'It\'s yellow',
      price:'FREE',
      inventoryCount: '1',
    }
  ],
}

function productsReducer (state = initialState, action) {

  switch (action.type) {
    case 'PRODUCTS':
      return {
        ...state,
        products: state.products.map(product => {
          if(product.category === action.payload.category) {
            return {
              name: product.name,
              description: product.description,
              price: product.price,
              inventoryCount: product.inventoryCount
            }
          }
          return product;
        }),
      }
      case 'RESET':
        return initialState;
      default:
        return state;
  }
}

export const productItem = (product) => {
  return {
    type: 'PRODUCTS',
    payload: product
  }
}


export default productsReducer;