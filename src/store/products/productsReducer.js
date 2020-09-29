import types from "./productsActionTypes";

const INITIAL_DATA = {
  products: [],
  pending: false,
  errors: [],
};

const productsReducer = (state = INITIAL_DATA, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCTS_START:
      return {
        ...state,
        pending: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: payload,
      };
    case types.GET_PRODUCTS_FAIL:
      return {
        ...state,
        pending: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
