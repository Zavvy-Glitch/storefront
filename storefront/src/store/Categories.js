const initialState = {
  categories:[
    {id: 1, name: 'Electronics', normalName: 'Electronics', dispName:'ELECTRONICS', description: 'Something about product'},
    {id: 2, name: 'Food', normalName: 'Food', dispName:'FOOD', description: 'Something about food'}
  ],
  active: 'Electronics'
}

function categoryReducer(state = initialState, action) {
  
  switch (action.type) {
    case 'ACTIVE':
      return {
        ...state,
        categories: state.categories.map(category => {
          if(category.name === action.payload.name) {
            return {
              name: category.name, 
              normalName: category.normalName
            }
          }
          return category;
        }),
        // active: state.category.name
      }
      case 'INACTIVE':
        return initialState;
      default:
        return state;
  }
}

export const active = (category) => {
  return {
    type: 'ACTIVE',
    payload: category
  }
}

export const inactive = () => {
  return {
    type: 'INACTIVE',
  }
}

export default categoryReducer;