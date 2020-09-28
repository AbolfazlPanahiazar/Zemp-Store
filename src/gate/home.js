import api from "./api";

export const getProducts = () => {
  return api({
    method: "GET",
    url: "/product",
  });
};
