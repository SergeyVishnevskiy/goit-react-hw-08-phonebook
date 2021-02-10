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
} from "../actions/actions";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("/contacts.json", contact)
    .then(({ data }) => {
      dispatch(addContactSuccess({ ...contact, id: data.name }));
    })
    .catch((error) => dispatch(addContactError(error)));
};
export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get("/contacts.json")
    .then(({ data }) => {
      const result = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      dispatch(fetchContactsSuccess(result));
    })
    .catch((error) => dispatch(fetchContactsError(error)));
};

export const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());
  axios
    .delete(`/contacts/${id}.json`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch((error) => dispatch(removeContactError(error)));
};
