import types from "./cartActionTypes";
import { toast } from "react-toastify";

export const addToCart = (product, count) => ({ type: types.ADD, payload: { product: product, count: count } });

export const removeFromCart = (productId) => {
  toast.error("محصول از سبد خرید حذف شد");
  return { type: types.REMOVE, payload: productId };
};

export const increaseNumbers = (productId) => ({ type: types.INCREASE, payload: productId });

export const decreaseNumbers = (productId) => ({ type: types.DECREASE, payload: productId });

export const clearCart = () => ({ type: types.CLEAR });
