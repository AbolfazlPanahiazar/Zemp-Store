import types from "./productsActionTypes";
import api from "../../gate/api";

export const getProducts = () => {
  return (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_START });
    api
      .get("products", { per_page: 100 })
      .then((response) => {
        console.log(response);
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: types.GET_PRODUCTS_FAIL, payload: "Failed" });
      });
  };
};
