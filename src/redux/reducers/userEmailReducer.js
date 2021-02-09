import { userEmail } from "../actions/userEmailAction";
import { createReducer } from "@reduxjs/toolkit";

export default createReducer("", {
  [userEmail]: (state, action) => action.payload,
});
