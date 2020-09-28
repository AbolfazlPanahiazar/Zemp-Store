import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes/routes";
import Container from "./HOCs/Container/Container";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h4>در حال دریافت اطلاعات ...</h4>}>
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
