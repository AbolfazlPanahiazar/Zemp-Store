import types from "./cartActionTypes";

const INITIAL_STATE = {
  products: [],
  sum: 0,
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.ADD: {
      const products = [...state.products];
      const sum = 0;
      return {
        ...state,
        sum: sum,
        products: products,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
