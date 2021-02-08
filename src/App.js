import "./App.css";
import React from "react";
import AddContact from "./components/AddContact/AddContact";
import AllContacts from "./components/AllContacts/AllContacts";
import FilterContacts from "./components/FilterContacts/FilterContacts";
import Alert from "./components/Alert/Alert";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { getContacts, getError } from "./redux/selectors/contacts-selectors";

function App() {
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  return (
    <div className="container">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="titlePhonebook"
        unmountOnExit
      >
        <h1 className="titlePhonebook">Phonebook</h1>
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
}

export default App;
