import types from "./cartActionTypes";

const INITIAL_STATE = {
  products: [],
  numbers: [],
  sum: 0,
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.ADD: {
      const newProductts = [...state.products, { ...payload.product, count: payload.count }];
      const sum = newProductts.reduce((sum, item) => sum + item.price * count, 0);
      return {
        ...state,
        sum: sum,
        products: newProductts,
      };
    }
    case types.REMOVE: {
      const newProductts = state.products.filter((item) => item.id !== payload);
      const sum = newProductts.reduce((sum, item) => sum + item.price * count, 0);
      return {
        ...state,
        sum: sum,
        products: newProductts,
      };
    }
    case types.INCREASE: {
      const newProductts = state.products.map((item) => (item.id === payload ? { ...item, count: item.count + 1 } : item));
      const sum = newProductts.reduce((sum, item) => sum + item.price * item.count, 0);
      return {
        ...state,
        sum: sum,
        products: newProductts,
      };
    }
    case types.DECREASE: {
      const newProductts = state.products.map((item) => (item.id === payload ? { ...item, count: item.count - 1 } : item));
      const sum = newProductts.reduce((sum, item) => sum + item.price * item.count, 0);
      return {
        ...state,
        sum: sum,
        products: newProductts,
      };
    }
    case types.CLEAR:
      return {
        products: [],
        numbers: [],
        sum: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
