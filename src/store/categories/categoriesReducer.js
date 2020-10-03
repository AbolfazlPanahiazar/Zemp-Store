import types from "./categoriesActionTypes";

const INITIAL_STATE = {
  categories: [],
  pending: false,
  selected: null,
  errors: null,
};

const categoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.GET_CATEGORIES_START:
      return {
        ...state,
        pending: true,
      };
    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: payload,
      };
    case types.GET_CATEGORIES_FAIL:
      return {
        ...state,
        pending: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
