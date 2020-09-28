import types from "./categoriesActionTypes";
import api from "../../gate/api";

export const getCategories = () => {
  return (dispatch) => {
    dispatch({ type: types.GET_CATEGORIES_START });
    api
      .get("products/categories", { per_page: 100 })
      .then((response) => {
        dispatch({ type: types.GET_CATEGORIES_SUCCESS, payload: response.data });
      })
      .catch((errors) => {
        console.log(errors);
        dispatch({ type: types.GET_CATEGORIES_FAIL, payload: errors });
      });
  };
};
