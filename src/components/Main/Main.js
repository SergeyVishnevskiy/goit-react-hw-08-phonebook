import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import phonebookRoutes from "../../routes/phonebookRoutes";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";

const Main = () => (
  <main>
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        {phonebookRoutes.map((route) => {
          return route.isPrivate ? (
            <PrivateRoute key={route.path} {...route} />
          ) : (
            <PublicRoute key={route.path} {...route} />
          );
        })}
      </Switch>
    </Suspense>
  </main>
);

export default Main;
