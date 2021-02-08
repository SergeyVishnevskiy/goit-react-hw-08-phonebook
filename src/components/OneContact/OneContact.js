import React from "react";
import styles from "./OneContact.module.css";

const OneContact = ({ contact: { id, name, number }, userDeleteHandler }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.contactName}>{name}</p>
      <p className={styles.contactNumber}>{number}</p>
      <button
        className={styles.deleteButton}
        data-id={id}
        onClick={userDeleteHandler}
      >
        Delete
      </button>
    </li>
  );
};

export default OneContact;
