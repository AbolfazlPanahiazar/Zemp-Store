import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes/routes";
import Container from "./HOCs/Container/Container";
import Loading from "./pages/Loading/Loading";

function App() {
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

export default App;
