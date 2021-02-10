import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/operation/authOperation";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(state));
    setState({ ...initialState });
  };

  return (
    <div>
      <h1>Register Here</h1>

      <form onSubmit={submitHandler}>
        <p>Create your account</p>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={changeHandler}
          />
        </label>

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

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default RegisterPage;
