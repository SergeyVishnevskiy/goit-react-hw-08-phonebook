import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddContact from "../../components/AddContact/AddContact";
import AllContacts from "../../components/AllContacts/AllContacts";
import FilterContacts from "../../components/FilterContacts/FilterContacts";
import Alert from "../../components/Alert/Alert";
import { fetchContacts } from "../../redux/operation/phoneOperations";
import { getContacts, getError } from "../../redux/selectors/phoneSelector";
import { CSSTransition } from "react-transition-group";

const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <CSSTransition
        in={true}
        appear={true}
        classNames="phonebook-title"
        timeout={500}
        unmountOnExit
      >
        <h1>Phonebook</h1>
      </CSSTransition>

      <AddContact />

      <CSSTransition
        in={contacts.length > 1}
        classNames="filter"
        timeout={250}
        unmountOnExit
      >
        <FilterContacts />
      </CSSTransition>

      <AllContacts />

      {error && <Alert message={error.message} />}
    </div>
  );
};

export default ContactsPage;
