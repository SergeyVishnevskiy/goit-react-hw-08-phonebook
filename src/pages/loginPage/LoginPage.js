import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operation/authOperation";

const initialState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logIn(state));
    setState({ ...initialState });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={submitHandler}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={changeHandler}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={changeHandler}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
