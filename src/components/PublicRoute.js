import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "../redux/selectors/authSelector";

const PublicRoute = ({ component: Component, restricted, ...routeProps }) => {
  const isAuthenticated = useSelector(isLogin);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
