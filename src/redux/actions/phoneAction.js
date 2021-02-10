import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("phonebook/addContactRequest");
export const addContactSuccess = createAction("phonebook/addContactSuccess");
export const addContactError = createAction("phonebook/addContactError");

export const fetchContactsRequest = createAction(
  "phonebook/fetchContactRequest"
);
export const fetchContactsSuccess = createAction(
  "phonebook/fetchContactSuccess"
);
export const fetchContactsError = createAction("phonebook/fetchContactError");

export const removeContactRequest = createAction(
  "phonebook/removeContactRequest"
);
export const removeContactSuccess = createAction(
  "phonebook/removeContactSuccess"
);
export const removeContactError = createAction("phonebook/removeContactError");

export const setFilter = createAction("phonebook/setFilter");
