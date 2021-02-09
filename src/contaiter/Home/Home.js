import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddContact from "../../components/AddContact/AddContact";
import AllContacts from "../../components/AllContacts/AllContacts";
import FilterContacts from "../../components/FilterContacts/FilterContacts";
import Alert from "../../components/Alert/Alert";
import { CSSTransition } from "react-transition-group";
import "./Home.css";

const Home = () => {
  const [showAlert, setShowAlert] = useState({ status: false, text: "" });

  const contacts = useSelector((state) => state.items);

  return (
    <div>
      <h2 className="title">Phonebook</h2>
      <AddContact setShowAlert={setShowAlert} />
      {contacts.length >= 2 && <FilterContacts />}

      {contacts.length > 0 && <AllContacts />}

      <CSSTransition
        in={showAlert.status}
        timeout={250}
        classNames="alert"
        mountOnEnter
        unmountOnExit
      >
        <Alert showAlert={showAlert.text} />
      </CSSTransition>
    </div>
  );
};

export default Home;
