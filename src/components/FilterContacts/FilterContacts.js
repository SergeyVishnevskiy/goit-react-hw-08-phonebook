import React from "react";
import styles from "./FilterConatcts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors/contacts-selectors";
import { setFilter } from "../../redux/actions/actions";

const FilterContacts = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.inputName}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        placeholder="Enter name"
        onChange={changeHandler}
        className={styles.filter}
      ></input>
    </div>
  );
};

export default FilterContacts;
