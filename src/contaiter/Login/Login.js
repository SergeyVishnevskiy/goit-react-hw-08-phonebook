import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserOperation } from "../../redux/operation/userOperation";
import styles from "./Login.module.css";

const initialState = { email: "", password: "" };

const Login = () => {
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserOperation(form));
  };

  return (
    <>
      <h2 className="title">Login</h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={inputHandler}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={inputHandler}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
