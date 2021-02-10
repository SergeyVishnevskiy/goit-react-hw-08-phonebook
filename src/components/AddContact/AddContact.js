import React, { useState, useEffect } from "react";
import styles from "./AddContact.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addContact, fetchContacts } from "../../redux/operation/operations";
import { getContacts } from "../../redux/selectors/contacts-selectors";
import { CSSTransition } from "react-transition-group";
import Alert from "../Alert/Alert";

const initState = {
  name: "",
  number: "",
  alert: false,
};

const Phonebook = () => {
  const [state, setState] = useState({ ...initState });
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = state;

    if (!name || !number) {
      return setState((prevState) => ({
        ...prevState,
        alert: true,
        alertMessage: "Please enter name and number!",
      }));
    }
    if (name.length < 2 || number.length < 2) {
      return setState((prevState) => ({
        ...prevState,
        alert: true,
        alertMessage: "Please enter correct name and number!",
      }));
    }

    contacts.some((cont) => cont.name.toLowerCase() === name.toLowerCase())
      ? setState((prevState) => ({
          ...prevState,
          alert: true,
          alertMessage: `${name} is already in contacts!`,
        }))
      : dispatch(addContact({ name, number }));

    setState((prevState) => ({ ...prevState, name: "", number: "" }));
  };

  return (
    <>
      <form className={styles.form} autoComplete="off" onSubmit={submitHandler}>
        <input
          className={styles.inputName}
          type="text"
          name="name"
          placeholder="Full Name"
          value={state.name}
          onChange={changeHandler}
        ></input>
        <input
          className={styles.inputNumber}
          type="text"
          name="number"
          placeholder="Nubmer xxx-xx-xx"
          value={state.number}
          onChange={changeHandler}
        ></input>
        <button type="submit" className={styles.buttonAddContacts}>
          Add contacts?
        </button>
      </form>
      <CSSTransition
        in={state.alert}
        classNames="alert"
        onEntered={() =>
          setState((prevState) => ({ ...prevState, alert: false }))
        }
        timeout={3000}
        unmountOnExit
      >
        <Alert message={state.alertMessage} />
      </CSSTransition>
    </>
  );
};

export default Phonebook;
