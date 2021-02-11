import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
} from "../actions/authAction";

const initUserState = { user: null, email: null };

const user = createReducer(initUserState, {
  [registerSuccess]: (state, { payload }) => ({ ...state, payload }),
  [loginSuccess]: (state, { payload }) => ({ ...state, payload }),
  // [getCurrentUserSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => initUserState,
});
const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.idToken,
  [loginSuccess]: (_, { payload }) => payload.idToken,
  [logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  // [getCurrentUserError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user,
  token,
  error,
});
export default authReducer;
