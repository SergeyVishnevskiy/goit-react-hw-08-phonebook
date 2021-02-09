import { createReducer } from "@reduxjs/toolkit";
import { filterEdit } from "../actions/filterAction";

export default createReducer("", {
  [filterEdit]: (state, action) => action.payload,
});
