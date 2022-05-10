const initialState = {
  categories: [
    {
      id: 1,
      name: "electronics",
      dispName: "ELECTRONICS",
      description: "Something about product",
    },
    {
      id: 2,
      name: "food",
      dispName: "FOOD",
      description: "Something about food",
    },
  ],
  active: "",
};

export default function categoryReducer(state = initialState, action) {
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

  // actions creator
  export const updateCategory = (category) => {
    return{
      type: "UPDATEACTIVE",
      payload: category
    }
  }

  // actions creator
  export const reset = () => {
    return{
      type: "RESET"
    }
  }