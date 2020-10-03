import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Product = lazy(() => import("../pages/Product/Product"));
const CategoryPage = lazy(() => import("../pages/CategoryPage/CategoryPage"));

const routes = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/cart", component: Cart },
  { exact: true, path: "/:productId", component: Product },
  { exact: true, path: "/categories/:categoryId", component: CategoryPage },
];

export default routes;
