import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLogin } from "../redux/selectors/authSelector";

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector(isLogin);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
