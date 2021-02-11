import "./App.css";
import React from "react";
// import { useDispatch } from "react-redux";
// import { getCurrentUser } from "./redux/operation/authOperation";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  // const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
