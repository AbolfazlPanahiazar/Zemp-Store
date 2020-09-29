import { combineReducers } from "redux";

import categoriesReducer from "./categories/categoriesReducer";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";

export default combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});
