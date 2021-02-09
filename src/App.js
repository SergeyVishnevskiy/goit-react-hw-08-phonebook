import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./contaiter/Home/Home";
import Registration from "./contaiter/Registration/Registration";
import Login from "./contaiter/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { getUserOperation } from "./redux/operation/contactsOperation";
import "./App.css";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (token) {
      history.replace("/");
      dispatch(getUserOperation(token));
    } else {
      history.replace("/login");
    }
  }, [token, history, dispatch]);

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
