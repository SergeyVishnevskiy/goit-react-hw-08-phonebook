import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactSuccess,
  addContactError,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactSuccess,
  removeContactError,
  setFilter,
} from "../actions/phoneAction";

const items = createReducer([], {
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [fetchContactsSuccess]: (_, action) => [...action.payload],
  [removeContactSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});
const filter = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});
const error = createReducer(null, {
  [addContactError]: (_, action) => action.payload,
  [addContactSuccess]: () => null,
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsSuccess]: () => null,
  [removeContactError]: (_, action) => action.payload,
  [removeContactSuccess]: () => null,
});

const phonebookReducer = combineReducers({
  items,
  filter,
  error,
});
export default phonebookReducer;
