import { createReducer } from "@reduxjs/toolkit";
import {
  usersGet,
  userAdd,
  userDelete,
  userClear,
} from "../actions/itemsAction";

export default createReducer([], {
  [usersGet]: (state, action) => action.payload,
  [userAdd]: (state, action) => [...state, action.payload],
  [userDelete]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
  [userClear]: () => [],
});
