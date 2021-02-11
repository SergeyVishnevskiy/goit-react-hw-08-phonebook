import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "../actions/phoneAction";

export const addContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/contacts.json`,
      contact
    );
    dispatch(addContactSuccess({ ...contact, id: response.data.name }));
  } catch (error) {
    dispatch(addContactError(error));
  }
};
export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/contacts.json`
    );
    const contacts = response.data
      ? Object.keys(response.data).map((key) => ({
          ...response.data[key],
          id: key,
        }))
      : [];
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
export const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());
  try {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/contacts/${id}.json`)
      .then(() => dispatch(removeContactSuccess(id)));
  } catch (error) {
    dispatch(removeContactError(error));
  }
};
// export const addContact = (contact) => (dispatch) => {
//   dispatch(addContactRequest());
//   axios
//     .post("/contacts", contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch((error) => dispatch(addContactError(error)));
// };
// export const fetchContacts = () => (dispatch) => {
//   dispatch(fetchContactsRequest());
//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch((error) => dispatch(fetchContactsError(error)));
// };

// export const removeContact = (id) => (dispatch) => {
//   dispatch(removeContactRequest());
//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(removeContactSuccess(id)))
//     .catch((error) => dispatch(removeContactError(error)));
// };

// REACT_APP_BASE_URL = https://authorization-4a986-default-rtdb.firebaseio.com
