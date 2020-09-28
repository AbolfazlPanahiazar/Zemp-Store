import { combineReducers } from "redux";

import categoriesReducer from "./categories/categoriesReducer";

export default combineReducers({
  categories: categoriesReducer,
});
