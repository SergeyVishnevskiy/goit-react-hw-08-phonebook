import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserOperation } from "../../redux/operation/userOperation";
import styles from "./Registration.module.css";

const initialState = { name: "", email: "", password: "" };

const Registration = () => {
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createUserOperation(form));
  };

  return (
    <>
      <h2 className="title">Register</h2>
      <form onSubmit={submitHandler} className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={inputHandler}
          className={styles.input}
        />
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

export default Registration;
