import { setToken } from "../actions/tokenAction";
import { createReducer } from "@reduxjs/toolkit";

export default createReducer(null, {
  [setToken]: (state, action) => action.payload,
});
