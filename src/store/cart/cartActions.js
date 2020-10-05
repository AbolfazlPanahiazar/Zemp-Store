import types from "./cartActionTypes";

export const addToCart = (product, count) => ({ type: types.ADD, payload: { product: product, count: count } });

export const removeFromCart = (productId) => ({ type: types.REMOVE, payload: productId });

export const increaseNumbers = (productId) => ({ type: types.INCREASE, payload: productId });

export const decreaseNumbers = (productId) => ({ type: types.DECREASE, payload: productId });

export const clearCart = () => ({ type: types.CLEAR });
