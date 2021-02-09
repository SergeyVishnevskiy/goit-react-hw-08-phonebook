import React from "react";
import styles from "./OneContact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserOption } from "../../redux/operation/contactsOperation";

const OneContact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const userDeleteHandler = (id, token) => {
    dispatch(deleteUserOption(id, token));
  };
  return (
    <li className={styles.listItem}>
      <p className={styles.contactName}>{name}</p>
      <p className={styles.contactNumber}>{number}</p>
      <button
        className={styles.deleteButton}
        onClick={() => userDeleteHandler(id, token)}
      >
        Delete
      </button>
    </li>
  );
};

export default OneContact;
