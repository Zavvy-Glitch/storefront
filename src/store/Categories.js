import axios from "axios";

const initialState = {
  categories: {},
  active: '',
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATEACTIVE":
      return {
        categories: state.categories,
        active: action.payload,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        categories: [action.payload],
      };
    case "RESET":
      return {
        ...state,
        active: [],
      };
    default:
      return state;
  }
}

// actions creator
export const updateCategory = (category) => {
  return {
    type: "UPDATEACTIVE",
    payload: category,
  };
};

// actions creator
export const reset = () => {
  return {
    type: "RESET",
  };
};

export const getCategory = () => async (dispatch, getState) => {
  let response = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/categories"
  );
  dispatch(setCategory(response.data));
};

export const setCategory = (data) => {
  return {
    type: "GET_CATEGORY",
    payload: data,
  };
};
