import React from "react";
import OneContact from "../OneContact/OneContact";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions/actions";
import { removeContact } from "../../redux/operation/operations";
import { getVisibleContacts } from "../../redux/selectors/contacts-selectors";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./AllContacts.css";

const AllContacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const userDeleteHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(removeContact(id));
    dispatch(setFilter(""));
  };

  return (
    <TransitionGroup component="ul">
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames="listItem">
          <OneContact contact={contact} userDeleteHandler={userDeleteHandler} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default AllContacts;
