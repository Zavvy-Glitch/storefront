const initialState = {
  categories: [
    {
      id: 1,
      name: "electronics",
      dispName: "ELECTRONICS",
      description: "Something about product",
      isActive: false,
    },
    {
      id: 2,
      name: "food",
      dispName: "FOOD",
      description: "Something about food",
      isActive: false,
    },
  ],
  active: "",
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATEACTIVE":
      return {
        categories: state.categories,
        active: action.payload.name
      }
      case "RESET":
        return initialState;
      default:
        return state
    }
  }

  export const updateCategory = (category) => {
    return{
      type: "UPDATEACTIVE",
      payload: category
    }
  }

  export const reset = () => {
    return{
      type: "RESET"
    }
  }

  export default categoryReducer;