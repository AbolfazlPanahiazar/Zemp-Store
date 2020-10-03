import React, { Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import routes from "./routes/routes";
import Container from "./HOCs/Container/Container";
import Loading from "./pages/Loading/Loading";

import { getProducts } from "./store/products/productsThunk";
import { getCategories } from "./store/categories/categoriesThunk";

function App({ getProducts, getCategories }) {
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Container>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Container>
      </Suspense>
    </div>
  );
}

export default connect(null, { getProducts, getCategories })(App);
